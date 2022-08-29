import styled from "styled-components"

const StyledSectionDevContainer = styled.div`
  width: 1440px;
  height: 802px;
  border: solid 1px black;
`

export default function SectionDev() {
    return (
        <StyledSectionDevContainer>
            <p>Dev</p>
        </StyledSectionDevContainer>
    )
}