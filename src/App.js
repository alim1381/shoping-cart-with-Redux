import { Provider } from "react-redux";
import Navbar from "./components/header/Navbar";
import store from "./redux/store";
import { Navigate, Route, Routes } from "react-router-dom";
import Store from "./components/store/Store";
import Detailes from "./components/products/Detailes";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Provider store={store} >
      <div className="">
        <Navbar />
        <Routes>
          <Route path='/products' element={<Store />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:id' element={<Detailes />} />
          <Route path='/*' element={<Navigate to="/products" />} />

        </Routes>
      </div>
    </Provider>
  );
}

export default App;