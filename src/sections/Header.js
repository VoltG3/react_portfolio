import {
    StyledHeaderInner,
    StyledHeaderLine,
    StyledHeaderImg,
    StyledHeaderTextContent } from './Header.style'

import Foto from '../img/foto.jpeg'

export default function Header() {
    return (
        <div
            className={"section--template"}
            style={{
                background: 'var(--color-none)',
                paddingTop: 'min(max(9.722vw, 0px), 140px)',
                paddingBottom: 'min(max(9.722vw, 0px), 140px)',
                borderBottom: 'solid 1px var(--color-default)'
            }}
        >

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
                    <p className="sectionHeader-textline-subheader">portfolio</p>
                </StyledHeaderLine>
            </StyledHeaderInner>
        </div>
    )
}
