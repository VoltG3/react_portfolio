import { StyledDevLayoutExtension } from './Dev.style'

import LinkFrame from '../components/LinkFrame'
import BtnArrow from '../components/BtnArrow'

import dev_js_array from '../img/covers/dev_js_array.png'
import dev_figma_space from '../img/covers/dev_figma_space.png'
import dev_html_frontendmentor from '../img/covers/dev_html_frontendmentor_modern_art_gallery.png'
import dev_html_blog from '../img/covers/dev_html_blog.png'
import dev_figma_frontendmentor_blogr from '../img/covers/dev_figma_frontendmentor_blogr.png'
import dev_cpp_opp_date_and_time from '../img/covers/dev_cpp_oop_date_and_time.png'
import dev_html_restorant from '../img/covers/dev_html_restorant.png'
import dev_php_blog from '../img/covers/dev_php_blog.png'
import dev_react_fakestore from '../img/covers/dev_react_fakestore.png'
import dev_cpp_sorting from '../img/covers/dev_cpp_sorting.png'
import dev_php_js_api from '../img/covers/dev_php_js_api.png'
import dev_react_calc from '../img/covers/dev_react_calc.png'
import dev_spring_boot_crud_postgresql from '../img/covers/dev_spring_boot_crud_postgresql.png'

export default function DevExtension() {
    return (
        <div className={"section--template"}>

            <BtnArrow
                theme={"dark"}
                link={"/default"}
                direction={"left"}
            />

            <div className={"section--template"}
                 style={{
                     background: 'var(--color-secondary)'
                 }}
            >
                <StyledDevLayoutExtension>

                   {/*First Block*/}

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

                    {/*Second Block*/}

                    <LinkFrame
                        type={"dev"}
                        subtype={"github"}
                        img={ dev_html_blog }
                        header={"HTML - Blog"}
                        link={"https://github.com/VoltG3/html_projects/tree/master/ltpc_blog_titlepage"}
                        width={"400"}
                        eight={"581"}
                    />

                    <LinkFrame
                        type={"dev"}
                        subtype={"figma"}
                        img={ dev_figma_frontendmentor_blogr }
                        header={"Figma - Blogr"}
                        link={"https://www.figma.com/file/uT0lD2kGjnaFKShzozpx5h/frontendmentor_Blogr?node-id=0%3A1"}
                        width={"500"}
                        height={"250"}
                    />

                    <LinkFrame
                        type={"dev"}
                        subtype={"github"}
                        img={ dev_cpp_opp_date_and_time }
                        header={"C++ OOP / Date & Time"}
                        link={"https://github.com/VoltG3/cpp/tree/master/oop_date_and_time"}
                        width={"500"}
                        height={"250"}
                    />

                    {/*Third Block*/}

                    <LinkFrame
                        type={"dev"}
                        subtype={"github"}
                        img={ dev_html_restorant }
                        header={"HTML - Restaurant"}
                        link={"https://github.com/VoltG3/html_projects/tree/master/restaurant_three_bowls"}
                        width={"450"}
                        height={"300"}
                    />

                    <LinkFrame
                        type={"dev"}
                        subtype={"github"}
                        img={ dev_react_fakestore }
                        header={"React - FakeStore"}
                        link={"https://github.com/VoltG3/react_fakestore"}
                        width={"450"}
                        height={"300"}
                    />

                    <LinkFrame
                        type={"dev"}
                        subtype={"github"}
                        img={ dev_cpp_sorting }
                        header={"C++ / Sorterings Algoritmer"}
                        link={"https://github.com/VoltG3/react_fakestore"}
                        width={"450"}
                        height={"250"}
                    />

                    <LinkFrame
                        type={"dev"}
                        subtype={"github"}
                        img={ dev_php_blog }
                        header={"PHP - Blog"}
                        link={"https://github.com/VoltG3/php_blog"}
                        width={"450"}
                        height={"250"}
                    />

                    {/* Fourth Block*/}

                    <LinkFrame
                        type={"dev"}
                        subtype={"github"}
                        img={ dev_php_js_api }
                        header={"Vanilla JS / PHP / API"}
                        link={"https://github.com/VoltG3/js_php_biosquares"}
                        width={"650"}
                        height={"300"}
                    />

                    <LinkFrame
                        type={"dev"}
                        subtype={"github"}
                        img={ dev_react_calc }
                        header={"React - Calc"}
                        link={"https://github.com/VoltG3/react_calculator"}
                        width={"250"}
                        height={"300"}
                    />

                    <LinkFrame
                        type={"dev"}
                        subtype={"github"}
                        img={ dev_spring_boot_crud_postgresql }
                        header={"Spring Boot - CRUD PostgreSQL"}
                        link={"https://github.com/VoltG3/spring_boot_biosquare"}
                        width={"930"}
                        height={"350"}
                    />

                </StyledDevLayoutExtension>
            </div>
        </div>
    )
}
