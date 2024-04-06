import styled from "styled-components";
import { COLORS } from "../Colors";

export const FilledOrangeButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${COLORS.primary};
  font-weight: bold;
  font-size: 16px;
  padding: 12px 24px 12px 24px;
  color: ${COLORS.white};
  align-self: center;
  text-align: center;
  border: 1px solid orange;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;
