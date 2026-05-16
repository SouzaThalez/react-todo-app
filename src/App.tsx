
import './App.css';
import List from './components/list';

function App(){
const appTittle = <span>A simple todo List</span>
  return (
      <div className='app-container'>
        {appTittle}
        < List/>
      </div>
  );
}

export default App;