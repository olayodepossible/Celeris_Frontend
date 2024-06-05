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
export const AccountLayout = styled.div<ButtonProps>`
  background: #c4c4c41a;
  border-radius: ${(props) => (props.rounded ? '80px' : '10px')};
  border: none;
  padding: ${(props) =>
    props.rounded === 'true' ? '27px 32px' : props.padding || '20px 20px'};
  width: ${(props) => (props.width ? props.width : '98%')};
  font-family: ${(props) => (props.font?.f ? props.font?.f : 'DM Sans')};
  font-size: ${(props) => (props.font?.s ? props.font?.s + 'px' : '16px')};
  font-weight: ${(props) => (props.font?.w ? props.font?.w : 700)};
  line-height: 16px;
  letter-spacing: 1.600000023841858px;
  text-align: center;
  margin-bottom: 20px;
  .header {
    font-size: 16px;
    font-weight: 700;
    line-height: 22.4px;
    text-align: left;
    margin-bottom: 0px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
    align-items: center;
    gap: 12px;
    
    .title {
      font-size: 12px;
      font-weight: 700;
      line-height: 16.8px;
      text-align: left;
      color: #00000080;
      margin-bottom: 5px;
    }
    .amount {
      font-size: 14px;
      font-weight: 700;
      line-height: 19.6px;
      text-align: center;
    }
  }
  `;
export const AccountDetailsLayout = styled(AccountLayout)`
.content{
  width: 100%;
    border-bottom: 1px solid #00000033;
    gap: 20px;
    /* div{
      max-width: 200px;
    } */
    .amount {
      text-align: left;
    }
  }`


export const InquiryHistoryLayout = styled(AccountLayout)`
.content{
  border-bottom: 1px solid #00000033;
  gap: 12px;
    .amount {
        text-align: left;
    }
}

`