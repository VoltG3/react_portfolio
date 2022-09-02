import IconArrow from '../img/iconsBtn/icons_arrow.png'
import { Link } from 'react-router-dom'

export default function BtnArrow(props) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '1440px',
                height: 'auto',
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