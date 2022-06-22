import React from "react";
import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
import { Content } from "../HomePageComponents/HeroCss";
interface ButtonType {
  children: string;
}
const ButtonComponent = styled.button`
  background-color: white;
  color: #003145;
  padding: 0.6em 1.2em;
  width: max-content;
  border: transparent 1px solid;
  font-family: "Poppins", sans-serif;
  border-radius: 0.5em;
  font-size: 1.2rem;
  ${Content} & {
    @media ${devices.laptop} {
      margin-left: 3.1em;
    }
  }
`;
function Button({ children }: ButtonType) {
  return <ButtonComponent>{children}</ButtonComponent>;
}

export default Button;
