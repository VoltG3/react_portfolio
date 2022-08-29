import styled from "styled-components"

const StyledSectionInfoContainer = styled.div`
  width: 1440px;
  height: 500px;
  border: solid 1px black;
`

export default function SectionInfo() {
    return (
        <StyledSectionInfoContainer>
            <p>Info</p>
        </StyledSectionInfoContainer>
    )
}
