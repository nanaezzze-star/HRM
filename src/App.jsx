import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Board from './pages/board';
import List from './pages/list';
import UserPage from './pages/user';
import Header from './components/header/header';
import Aside from './components/sidebar/sidebar';
import * as styles from './App.module.css';

const App = () =>{
  return(
    <BrowserRouter>
    <div className={styles.aside}>
        <Aside />

        <div className={styles.header}>
          <Header />
          
          <main className={styles.page}>
    <Routes>
      <Route path='/' element={<Board />} />
      <Route path='/list' element = {<List />} />
      <Route path='/user/:id' element = {<UserPage />} />
    </Routes>
    </main>

   </div>
    </div>
    
    </BrowserRouter>
  )

}

export default App; 