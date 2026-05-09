import BottomFooter from './components/footer'
import NavHeader from "./components/header";

function App(){
const appTittle =  <h1>A simple todo List</h1>
  return (
        <>
          <p>{appTittle}</p>
          <NavHeader></NavHeader>
          <BottomFooter></BottomFooter>
        </>

  );
}

export default App;