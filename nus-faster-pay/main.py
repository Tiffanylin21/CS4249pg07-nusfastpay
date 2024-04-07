# save this file as app.py
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Update this with the path to your Google service account file
SERVICE_ACCOUNT_FILE = './secrets.json'

# Update this with your specific Google Sheet details
SPREADSHEET_ID = '13RJWOrea7Gqs_vDfVLSV9gXCxafD25CGmj2SnhTemts'
RANGE_NAME = 'Sheet1!A2:B2'

# Setup the Sheets API
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
credentials = Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES)
service = build('sheets', 'v4', credentials=credentials)

@app.route('/updateSheet', methods=['POST'])
def update_sheet():
    data = request.json
    config_code = data.get('configCode')  # Retrieve the config code from the POST data
    total_clicks = data.get('totalClicks')
    total_time_taken = data.get('totalTimeTakenInSeconds')

    # Read the sheet data to find the next empty row
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=SPREADSHEET_ID, range='Sheet1!A:A').execute()
    values = result.get('values', [])
    next_empty_row = len(values) + 1

    # Calculate the range to update
    update_range = f'Sheet1!A{next_empty_row}:C{next_empty_row}'

    # Update the Google Sheet
    body = {
        'values': [[config_code, total_clicks, total_time_taken]]  # Make sure to include the config code in the values
    }
    result = service.spreadsheets().values().update(
        spreadsheetId=SPREADSHEET_ID, range=update_range,
        valueInputOption='USER_ENTERED', body=body).execute()
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
