import {
    StyledContentContainer,
    StyledSectionDesignContainer,
    StyledDesignCoversContainer } from './Design.style'
import LinkFrame from '../components/LinkFrame'

import design_google_sketchup_presentasjon from "../img/covers/design_google_sketchup_presentasjon.png";


export default function Design() {
    return (
        <>
            <StyledSectionDesignContainer>
                <StyledDesignCoversContainer>
                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_google_sketchup_presentasjon }
                        header={"Vanilla JS - Array"}
                        link={"https://drive.google.com/file/d/1wkv_5bES41PgiHmYlQdr57XqwwKkhLSZ/view?usp=sharing"}
                        width={"645px"}
                        height={"363px"}
                    />
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
