import { StyledSectionDevContainer } from './Dev.style'
import LinkFrameProps from '../components/LinkFrameProps'

import dev_js_array from '../img/covers/dev_js_array.png'
import dev_figma_space from '../img/covers/dev_figma_space.png'
import dev_html_frontendmentor from '../img/covers/dev_html_frontendmentor_modern_art_gallery.png'

export default function Dev() {
    return (
        <StyledSectionDevContainer>
            <p>Dev</p>
            <LinkFrameProps
                img={ dev_js_array }
                header={"Vanilla JS - Array"}
            />

            <LinkFrameProps
                img={ dev_figma_space }
                header={"Figma - Space"}
            />

            <LinkFrameProps
                img={ dev_html_frontendmentor }
                header={"HTML - FrontEndMentor"}
            />
        </StyledSectionDevContainer>
    )
}
