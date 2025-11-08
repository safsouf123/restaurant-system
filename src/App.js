import Main from "./components/Main";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Menu from "./pages/Menu";
import Tryout from "./components/tryout";
function App (){
  return (
    <>
    <BrowserRouter>

    <Main/>

   
    </BrowserRouter>

  </>
  );



}
    

export default App;
