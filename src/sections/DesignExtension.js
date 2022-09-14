import { StyledDesignExtensionLayout } from './Design.style'

import LinkFrame from '../components/LinkFrame'
import BtnArrow from '../components/BtnArrow'

import design_book from '../img/covers/design_book.jpg'
import design_plakat_arrangment from '../img/covers/design_plakat_arrangment.jpg'
import design_ticket_sankthansfeiring from '../img/covers/design_ticket_sankthansfeiring.jpg'
import design_plakat_soloforestilling from '../img/covers/design_plakat_soloforestilling.jpg'
import design_3d_makett from '../img/covers/design_3d_makett.png'
import design_plakat_japan from '../img/covers/design_plakat_japan.jpg'
import design_google_sketchup_presentasjon from '../img/covers/design_google_sketchup_presentasjon.png'
import design_postkort from '../img/covers/design_postkort.jpg'

export default function DesignExtension() {
    return (
        <div className={"section--template"}>

            <BtnArrow
                theme={"light"}
                link={"/default"}
                direction={"left"}
            />

            <div className={"section--template"}
                 style={{
                     background: 'var(--color-none)'
                 }}
            >
                <StyledDesignExtensionLayout>

                    {/*First Block*/}

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_book }
                        header={"Book design"}
                        link={"https://drive.google.com/drive/folders/1oQIGsrE9Md_1Yo3Hxw0eVYnta81OSm_Q?usp=sharing"}
                        width={"550"}
                        height={"350"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_ticket_sankthansfeiring }
                        header={"Arangment Tiket - SanktHansFeiring"}
                        link={"https://drive.google.com/file/d/1pZHx_XVqvgkOq3p7Ug6THvzoezgVXLqR/view?usp=sharing"}
                        width={"550"}
                        height={"300"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_plakat_arrangment }
                        header={"Arangment Plakat"}
                        link={"https://drive.google.com/file/d/1iKQYO9nusessgChTcYg9CUH185sohLZX/view?usp=sharing"}
                        width={"450"}
                        height={"781"}
                    />

                    {/*Second Block*/}

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_plakat_soloforestilling }
                        header={"Arangment Plakat - soloforestilling"}
                        link={"https://drive.google.com/file/d/1dP4MbIjepWaeI-qUGxLB29GyAWIDEwLD/view?usp=sharing"}
                        width={"550"}
                        height={"681"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_3d_makett }
                        header={"3D Modell"}
                        link={"https://drive.google.com/drive/folders/1_axoOFW-hXBuAUPpXynPXtj_7KqwuawJ?usp=sharing"}
                        width={"450"}
                        height={"300"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_plakat_japan }
                        header={"Plakat"}
                        link={"https://drive.google.com/file/d/1dP4MbIjepWaeI-qUGxLB29GyAWIDEwLD/view?usp=sharing"}
                        width={"450"}
                        height={"250"}
                    />

                    {/*Third Block*/}

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_postkort }
                        header={"Postkort"}
                        /*link={""}*/
                        width={"450"}
                        height={"350"}
                    />

                    <LinkFrame
                        type={"design"}
                        subtype={"design"}
                        img={ design_google_sketchup_presentasjon }
                        header={"Google SketchUp - presentasjon"}
                        link={"https://drive.google.com/file/d/1wkv_5bES41PgiHmYlQdr57XqwwKkhLSZ/view?usp=sharing"}
                        width={"550"}
                        height={"350"}
                    />

                </StyledDesignExtensionLayout>
            </div>
        </div>
    )
}
