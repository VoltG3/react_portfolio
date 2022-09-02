import {
    StyledContentContainer,
    StyledSectionDesignContainer,
    StyledDesignCoversContainer } from './Design.style'
import LinkFrame from '../components/LinkFrame'

import design_google_sketchup_presentasjon from "../img/covers/design_google_sketchup_presentasjon.png";


export default function DesignExtension() {
    return (
        <>
            <StyledSectionDesignContainer>
                <StyledDesignCoversContainer>

                    <p>extension</p>

                </StyledDesignCoversContainer>
            </StyledSectionDesignContainer>

            <StyledContentContainer>
                <div style={{
                    width: '88px',
                    height: '74px',
                    border:'solid 3px red',
                    margin: '0 29px 29px 0'
                }}></div>
            </StyledContentContainer>
        </>
    )
}