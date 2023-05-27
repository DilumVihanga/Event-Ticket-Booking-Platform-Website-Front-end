import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import HeroComp from './Components/Hero/HeroComp';
import Listevent from './Components/Listevent';
import CardGridComp from './Components/Cardgrid/CardGridComp';



function App() {
  return (
    <div className="App">
      <NavbarComp/>
     <HeroComp/>
     <Listevent/><br></br><br></br><br></br>
     <CardGridComp/><br></br>
     <CardGridComp/>
           
    </div>
  );
}

export default App;
