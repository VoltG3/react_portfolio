import styled from "styled-components"

const StyledSectionDevContainer = styled.div`
  width: 1440px;
  height: 802px;
  border: solid 1px black;
  background: cornflowerblue;
`

export default function SectionDev() {
    return (

        /**
         * For compare purpose with figma styles
         */

        <StyledSectionDevContainer>
            <p>Dev</p>
            <p className="sectionHeader-textline-firstpart">header firstpart</p>
            <p className="sectionHeader-textline-secondpart">header secondpart</p>
            <p className="sectionHeader-textline-subheader">header subheader</p>
            <p className="sectionInfo-textline">info textline</p>
            <p className="sectionInfo-textline-subsection">info subsection</p>
            <p className="sectionFooter-textline-header">footer header</p>
            <p className="sectionFooter-textline-credentials">footer credentials</p>
            <p className="sectionFooter-textline-list">footer list</p>
            <p className="linkFrame-textline-light">linkFrame light</p>
            <p className="linkFrame-textline-dark">linkFrame dark</p>
        </StyledSectionDevContainer>
    )
}