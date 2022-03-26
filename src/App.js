import logo from './logo.svg';
import './App.css';
import Header from './components/Heading/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Product></Product>
    </div>
  );
}

export default App;
