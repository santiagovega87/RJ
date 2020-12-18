import {useState, useEffect} from 'react'


import './reset.css';
import Nav from './components/global/Nav/Nav'
import Modal from './components/global/Modal/Modal'
import FeatureProducts from './components/Home/FeatureProducts/FeatureProducts'




function App() {
  const [nombre, setNombre] = useState('Pauli')

  const ActName = (e) => {
    setNombre(e.target.value)
  }

  useEffect(() => {
    console.log('Hola mundo')
  }, [])

  return (
    <>
    <Nav />
    <FeatureProducts/>
    
    
    {/* <ProductCard>{nombre}</ProductCard> */}
    {/* <button onClick={() => setNombre('Santiago')}>Cambiar el Nombre</button> */}
    <input type="text" value={nombre} onChange={ActName}/>
    <a href="#modal">Abrir Modal</a>
    <Modal>
      <h2>Bienvenidos</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur adipisci dignissimos cum architecto recusandae quasi modi voluptate, non dolore dicta. Ad blanditiis repellendus labore sapiente dolores fugit sint autem.</p>
    </Modal>
    {/* <FeatureProducts/> */}
    </>
  );
}

export default App;
