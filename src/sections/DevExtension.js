import {
    StyledSectionDevContainer,
    StyledDevCoversContainer, StyledContentContainer
} from './Dev.style'
import LinkFrame from '../components/LinkFrame'
import dev_js_array from "../img/covers/dev_js_array.png";
import dev_figma_space from "../img/covers/dev_figma_space.png";
import dev_html_frontendmentor from "../img/covers/dev_html_frontendmentor_modern_art_gallery.png";

import { Link } from 'react-router-dom'

export default function DevExtension() {
    return (
        <>
            <StyledSectionDevContainer>
                <StyledDevCoversContainer>

                    <p>extension</p>

                </StyledDevCoversContainer>
            </StyledSectionDevContainer>

            <StyledContentContainer>
                <Link to="/default">
                    <div style={{
                        width: '88px',
                        height: '74px',
                        border:'solid 3px red',
                        margin: '0 29px 29px 0'
                    }}></div>
                </Link>
            </StyledContentContainer>
        </>
    )
}
