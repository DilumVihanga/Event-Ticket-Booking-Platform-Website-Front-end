import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './Components/Navbar/NavComp';
import HeroComp from './Components/Hero/HeroComp';
import CardGrid from './Components/CardGrid/CardGrid';

function App() {
  return (
    <div className="App">
      <NavComp/>
     <HeroComp/><br></br><br></br><br></br>
          <CardGrid/>
     
                
    </div>
  );
}

export default App;
