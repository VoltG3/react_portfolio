import {
    StyledSectionInfoContainer,
    StyledInfoCellsContainer } from './Info.style'
import BtnArrow from '../components/BtnArrow'
import InfoCell from '../components/InfoCell'

export default function InfoExtension() {
    return (
        <>
            <BtnArrow
                theme={"light"}
                link={"/default"}
                direction={"left"}
            />

            <StyledSectionInfoContainer>
                <div>
                    <p className="sectionInfo-textline-textcontent">
                        Jeg har vært opptatt av IT siden middelalderen: MS-DOS / Win 3.1
                    </p>

                    <p className="sectionInfo-textline-textcontent">
                        På tiden lærer jeg mye på egen hånd om JavaScript og Java. Jeg
                        liker å samarbeide i gruppe. Fordypning inn i stadige utfordringer
                        i problemløsninger.
                    </p>

                    <p className="sectionInfo-textline-textcontent">
                        Mine hobbyer er historie før steinalderen, eksperimentell arkeologi
                        og å spille munnharpa.
                    </p>

                    <p className="sectionInfo-textline-textcontent">
                        Jeg trivers med å utforske det metanivået av programmer samt
                        interaksjoner og sammenheger gjennom de. Har hat diverse basic
                        kurs inni i BackEnd, CLI-Linux. Ser frem etter en miljø hvor
                        jeg kan bidra og etterhvert vokse til FullStack.
                    </p>
                </div>

                <StyledInfoCellsContainer>
                    <InfoCell
                        cellHeader = {"Front-End"}
                        textLine01 = {"JobLoop, 1 år,"}
                        linkHref01 = {"www.kodehode.no"}
                        textLine02 = {""}
                        linkHref02 = {""}
                    />

                    <InfoCell
                        cellHeader = {"Tehnisk"}
                        textLine01 = {"IBM PC Maintenance, 3 måneder"}
                        linkHref01 = {""}
                        textLine02 = {"Praksis,"}
                        linkHref02 = {"www.infocare.com/no"}
                    />

                    <InfoCell
                        cellHeader = {"Back-End"}
                        textLine01 = {"Programmering, 960 timer, "}
                        linkHref01 = {"www.ltpc.lv/"}
                        textLine02 = {"Praksis,"}
                        linkHref02 = {"www.diggecard.no/"}
                    />

                    <InfoCell
                        cellHeader = {"Design"}
                        textLine01 = {"Multimedie design, 960 timer,"}
                        linkHref01 = {"www.ltpc.lv/"}
                        textLine02 = {"Frivilig praksis,"}
                        linkHref02 = {"www.latviesibergena.no/"}
                    />
                </StyledInfoCellsContainer>
            </StyledSectionInfoContainer>
        </>
    )
}