import styled from "styled-components";
import {Theme} from "../../Utils/Theme";

export const SelectStyled = styled.div`
  width: 12.5rem;
  height: 2rem;
  background: transparent;
  font-size: .875rem;
  border: 1px solid ${Theme.colors.darkColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
  
  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    top: .4rem;
    left: 10rem;
    width: .625rem;
    height: .625rem;
    border: 3px solid black;
    transform: rotate(45deg);
    border-top: none;
    border-left: none;

    &:focus {
      transform: rotate(180deg);
    }
  }
`

export const TitleStyled = styled.p`
  padding-left: .5rem;
  position: relative;
`

export const OptionWrapperStyled = styled.div`
  background: #E8E9E4;
  min-height: 1.25rem;
  border: 1px solid ${Theme.colors.darkColor};
  position: absolute;
  right: 0;
  top: 2.7rem;
  padding: 0;
  text-align: center;
  z-index: 10;
`

export const OptionStyled = styled.option`
  padding: .2rem 1.5rem;
  cursor: pointer;
  position: relative;
  
  &:hover {
    background-color: ${Theme.colors.firstSectionColor};
  }
`