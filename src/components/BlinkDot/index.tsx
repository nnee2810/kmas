import styled, { keyframes } from "styled-components"

const blink = keyframes`
  60% {
    opacity: 0.2
  }
  100% {
    opacity:1
  }
`
const BlinkDot = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: red;
  animation: ${blink} 1.5s linear infinite;
`

export default BlinkDot
