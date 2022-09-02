import {
    StyledContentContainer,
    StyledSectionInfoContainer} from './Info.style'

import { Link } from 'react-router-dom'

import IconArrow from '../img/iconsBtn/icons_arrow.png'

export default function InfoExtension() {
    return (
        <>
            <StyledSectionInfoContainer>
                <div>

                    <p>extension</p>

                </div>
            </StyledSectionInfoContainer>

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