import styled from "styled-components";
const ButtonContainer = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
font-size: 16px;
padding: 16px 0;
`;
const Button = (props) => {
  const { children, isActive, buttonStyle, onClick } = props;

  const style = {
    background: isActive ? buttonStyle.bgColor : '#D9D9D9',
    color: isActive ? (buttonStyle.color ?? '#000') : '#fff',
    width: buttonStyle.width,
    hover: isActive ? buttonStyle.hover : '',
    cursor: isActive ? 'pointer' : 'default'
  };



  return (
    <ButtonContainer className={isActive ? 'hoveredButton' : ''} style={{
      background: style.background,
      color: style.color,
      cursor: style.cursor,
      width: style.width,
    }} onClick={onClick} disabled={!isActive}>{children}</ButtonContainer>
  );
};

export default Button;