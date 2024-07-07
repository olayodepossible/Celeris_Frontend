import styled from "styled-components";
interface ButtonProps {
  rounded?: "true" | "false";
  variant?: "primary" | "secondary" | "dark";
}
export const CelerisBtn = styled.button<ButtonProps>`
  background: ${(props) => {
    if (props.variant === "primary") {
      return "#207edf";
    } else if (props.variant === "secondary") {
      return "#fff";
    } else {
      return "#060b26";
    }
  }};
  border-radius: ${(props) => (props.rounded ? "80px" : "10px")};
  color: ${(props) => {
    if (props.variant === "primary" || props.variant === "dark") {
      return "#fff";
    } else {
      return "#207edf";
    }
  }};
  border: none;
  padding:  10px 15px;
  width: 100%;
  font-family: "Poppins";
  font-size: "12px";
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 1.600000023841858px;
  text-align: center;
  &:disabled {
    cursor: not-allowed;
    background: #207edf80;
  }
`;

export const CelerisPrimarySubmitBtn = styled(CelerisBtn).attrs({
  type: "submit",
})`
  padding: 11px 0;
`;
