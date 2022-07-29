import styled, { keyframes } from "styled-components";

export const slideUp = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-40px);
    opacity:1;
  }
`;

export const SlideEffectWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export interface AnimationProps {
    duration?: string,
    delayTime?: string
  }
