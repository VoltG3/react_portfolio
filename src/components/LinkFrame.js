import styled from "styled-components"

import IconGoogleDriver from '../img/iconsBtn/icon_googlrdriver.png'
import img_designSketcUp from '../img/covers/design_google_sketchup_presentasjon.png'

const StyledLinkFrameContainer = styled.div`
      width: 545px;
      height: 363px;
  filter: var(--shadow-foto);
  
   .cover {
        width: inherit;
        height: inherit;
    object-fit: cover;
    border: solid 1px var(--color-secondary);
  }
`

const StyledLinkFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    width: inherit;
    height: 49px;
  margin-top: -6px;
  background: var(--color-none);
  border: solid 1px var(--color-secondary);
  
  .iconBtn {
      width: 39px;
      height: 37px;
    margin: 0 15px 0 0;
    filter: var(--icon-filter-dark);
  }
`

export default function LinkFrame() {
    return (
        <StyledLinkFrameContainer>
            <img className="cover" src={ img_designSketcUp }  alt="img" />

            <StyledLinkFrame>
                <p className="linkFrame-textline-dark">
                    Google SketchUp - presentasjon
                </p>

                <img className="iconBtn" src={ IconGoogleDriver }  alt="icon" />
            </StyledLinkFrame>
        </StyledLinkFrameContainer>
    )
}
