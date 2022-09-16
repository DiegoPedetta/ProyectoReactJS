
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import { ItemListContainer } from './container/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NotFound from './components/NotFound';

 

function App() {
  return (
     <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path='/' element={<ItemListContainer/>}/>
         <Route path='/category/:categoryid' element={<ItemListContainer/>} />
         <Route path='/detail/:productid' element={<ItemDetailContainer/>} />
         <Route path='*' element={<NotFound/>} />
       </Routes>
     </BrowserRouter>
      
     
  );
}

export default App;
