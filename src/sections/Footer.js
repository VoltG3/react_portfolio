import {
    StyledFooterContainer,
    StyledFooterContainerInner } from './Footer.style'

import iconLinux from '../img/icons/icon_linux.png'
import iconHTML from '../img/icons/icon_html.png'
import iconJS from '../img/icons/icon_js.png'
import iconFigma from '../img/icons/icon_figma.png'
import iconPostgreSQL from '../img/icons/icon_postgresql.png'
import iconSpringBoot from '../img/icons/icon_springboot.png'
import iconCpp from '../img/icons/icon_cpp.png'
import iconPremiumPro from '../img/icons/icon_premiumpro.png'
import iconPhotoshop from '../img/icons/icon_photoshop.png'
import iconSketchUp from '../img/icons/icon_sketchup.png'
import iconCisco from '../img/icons/icon_cisco.png'
import iconMinecraft from '../img/icons/icon_minecraft.png'

export default function Footer() {
    return (
        <div className={"section--template"}
             style={{
                 background: 'var(--color-secondary)'
            }}
        >
            <StyledFooterContainer>
                <StyledFooterContainerInner>
                    <div className={"header"}>
                        <p className="sectionFooter-textline-header">
                            Mine interesser:
                        </p>
                    </div>

                    <div className={"icons"}>
                        <div>
                            <img src={ iconLinux } alt="icon" />
                            <img src={ iconHTML } alt="icon" />
                            <img src={ iconJS } alt="icon" />
                            <img src={ iconFigma } alt="icon" />
                            <img src={ iconPostgreSQL } alt="icon" />
                            <img src={ iconSpringBoot} alt="icon" />

                        </div>

                        <div className={"icon"}>
                            <img src={ iconCpp } alt="icon" />
                            <img src={ iconPremiumPro } alt="icon" />
                            <img src={ iconPhotoshop } alt="icon" />
                            <img src={ iconSketchUp } alt="icon" />
                            <img src={ iconCisco } alt="icon" />
                            <img src={ iconMinecraft } alt="icon" />
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: '30px'
                        }}
                    >
                        <table>
                            <tbody className="sectionFooter-textline-credentials">
                            <tr>
                                <td>epost:</td>
                                <td style={{ paddingLeft: '10px'}}></td>
                                <td>kristiandanoss@gmail.com</td>
                            </tr>
                            <tr>
                                <td>github:</td>
                                <td style={{ paddingLeft: '10px'}}></td>
                                <td><a href="https://github.com/VoltG3?tab=repositories" target="_blank" rel="noopener noreferrer">VoltG3</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={"sectionFooter-textline-list list"}>
                        <p># Linux</p>
                        <p># HTML</p>
                        <p># JavaScript</p>
                        <p># Figma</p>
                        <p># Postgres</p>
                        <p># Spring Boot</p>
                        <p># C++</p>
                        <p># Adobe PremiumPro</p>
                        <p># Adobe Photoshop</p>
                        <p># Google SketchUp</p>
                        <p># Cisco Packet Tracer</p>
                        <p># Minecraft</p>
                    </div>
                </StyledFooterContainerInner>
            </StyledFooterContainer>

            <div
                style={{
                    width: '100%',
                    marginTop: '10px',
                    borderTop: 'solid 1px var(--color-default)'
                }}
            >
                <p className="sectionFooter-textline-html-credentials">
                    Powered by VoltG3 © 2022
                </p>
            </div>
        </div>
    )
}
