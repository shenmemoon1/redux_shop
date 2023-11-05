import "./styles.css";
import Counter from "./features/counter/Counter";
import ProductsList from "./features/product/ProductsList";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
      <br />
      <ProductsList />
    </div>
  );
}
