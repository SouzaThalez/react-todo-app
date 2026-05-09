import Body from './components/body';
import BottomFooter from './components/footer'
import PageMenu from "./components/PageMenu";
import './App.css';

function App(){
const appTittle =  <span>A simple todo List</span>
  return (
        <>
          <div className='page-title'>{appTittle}</div>
          <PageMenu></PageMenu>
          <Body></Body>
          <BottomFooter></BottomFooter>
        </>

  );
}

export default App;