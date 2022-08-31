import IconGoogleDriver from '../img/iconsBtn/icon_googlrdriver.png'
import IconGitHub from '../img/iconsBtn/icon_github.png'
import IconFigma from '../img/iconsBtn/icon_figma.png'

export default function LinkFrame(props) {
    return (
        <div>
            <img src={ props.img }  alt="img"
                 style={{
                    width: props.width,
                    height: props.height,
                    //objectFit: 'cover',
                    border: props.type === "dev"
                        ? 'solid 1px var(--color-default)'
                        : 'solid 1px var(--color-secondary)',
                    filter: 'var(--shadow-frame)'
            }} />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '49px',
                    marginTop: '-6px',
                    filter: 'var(--shadow-frame)',
                    width: props.width,
                    background: props.type === 'dev'
                        ? 'var(--color-secondary)'
                        : 'var(--color-none)',
                    border: props.type === 'dev'
                        ? 'solid 1px var(--color-default)'
                        : 'solid 1px var(--color-secondary)'
                }}>

                <p className="linkFrame-textline-light"
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
        </div>
    )
}
