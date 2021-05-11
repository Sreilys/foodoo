import {useState} from 'react';
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandle = () => {
    setCartIsVisible(true);
  }

  const hideCartHandle = () => {
    setCartIsVisible(false);
  }

  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={hideCartHandle}/>}
      <Header onShowCart={showCartHandle}/>
      <main>
        <Meals />
      </main>
      <footer className="footer">
        <p>This app is a prototype/theme.</p>
        <p>UI is coded in React, State is managed with Hooks.</p>
        <p>For mocked data I use <a href="https://www.npoint.io/">https://www.npoint.io/</a></p>
        <p>See endpoint at <a href="https://api.npoint.io/ed11c3461df66e3bded5">API</a></p>
        <p>You can find the code on Github.</p>
      </footer>
    </CartProvider>
  );
}

export default App;
