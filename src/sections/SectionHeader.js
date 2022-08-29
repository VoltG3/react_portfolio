import styled from "styled-components";
import { StyledSectionHeaderContainer } from './Sections.styles'
import Foto from '../img/foto.jpeg'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
    width: 880px;
    height: 310px;
`

const StyledHeaderDiv = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
    width: 880px;
    height: 68px;
  margin: 191px 0 0 0;
  filter: var(--shadow-foto);
  background: var(--color-secondary);
`

const StyledHeaderImg = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  justify-content: center;
  align-items: center;
    width: 280px;
    height: 280px;
  margin: 15px 0 0 47px;
  filter: var(--shadow-foto);
  background: var(--color-default);
  
  img {
      width: inherit;
      height: inherit;
    object-fit: cover;
  }
`

const StyledHeaderTextContent = styled.div`
  display: flex;
  position: absolute;
  z-index: 3;
  flex-direction: column;
  margin-left: 350px;
  border: solid 1px red;
  
  p:nth-child(1) { margin: 15px 0 10px 0; }
  p:nth-child(2) { margin: 0; }
  p:nth-child(3) { margin: 0; }
`

export default function SectionHeader() {
    return (
        <StyledSectionHeaderContainer>
            <StyledHeader>
                <StyledHeaderImg>
                    <img src={ Foto }  alt="img" />
                </StyledHeaderImg>

                <StyledHeaderTextContent>
                    <p className="sectionHeader-textline-header-firstpart">Hei,</p>
                    <p className="sectionHeader-textline-header-secondpart">mitt navn er</p>
                    <p className="sectionHeader-textline-header-secondpart">Kristian Danoss</p>
                </StyledHeaderTextContent>

                <StyledHeaderDiv>
                    <p className="sectionHeader-textline-subheader">pre-dev</p>
                </StyledHeaderDiv>
            </StyledHeader>
        </StyledSectionHeaderContainer>
    )
}
