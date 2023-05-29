import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import HeroComp from './Components/Hero/HeroComp';
import CardGrid from './Components/CardGrid/CardGrid';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
     <HeroComp/><br></br><br></br><br></br>
          <CardGrid/>
     
                
    </div>
  );
}

export default App;
