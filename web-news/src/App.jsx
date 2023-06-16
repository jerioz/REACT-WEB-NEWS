import Header from '../src/components/header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from './views/home/HomeView';
import { Footer } from './components/footer/Footer';
import './App.css';
import { FormNewsView } from './views/form/FormNewsView';
import { GlobalProvider } from './context/GlobalState';
import { ListNewsView } from './views/listNews/ListNewsView';


function App() {


  return (
   <>
  <BrowserRouter>
    <Header />
     <GlobalProvider>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/form' element={<FormNewsView />} />
        <Route path='/list' element={<ListNewsView />} />
      </Routes>
    </GlobalProvider>
    <Footer />
  </BrowserRouter>
  </>
  )
}

export default App

