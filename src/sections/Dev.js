import {
    StyledSectionDevContainer,
    StyledDevCoversContainer } from './Dev.style'
import LinkFrame from '../components/LinkFrame'

import dev_js_array from '../img/covers/dev_js_array.png'
import dev_figma_space from '../img/covers/dev_figma_space.png'
import dev_html_frontendmentor from '../img/covers/dev_html_frontendmentor_modern_art_gallery.png'

export default function Dev() {
    return (
        <StyledSectionDevContainer>
            <StyledDevCoversContainer>
                <LinkFrame
                    type={"dev"}
                    subtype={"github"}
                    img={ dev_js_array }
                    header={"Vanilla JS - Array"}
                    width={"468px"}
                    height={"248px"}
                />

                <LinkFrame
                    type={"dev"}
                    subtype={"figma"}
                    img={ dev_figma_space }
                    header={"Figma - Space"}
                    width={"468px"}
                    height={"248px"}
                />

                <LinkFrame
                    type={"dev"}
                    subtype={"github"}
                    img={ dev_html_frontendmentor }
                    header={"HTML - FrontEndMentor"}
                    width={"365px"}
                    height={"578px"}
                />
            </StyledDevCoversContainer>
        </StyledSectionDevContainer>
    )
}
