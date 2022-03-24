import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: ${({width}) => width};
  height: 40px;
  border-radius: 50px;
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 50px;
  color: ${({theme}) => theme.colors.primary};
  font-size: 1em;
  font-weight: 800;
  transition: box-shadow .4s ease;

  ${({theme}) => theme.media.desktop}{
    background: ${({theme}) => theme.colors.white};
  }

  :hover{
    box-shadow: 0 10px 20px -15px gray;
  }
`;

export default Button;