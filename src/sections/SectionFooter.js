import styled from "styled-components"

const StyledSectionFooterContainer = styled.div`
  width: 1440px;
  height: 424px;
  border: solid 1px black;
`

export default function SectionFooter() {
    return (
        <StyledSectionFooterContainer>
            <p>Footer</p>
        </StyledSectionFooterContainer>
    )
}
