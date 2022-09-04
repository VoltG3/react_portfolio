import {
    StyledSectionDesignContainer,
    StyledDesignCoversContainerExtension } from './Design.style'

import LinkFrame from '../components/LinkFrame'
import BtnArrow from '../components/BtnArrow'

import design_book from '../img/covers/design_book.jpg'
import design_arangment_feiring from '../img/covers/design_arangment_fest.jpg'
import design_ticket_sankthansfeiring from '../img/covers/design_ticket_santhansfeiring.jpg'
import design_arangment_teater from '../img/covers/design_arangment_teater.jpg'
import design_3d_makett from '../img/covers/design_3d_makett.png'
import design_japan from '../img/covers/design_japan.jpg'
import design_google_sketchup_presentasjon from '../img/covers/design_google_sketchup_presentasjon.png'
import design_postkort from '../img/covers/design_postkort.jpg'

export default function DesignExtension() {
    return (
        <>
            <BtnArrow
                theme={"light"}
                link={"/default"}
                direction={"left"}
            />

            <StyledSectionDesignContainer>
                <StyledDesignCoversContainerExtension>

                    {/*First Block*/}

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_book }
                        header={"Book design"}
                        /*link={""}*/
                        width={"550px"}
                        height={"350px"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_ticket_sankthansfeiring }
                        header={"Arangment Tiket - Sankt Hans Feiring"}
                        /*link={""}*/
                        width={"550px"}
                        height={"200px"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_arangment_feiring }
                        header={"Arangment Plakat"}
                        /*link={""}*/
                        width={"450px"}
                        height={"781px"}
                    />

                    {/*Second Block*/}

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_arangment_teater }
                        header={"Arangment Plakat"}
                        /*link={""}*/
                        width={"550px"}
                        height={"781px"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_3d_makett }
                        header={"3D Modell"}
                        /*link={""}*/
                        width={"450px"}
                        height={"300px"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_japan }
                        header={"Plakat"}
                        /*link={""}*/
                        width={"450px"}
                        height={"250px"}
                    />

                    {/*Third Block*/}

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_postkort }
                        header={"Postkort"}
                        /*link={""}*/
                        width={"450px"}
                        height={"350px"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_google_sketchup_presentasjon }
                        header={"Google SketchUp - presentasjon"}
                        link={"https://drive.google.com/file/d/1wkv_5bES41PgiHmYlQdr57XqwwKkhLSZ/view?usp=sharing"}
                        width={"550px"}
                        height={"350px"}
                    />
                </StyledDesignCoversContainerExtension>
            </StyledSectionDesignContainer>
        </>
    )
}