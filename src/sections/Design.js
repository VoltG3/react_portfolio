import {
    StyledSectionDesignContainer,
    StyledDesignCoversContainer } from './Design.style'
import LinkFrame from '../components/LinkFrame'

import design_google_sketchup_presentasjon from "../img/covers/design_google_sketchup_presentasjon.png";


export default function Design() {
    return (
        <StyledSectionDesignContainer>
            <StyledDesignCoversContainer>
                <LinkFrame
                    type={"design"}
                    subtype={"design"}
                    img={ design_google_sketchup_presentasjon }
                    header={"Vanilla JS - Array"}
                    width={"645px"}
                    height={"363px"}
                />
            </StyledDesignCoversContainer>
        </StyledSectionDesignContainer>
    )
}
