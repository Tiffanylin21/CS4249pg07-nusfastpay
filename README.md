# CS4249pg07-nusfastpay
Source code for CS4249 group 7 NUSFasterPay WebApp for an improved NUSFastPay.

Click [here](https://main--nus-faster-pay.netlify.app/) to access the NUSFasterPay.
To start a trial, you may input a trial code such as `B#C#A`. The trial code is configured as in the format `X#Y#Z` with values as follows:
- `X` refers to presence of payment details page (IV3). `A` indicating shown and `B` indicating not shown.
- `Y` refers to the size of payment list items. `A` indicates small, `B` indicates medium and `C` indicates large.
- `Z` refers to the number of payments to be made as well as the specific items to pay for. It's possible values is as follows:
  - `A` indicates 1 payment (edu rec)
  - `B` indicates 1 payment (housing fees)
  - `C` indicates 1 payment (season parking fees)
  - `D` indicates 3 payment (edu rec + housing + season parking)
  - `E` indicates 3 payment (library + housing + season parking)
  - `F` indicates 3 payment (edu rec + library + housing)


## Brief Description of files and folders
- `./src/Screens` : folder container source code for each screen in NUSFasterPay.
- `./src/Screens/StartTrial/index.tsx` : source code for initial starting screen after keying in trial code. Contains the start of time logging.
- `./src/Screens/QRCode/index.tsx` : source code for last screen indicating end of trial. Contains HTTP POST request to send time and click logging information to backend database.
- `./src/Utils` : folder containing all shared components, types, colors, images and methods used across the different screens in NUSFasterPay
- `./src/Utils/methods/useClickTracker.tsx` : source code for click logger method used throughout NUSFasterPay.
