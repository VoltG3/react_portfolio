import styled from "styled-components"
import { StyledSectionFooterContainer } from './Sections.styles'

import iconLinux from '../img/icons/icon_linux.png'
import iconHtml from '../img/icons/icon_html.png'
import iconJs from '../img/icons/icon_js.png'
import iconFigma from '../img/icons/icon_figma.png'
import iconPostgres from '../img/icons/icon_postgresql.png'
import iconSpringboot from '../img/icons/icon_springboot.png'
import iconCpp from '../img/icons/icon_cpp.png'
import iconPremiumpro from '../img/icons/icon_premiumpro.png'
import iconPhotoshop from '../img/icons/icon_photoshop.png'
import iconSketcup from '../img/icons/icon_sketchup.png'
import iconCisco from '../img/icons/icon_cisco.png'
import iconMinecraft from '../img/icons/icon_minecraft.png'

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
    width: 100%;
    height: 374px;
  background: var(--color-secondary);
  
  div:nth-child(1) {
    width: 993px;
    height: 324px;
    padding: 0 0 0 82px;
  }
  
  img {
      width: 47px;
      height: 50px;
    margin: 0 16px 55px 0;
    filter: 
            invert(100%) 
            sepia(16%) 
            saturate(7463%)
            hue-rotate(222deg) 
            brightness(119%) 
            contrast(115%);
  }
`

const StyledAttribution = styled.div`
      width: 100%;
      height: 50px;
  border-top: solid 1px var(--color-default);
  background: white;
`

export default function SectionFooter() {
    return (
        <StyledSectionFooterContainer>
            <StyledFooter>
                <div>
                    <p className="sectionFooter-textline-header">
                        Mine interesser:
                    </p>

                    <div>
                        <img src={ iconLinux } alt="icon" />
                        <img src={ iconHtml } alt="icon" />
                        <img src={ iconJs } alt="icon" />
                        <img src={ iconPostgres } alt="icon" />
                        <img src={ iconSpringboot} alt="icon" />
                        <img src={ iconCpp } alt="icon" />
                        <img src={ iconPremiumpro } alt="icon" />
                        <img src={ iconPhotoshop } alt="icon" />
                        <img src={ iconSketcup } alt="icon" />
                        <img src={ iconCisco } alt="icon" />
                        <img src={ iconMinecraft } alt="icon" />
                    </div>

                    <table>
                        <tbody className="sectionFooter-textline-credentials">
                        <tr>
                            <td>epost:</td>
                            <td>kristiandanoss@gmail.com</td>
                        </tr>
                        <tr>
                            <td>github:</td>
                            <td>VoltG3</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <ul className="sectionFooter-textline-credentials">
                    <li># Linux</li>
                    <li># HTML</li>
                    <li># JavaScript</li>
                    <li># Figma</li>
                    <li># Postgres</li>
                    <li># Spring Boot</li>
                    <li># C++</li>
                    <li># Adobe PremiumPro</li>
                    <li># Adobe Photoshop</li>
                    <li># Google SketchUp</li>
                    <li># Cisco Packet Tracer</li>
                    <li># Minecraft</li>
                </ul>
            </StyledFooter>

            <StyledAttribution>
                <p>Powered by VoltG3 © 2022</p>
            </StyledAttribution>

        </StyledSectionFooterContainer>
    )
}
