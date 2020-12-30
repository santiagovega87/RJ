import {NavLink} from 'react-router-dom'

const Navitem = ({text, url = '#'}) => (
    <li>
        <NavLink to={url} activeClassName='active'>{text}</NavLink>
    </li>
)

export default Navitem