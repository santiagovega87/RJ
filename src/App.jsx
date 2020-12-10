import './reset.css';
import Nav from './components/global/Nav/Nav'
import Modal from './components/global/Modal/Modal'



function App() {
  return (
    <>
    <Nav />
    <a href="#modal">Abrir Modal</a>
    <Modal>
      <h2>Bienvenidos</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur adipisci dignissimos cum architecto recusandae quasi modi voluptate, non dolore dicta. Ad blanditiis repellendus labore sapiente dolores fugit sint autem.</p>
    </Modal>

    </>
  );
}

export default App;
