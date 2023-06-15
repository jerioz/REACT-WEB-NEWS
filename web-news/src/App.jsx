import Header from '../src/components/header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from './views/home/HomeView';
import { Footer } from './components/footer/Footer';
import './App.css';
import { FormNewsView } from './views/form/FormNewsView';


function App() {


  return (
   <>
  <BrowserRouter>
      <Header />
      <Routes>
        
          <Route path='/' element={<HomeView />} />
          <Route path='/form' element={<FormNewsView />} />
          
      </Routes>
      <Footer />
  </BrowserRouter>
  </>
  )
}

export default App

