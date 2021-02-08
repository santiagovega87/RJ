import './Nav.css';
import '../navitem/Navitem'
import Navitem from '../navitem/Navitem';
import {Link} from 'react-router-dom'
import NavCart from '../NavCart/NavCart'

function Nav({titulo, action}) {

    const menuItems = [
        {
            texto: 'Destilados',
            ruta: '/category/destilados',
        },
        {
            texto: 'Botanicos',
            ruta: '/category/botanicos',
        },
        {
            texto: 'Insumos',
            ruta: '/category/insumos',
        },
        {
            texto: 'Tonicas',
            ruta: '/category/tonicas',
        },
        {
            texto: 'Cocteleria',
            ruta: '/category/cocteleria',
        },

    ]

    

    return(
        <header className="headerNav"> 
            <div className="conteiner">
                <h1><Link to='/'>Tinda de GIN</Link></h1>
                <nav>
                    <ul>
                        {
                            menuItems.map((seccion, index) => <Navitem key={index} text={seccion.texto} url={seccion.ruta}/>)
                        }
                        <li><NavCart action={action} url='/category/cart'/></li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;