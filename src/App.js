import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import HeroComp from './Components/Hero/HeroComp';
import GridComp from './Components/GridComp';
import Test from './Components/Test';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
     <HeroComp/><br></br><br></br><br></br>
     <GridComp/><br></br>
     <Test/>
     
                
    </div>
  );
}

export default App;
