import {
    StyledContentContainer,
    StyledSectionInfoContainer} from './Info.style'

export default function InfoExtension() {
    return (
        <>
            <StyledSectionInfoContainer>
                <div>

                    <p>extension</p>

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