import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Upcomingevents from './Pages/Upcomingevents';
import Home from './Pages/Home';



function App() {
  return (
    <div className="App">
      
      <NavComp/>
     <HeroComp/><br></br><br></br>
     
     <CategorycardComp/><br></br><br></br>
     <HorizontalcardComp/> <br></br><br></br><br></br>
          <CardGrid/><br></br><br></br><br></br>

          <FooterComp/>
          
          
     
                
    </div>
  );
}
