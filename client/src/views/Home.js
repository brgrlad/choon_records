import Products from "./Products";
import {URL} from '../config'


function Home() {

  return (

    <div className="homeWrapper">
<h1>{URL}</h1>
     <Products />

    </div>






  );
}

export default Home;
