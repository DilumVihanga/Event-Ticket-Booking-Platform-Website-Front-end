import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroComp from '../Components/Hero/HeroComp';
import CardGrid from '../Components/CardGrid/CardGrid';
import HorizontalcardComp from '../Components/Horizontalcard/HorizontalcardComp';
import CategorycardComp from '../Components/Categorycard/CategorycardComp';
/* import NavComp from '../Components/Nav/NavComp'; */
import FooterComp from '../Components/Footer/FooterComp';


export default function Home() {
  return (
    <div>
        {/* <NavComp/> */}
     <HeroComp/><br></br><br></br>
     
     <CategorycardComp/><br></br><br></br>
     <HorizontalcardComp/> <br></br><br></br><br></br>
          <CardGrid/><br></br><br></br><br></br>
                    <FooterComp/>
    </div>
  )
}
