import {
    StyledContentContainer,
    StyledSectionDesignContainer,
    StyledDesignCoversContainer } from './Design.style'
import LinkFrame from '../components/LinkFrame'

import design_google_sketchup_presentasjon from "../img/covers/design_google_sketchup_presentasjon.png";

import { Link } from 'react-router-dom'

import IconArrow from '../img/iconsBtn/icons_arrow.png'

export default function DesignExtension() {
    return (
        <>
            <StyledSectionDesignContainer>
                <StyledDesignCoversContainer>

                    <p>extension</p>

                </StyledDesignCoversContainer>
            </StyledSectionDesignContainer>

            <StyledContentContainer>
                <Link to="/default">
                    <img
                        src={ IconArrow }
                        alt="arrow"
                        style={{
                            transform: 'scaleX(-1)',
                            filter: 'var(--icon-filter-dark)'
                        }}
                    />
                </Link>
            </StyledContentContainer>
        </>
    )
}