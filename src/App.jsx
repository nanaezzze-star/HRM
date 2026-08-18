import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Board from './pages/board';
import List from './pages/list';
import UserPage from './pages/user';

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Board />} />
      <Route path='/list' element = {<List />} />
      <Route path='/user/:id' element = {<UserPage />} />
    </Routes>
    
    </BrowserRouter>
  )

}

export default App; 