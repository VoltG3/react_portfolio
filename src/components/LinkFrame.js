import { useState } from 'react'

import IconGoogleDriver from '../img/iconsBtn/icon_googlrdriver.png'
import IconGitHub from '../img/iconsBtn/icon_github.png'
import IconFigma from '../img/iconsBtn/icon_figma.png'

export default function LinkFrame(props) {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    const isDevOrDesignSection = () => {
        if(props.type === "dev")
        return 'var(--color-hover-dev)'
        else return 'var(--color-hover-design)'
    }

    const isLinkNull = () => {
        if(props.link === undefined)
        return 'not-allowed'
        else return 'pinter'
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: props.width + 'px',
                maxHeight: props.height + 'px'
            }}
        >
            <img src={ props.img }  alt="img"
                 style={{
                    width: '100%',
                    height: '100%',
                    border: props.type === "dev"
                        ? 'solid 1px var(--color-default)'
                        : 'solid 1px var(--color-secondary)',
                    filter: 'var(--shadow-frame)'
            }} />

            <a href={ props.link } target="_blank" rel="noopener noreferrer">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        height: '50px',
                        filter: 'var(--shadow-frame)',
                        /*width: props.width,*/
                        background: props.type === 'dev'
                            ? 'var(--color-secondary)'
                            : 'var(--color-none)',
                        cursor: isLinkNull(props.link),
                        transition: '0.15s all ease-in-out',
                        backgroundColor: isHovering
                            ? isDevOrDesignSection(props.type)
                            : props.type === 'dev'
                                ? 'var(--color-secondary)'
                                : 'var(--color-none)',
                        border: props.type === 'dev'
                            ? 'solid 1px var(--color-default)'
                            : 'solid 1px var(--color-secondary)'
                    }}
                        onMouseOver={ handleMouseOver }
                        onMouseLeave={ handleMouseLeave }
                    >

                    <p className="linkFrame-textline"
                       style={{
                           color: props.type === 'dev'
                               ? 'var(--color-none)'
                               : 'var(--color-secondary)'
                       }}>

                        { props.header }
                    </p>

                    <img src={
                        props.subtype === "design"
                            ? IconGoogleDriver
                            : props.subtype === "github"
                                ? IconGitHub
                                : props.subtype === "figma"
                                    ? IconFigma
                                    : IconFigma

                    }  alt="icon"
                         style={{
                             width: '39px',
                             height: '37px',
                             margin: '0 15px 0 0',
                             filter: props.type === 'dev'
                                ? 'var(--icon-filter-light)'
                                : 'var(--icon-filter-dark)'
                     }}/>
                </div>
            </a>
        </div>
    )
}
