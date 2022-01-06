import { CSSProperties, HTMLProps } from "react"
import styled from "styled-components"
import theme from "themes/Default"

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  width?: CSSProperties['width']
  backgroundColor?: Colors
  borderColor?: Colors
  outline?: boolean
}

interface GetColorParams {
  color?: Colors
  outline?: boolean
}

const getBackgroundColor = ({color, outline}:GetColorParams) => {
  if(outline){
    return 'transparent'
  }
  
  if(!color){
    return theme.colors.primary
  }

  return theme.colors[color];
}

const getBorder = ({color}:GetColorParams) => {
  if(color){
    return `1px solid ${theme.colors[color]}`
  }

  return `1px solid transparent`
}

export const Button = styled.button<ButtonProps>`
  width: ${({width}) => width || '100px'};
  max-width: 100%;
  
  padding: 10px 20px;
  background-color: ${
    ({backgroundColor, outline}) => getBackgroundColor({
      color: backgroundColor,
      outline
    })
  };

  border: ${
    ({borderColor}) => getBorder({
      color: borderColor
    })
  };

  border-radius: 10px;
`
