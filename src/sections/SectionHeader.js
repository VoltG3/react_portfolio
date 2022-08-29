import styled from "styled-components"

const StyledSectionHeaderContainer = styled.div`
  width: 1440px;
  height: 500px;
  border: solid 1px black;
`

export default function SectionHeader() {
    return (
        <StyledSectionHeaderContainer>
            <p>Header</p>
        </StyledSectionHeaderContainer>
    )
}
