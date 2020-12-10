import './Nav.css';
import '../navitem/Navitem'
import Navitem from '../navitem/Navitem';

function Nav() {
    return(
        <header>
            <div className="conteiner">
                <h1>GINstore</h1>
                <nav>
                    <ul>
                        <Navitem text='Destilados' url='https://www.google.com'/>
                        <Navitem text='Botanicos' url='https://www.google.com'/>
                        <Navitem text='Insumos' url='https://www.google.com'/>
                        <Navitem text='Tonicas' url='https://www.google.com'/>
                        <Navitem text='Cocteleria' url='https://www.google.com'/>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;