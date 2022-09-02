import {
    StyledSectionDevContainer,
    StyledDevCoversContainer, StyledContentContainer
} from './Dev.style'
import LinkFrame from '../components/LinkFrame'
import dev_js_array from "../img/covers/dev_js_array.png";
import dev_figma_space from "../img/covers/dev_figma_space.png";
import dev_html_frontendmentor from "../img/covers/dev_html_frontendmentor_modern_art_gallery.png";

import { Link } from 'react-router-dom'

import IconArrow from '../img/iconsBtn/icons_arrow.png'

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
                    <img
                        src={ IconArrow }
                        alt="arrow"
                        style={{
                            transform: 'scaleX(-1)',
                            filter: 'var(--icon-filter-light)'
                        }}
                    />
                </Link>
            </StyledContentContainer>
        </>
    )
}
