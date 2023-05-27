import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import HeroComp from './Components/Hero/HeroComp';
import ListeventComp from './Components/Listevent/ListeventComp';
import CardGridComp from './Components/Cardgrid/CardGridComp';




function App() {
  return (
    <div className="App">
      <NavbarComp/>
     <HeroComp/>
     <ListeventComp/><br></br><br></br><br></br>
     <CardGridComp/><br></br>
     <CardGridComp/>
           
    </div>
  );
}

export default App;
