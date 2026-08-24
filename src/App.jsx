import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Board from './pages/board';
import List from './pages/list';
import UserPage from './pages/user';
import Header from './components/header/header';
import Aside from './components/sidebar/sidebar';
import * as styles from './App.module.css';

const App = () =>{
  const [open, setOpen] = useState(false);

  return(
    <BrowserRouter>
    <div className={styles.aside}>
        <Aside open={open} onClose={() => setOpen(false)} />

        <div className={styles.header}>
          <Header onMenu={() => setOpen(true)} />
          
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