import { menu,item } from "./pages/Data"
import Product from "./pages/Product"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <div>
    <Product menu={menu} item={item}/>
    </div>
  )
}

export default App
