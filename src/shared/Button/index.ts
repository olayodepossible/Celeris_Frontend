import styled from 'styled-components';
interface ButtonProps {
  rounded?: 'true' | 'false';
}
export const CelerisPrimaryBtn = styled.button<ButtonProps>`
  background: #207edf;
  width: fit-content;
  border-radius: ${(props) => (props.rounded ? '80px' : '10px')};
  color: #fff;
  border: none;
  padding: ${(props) => (props.rounded === 'true' ? '27px 32px' : '10px')};
  width: fit-content;
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.600000023841858px;
  text-align: center;
  font-family: 'Poppins', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
    sans-serif;
`;
export const CelerisSecondaryBtn = styled(CelerisPrimaryBtn)`
  color: #207edf;
  background-color: #fff;
`;
