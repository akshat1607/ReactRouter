import { Routes,Route } from 'react-router-dom';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Page1/>} >
      </Route>
      <Route path='/page2' element={<Page2/>} >
      </Route>
      <Route path='/page3' element={<Page3/>} >
      </Route>
    </Routes>  
  );
}

export default App;
