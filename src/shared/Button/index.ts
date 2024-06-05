import styled from 'styled-components';
interface ButtonProps {
  rounded?: 'true' | 'false';
  padding?: string;
  width?: string;
  font?: {
    f: string;
    s: string;
    w: number;
  };
}
export const CelerisPrimaryBtn = styled.button<ButtonProps>`
  background: #207edf;
  border-radius: ${(props) => (props.rounded ? '80px' : '10px')};
  color: #fff;
  border: none;
  padding: ${(props) =>
    props.rounded === 'true' ? '27px 32px' : props.padding || '10px'};
  width: ${(props) => (props.width ? props.width : 'fit-content')};
  font-family: ${(props) => (props.font?.f ? props.font?.f : 'DM Sans')};
  font-size: ${(props) => (props.font?.s ? props.font?.s + 'px' : '16px')};
  font-weight: ${(props) => (props.font?.w ? props.font?.w : 700)};
  line-height: 16px;
  letter-spacing: 1.600000023841858px;
  text-align: center;
  &:disabled {
    cursor: not-allowed;
    background: #207edf80;
  }
`;
export const CelerisSecondaryBtn = styled(CelerisPrimaryBtn)`
  color: #207edf;
  background-color: #fff;
`;
export const CelerisDarkBtn = styled(CelerisPrimaryBtn)`
  color: white;
  background-color: #060b26;
`;

export const CelerisPrimarySubmitBtn = styled(CelerisPrimaryBtn).attrs({
  type: 'submit',
})`
  padding: 11px 0;
`;
