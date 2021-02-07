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
        // {
        //     texto: 'CART',
        //     ruta: '/category/cart',
        // },
    ]

    

    return(
        <header className="headerNav"> 
            <div className="conteiner">
                <h1><Link to='/'>GINstore</Link></h1>
                <nav>
                    <ul>
                        {
                            menuItems.map((seccion, index) => <Navitem key={index} text={seccion.texto} url={seccion.ruta}/>)
                        }
                        <li><NavCart action={action} url='/category/cart'/></li>
                        {/* <Navitem text='Destilados' url='https://www.google.com'/>
                        <Navitem text='Botanicos' url='https://www.google.com'/>
                        <Navitem text='Insumos' url='https://www.google.com'/>
                        <Navitem text='Tonicas' url='https://www.google.com'/>
                        <Navitem text='Cocteleria' url='/detail'/> */}
                        {/* <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;