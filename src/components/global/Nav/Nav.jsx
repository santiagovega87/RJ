import './Nav.css';
import '../navitem/Navitem'
import Navitem from '../navitem/Navitem';

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
        <header>
            <div className="conteiner">
                <h1>GINstore</h1>
                <nav>
                    <ul>
                        {
                            menuItems.map((seccion, index) => <Navitem key={index} text={seccion.texto} url={seccion.ruta}/>)
                        }
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