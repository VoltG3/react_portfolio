import {
    StyledSectionHeaderContainer,
    StyledHeaderInner,
    StyledHeaderLine,
    StyledHeaderImg,
    StyledHeaderTextContent } from './Header.style'

import Foto from '../img/foto.jpeg'

export default function Header() {
    return (
        <StyledSectionHeaderContainer>
            <StyledHeaderInner>
                <StyledHeaderImg>
                    <img src={ Foto }  alt="img" />
                </StyledHeaderImg>

                <StyledHeaderTextContent>
                    <p className="sectionHeader-textline-header-firstpart">Hei,</p>
                    <p className="sectionHeader-textline-header-secondpart">mitt navn er</p>
                    <p className="sectionHeader-textline-header-secondpart">Kristian Danoss</p>
                </StyledHeaderTextContent>
                <div>

                </div>
                <StyledHeaderLine>
                    <p className="sectionHeader-textline-subheader">pre-dev</p>
                </StyledHeaderLine>
            </StyledHeaderInner>
        </StyledSectionHeaderContainer>
    )
}
