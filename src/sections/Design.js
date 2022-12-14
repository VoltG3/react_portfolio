import { StyledDesignCoversContainer } from './Design.style'

import LinkFrame from '../components/LinkFrame'
import BtnArrow from '../components/BtnArrow'

import design_google_sketchup_presentasjon from '../img/covers/design_google_sketchup_presentasjon.png'

export default function Design() {
    return (
        <div className={"section--template"}>

            <BtnArrow
                theme={"light"}
                link={"/designextension"}
                direction={"right"}
            />

            <div className={"section--template"}
                 style={{
                     backgroundColor: 'var(--color-none)'
                 }}
            >

                <StyledDesignCoversContainer>

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_google_sketchup_presentasjon }
                        header={"Google SketchUp - presentasjon"}
                        link={"https://drive.google.com/file/d/1wkv_5bES41PgiHmYlQdr57XqwwKkhLSZ/view?usp=sharing"}
                        width={"800"}
                        height={"500"}
                    />

                </StyledDesignCoversContainer>
            </div>
        </div>
    )
}
