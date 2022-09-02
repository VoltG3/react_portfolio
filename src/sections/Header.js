import {
    StyledSectionHeaderContainer,
    StyledHeaderInner,
    StyledHeaderLine,
    StyledHeaderImg,
    StyledHeaderTextContent } from './Header.style'

import Foto from '../img/foto.jpeg'

import { Link } from 'react-router-dom'

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
                   {/* <Link to="/default"><p>Def</p></Link>
                    <Link to="/infoextension"><p>Inf</p></Link>
                    <Link to="/devextension"><p>Dev</p></Link>
                    <Link to="/designextension"><p>Des</p></Link>*/}
                </div>
                <StyledHeaderLine>
                    <p className="sectionHeader-textline-subheader">pre-dev</p>
                </StyledHeaderLine>
            </StyledHeaderInner>
        </StyledSectionHeaderContainer>
    )
}
