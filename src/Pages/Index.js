import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import HeroComp from './Components/Hero/HeroComp';
import GridComp from './Components/GridComp';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
     <HeroComp/> 
     <GridComp/>
    </div>
  );
}

export default App;
