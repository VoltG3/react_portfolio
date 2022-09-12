import {
    StyledSectionDesignContainer,
    StyledDesignCoversContainer } from './Design.style'

import LinkFrame from '../components/LinkFrame'
import BtnArrow from '../components/BtnArrow'

import design_google_sketchup_presentasjon from '../img/covers/design_google_sketchup_presentasjon.png'

export default function Design() {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: 'auto'
            }}
        >
            <BtnArrow
                theme={"light"}
                link={"/designextension"}
                direction={"right"}
            />

            <StyledSectionDesignContainer>
                <StyledDesignCoversContainer>
                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_google_sketchup_presentasjon }
                        header={"Google SketchUp - presentasjon"}
                        link={"https://drive.google.com/file/d/1wkv_5bES41PgiHmYlQdr57XqwwKkhLSZ/view?usp=sharing"}
                        width={"1440"} //600
                        height={"800"} //400
                    />
                </StyledDesignCoversContainer>
            </StyledSectionDesignContainer>
        </div>
    )
}
