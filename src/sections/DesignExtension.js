import {
    StyledSectionDesignContainer,
    StyledDesignCoversContainer } from './Design.style'

import LinkFrame from '../components/LinkFrame'
import BtnArrow from '../components/BtnArrow'

import design_google_sketchup_presentasjon from '../img/covers/design_google_sketchup_presentasjon.png'

export default function DesignExtension() {
    return (
        <>
            <BtnArrow
                theme={"light"}
                link={"/default"}
                direction={"left"}
            />

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
        </>
    )
}