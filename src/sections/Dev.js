import {
    StyledContentContainer,
    StyledSectionDevContainer,
    StyledDevCoversContainer } from './Dev.style'
import LinkFrame from '../components/LinkFrame'

import dev_js_array from '../img/covers/dev_js_array.png'
import dev_figma_space from '../img/covers/dev_figma_space.png'
import dev_html_frontendmentor from '../img/covers/dev_html_frontendmentor_modern_art_gallery.png'

import { Link } from 'react-router-dom'

import IconArrow from '../img/iconsBtn/icons_arrow.png'

export default function Dev() {
    return (
       <>
           <StyledSectionDevContainer>
               <StyledDevCoversContainer>
                   <LinkFrame
                       type={"dev"}
                       subtype={"github"}
                       img={ dev_js_array }
                       header={"Vanilla JS - Array"}
                       link={"https://github.com/VoltG3/javascript/tree/master/js_array"}
                       width={"468px"}
                       height={"248px"}
                   />

                   <LinkFrame
                       type={"dev"}
                       subtype={"figma"}
                       img={ dev_figma_space }
                       header={"Figma - Space"}
                       link={"https://www.figma.com/file/AeGc0WPx3n0DrSGjq3gyvG/Space?node-id=0%3A1"}
                       width={"468px"}
                       height={"248px"}
                   />

                   <LinkFrame
                       type={"dev"}
                       subtype={"github"}
                       img={ dev_html_frontendmentor }
                       header={"HTML - FrontEndMentor"}
                       link={"https://github.com/VoltG3/html_frontendmentor/tree/master/modern_art_gallery"}
                       width={"365px"}
                       height={"578px"}
                   />

               </StyledDevCoversContainer>
           </StyledSectionDevContainer>

           <StyledContentContainer>
               <Link to="/devextension">
                   <img
                       src={ IconArrow }
                       alt="arrow"
                       style={{
                           filter: 'var(--icon-filter-light)'
                       }}
                   />
               </Link>
           </StyledContentContainer>
       </>
    )
}