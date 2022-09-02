import {
    StyledContentContainer,
    StyledSectionInfoContainer } from './Info.style'

export default function Info() {
    return (
        <>
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
            </StyledSectionInfoContainer>

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
