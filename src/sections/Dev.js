import { StyledDevLayout } from './Dev.style'

import LinkFrame from '../components/LinkFrame'
import BtnArrow from "../components/BtnArrow";

import dev_js_array from '../img/covers/dev_js_array.png'
import dev_figma_space from '../img/covers/dev_figma_space.png'
import dev_html_frontendmentor from '../img/covers/dev_html_frontendmentor_modern_art_gallery.png'

export default function Dev() {
    return (
        <div className={"section--template"}>

           <BtnArrow
               theme={"dark"}
               link={"/devextension"}
               direction={"right"}
           />

           <div className={"section--template"}
                style={{
                    background: 'var(--color-secondary)'
                }}
           >
               <StyledDevLayout>
                   <LinkFrame
                       type={"dev"}
                       subtype={"github"}
                       img={ dev_js_array }
                       header={"Vanilla JS - Array"}
                       link={"https://github.com/VoltG3/javascript/tree/master/js_array"}
                       width={"500"}
                       height={"350"}
                   />

                   <LinkFrame
                       type={"dev"}
                       subtype={"figma"}
                       img={ dev_figma_space }
                       header={"Figma - Space"}
                       link={"https://www.figma.com/file/AeGc0WPx3n0DrSGjq3gyvG/Space?node-id=0%3A1"}
                       width={"500"}
                       height={"350"}
                   />

                   <LinkFrame
                       type={"dev"}
                       subtype={"github"}
                       img={ dev_html_frontendmentor }
                       header={"HTML - FrontEndMentor"}
                       link={"https://github.com/VoltG3/html_frontendmentor/tree/master/modern_art_gallery"}
                       width={"400"}
                       height={"700"}
                   />

               </StyledDevLayout>
           </div>
       </div>
    )
}
