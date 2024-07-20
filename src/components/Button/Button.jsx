import styled from "styled-components";

const Button = (props) => {
  const { children, isActive, buttonStyle, onClick } = props;

  const style = {
    background: isActive ? buttonStyle.bgColor : '#D9D9D9',
    color: isActive ? (buttonStyle.color ?? '#000') : '#fff',
    width: buttonStyle.with,
    hover: isActive ? buttonStyle.hover : '',
    cursor: isActive ? 'pointer' : 'default'
  };

  const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 16px;
    background: ${style.background};
    color: ${style.color};
    padding: 16px 0;
    cursor: ${style.cursor};
    width: ${buttonStyle.width};
    ${isActive && (
      `&:hover {
        transition: 0.2s;
        background: ${buttonStyle.hover};
        font-weight: ${buttonStyle.hover === 'bold' ? 700 : ''};
      }`
    )}
  `;

  return (
    <Button onClick={onClick} disabled={!isActive}>{children}</Button>
  );
};

export default Button;