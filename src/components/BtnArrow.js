import IconArrow from '../img/iconsBtn/icons_arrow.png'
import { Link } from 'react-router-dom'

export default function BtnArrow(props) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
                height: '85px',
                background: props.theme === "light"
                    ? 'var(--color-none)'
                    : 'var(--color-secondary)'
            }}
        >
            <Link to={ props.link }>
                <img className="btnArrowHover"
                     src={ IconArrow }
                     alt="arrow"
                     style={{
                         width: 'min(max(5.556vw, 50px), 80px)',
                         filter: props.theme === "light"
                             ? 'var(--icon-filter-dark)'
                             : 'var(--icon-filter-light)',
                         transform: props.direction === "right"
                             ? 'scaleX(1)'
                             : 'scaleX(-1)',
                         padding: props.direction === "right"
                             ? '29px 29px 0 0'
                             :  '29px 0 0 29px'
                     }}
                />
            </Link>
        </div>
    )
}
