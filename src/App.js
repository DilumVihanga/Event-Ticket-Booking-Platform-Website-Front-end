import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './Components/Navbar/NavComp';
import HeroComp from './Components/Hero/HeroComp';
import CardGrid from './Components/CardGrid/CardGrid';
import HorizontalcardComp from './Components/Horizontalcard/HorizontalcardComp';

function App() {
  return (
    <div className="App">
      <NavComp/>
     <HeroComp/><br></br><br></br>
     <HorizontalcardComp/> <br></br>
          <CardGrid/>
     
                
    </div>
  );
}

export default App;
