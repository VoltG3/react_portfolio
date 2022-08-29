import styled from "styled-components"

const StyledSectionDesignContainer = styled.div`
  width: 1440px;
  height: 600px;
  border: solid 1px black;
`

export default function SectionDesign() {
    return (
        <StyledSectionDesignContainer>
            <p>Design</p>
        </StyledSectionDesignContainer>
    )
}