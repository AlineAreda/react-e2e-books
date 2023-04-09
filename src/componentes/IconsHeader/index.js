import './style.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icons = [perfil, sacola]

function IconsHeader() {
    return (
        <ul className='icons'>
            {icons.map((icon) => (
                <li className='icon'><img src={icon}></img></li>
            ))}
        </ul>
    )
}

export default IconsHeader