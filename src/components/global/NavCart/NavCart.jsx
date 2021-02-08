import {NavLink} from 'react-router-dom'
import {Store} from './../../../store'
import {useContext} from 'react'
import './NavCart.css'

const NavCart = ({action, url}) =>{
    // const [data] = useContext(Store)

    // console.log(data)

    const [data, setData] = useContext(Store)

    console.log(data)

    return(
        <div className="navCart" onClick={action}>
            <NavLink to={url} activeClassName='active'>CART</NavLink>
            <span><strong>{data.cantidad}</strong></span>
        </div>

    )
}

export default NavCart