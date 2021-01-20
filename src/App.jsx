import {useState} from 'react'
import './reset.css';
import Nav from './components/global/Nav/Nav'
import Modal from './components/global/Modal/Modal'
import FeatureProducts from './components/Home/FeatureProducts/FeatureProducts'
import Detail from './components/Details/ConteinerDetail'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Error404 from './components/global/Error404/Error404'
import Category from './components/Category/index';
import Cart from './components/Cart/index'
import Checkout from './components/Checkout/index'
import {Store} from './store'


function App() {
  // const [nombre, setNombre] = useState('Pauli')

  // const ActName = (e) => {
  //   setNombre(e.target.value)
  // }

  // useEffect(() => {
  //   console.log('Hola mundo')
  // }, [])

  // SWITCH para mostrar pantallas

  // function App() {
  //   const seleccionMostrar = (selection) => {
  //     switch(selection) {
  //       case 'Home': return <Home/> ;
  //       case 'Nav': return <Nav />;
  //       case 'Category': <FeatureProducts/>;
  //       default: return <Home/>;

  //     }
  //   }
  // }

  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    precioTotal: 0,
  })

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <FeatureProducts/>
          </Route>
          <Route exact path='/category/cart'>
            <Cart/>
          </Route>
          <Route  path='/checkout'>
            <Checkout/>
          </Route>
          <Route path='/detail/:id?'>
            <Detail/>
          </Route>
          <Route path="/category/:name">
            <Category/>
          </Route>
          <Route path='*'>
            <Error404/>
          </Route>
        </Switch>
        

      
      {/* <ProductCard>{nombre}</ProductCard> */}
      {/* <button onClick={() => setNombre('Santiago')}>Cambiar el Nombre</button> */}
      {/* <input type="text" value={nombre} onChange={ActName}/>
      <a href="#modal">Abrir Modal</a>
      <Modal>
        <h2>Bienvenidos</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur adipisci dignissimos cum architecto recusandae quasi modi voluptate, non dolore dicta. Ad blanditiis repellendus labore sapiente dolores fugit sint autem.</p>
      </Modal> */}
      {/* <FeatureProducts/> */}
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
