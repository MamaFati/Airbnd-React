// import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import Hero from './Hero';
import Card from './Card';
// import Items from './Items';
 


function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero/>
       {/* <Items/> */}
       <div className='section2'>
         
        <Card 
          text = " Sold out"
          image = "image 12.png" 
          rating = "5.0"
          reviewcount = {6}
          country = ". U S A"
          title = "Life lessions with Katie Zaferes"
          price = {136}
        />
        <Card
          text = " Online "
          image = "wedding-photography 1.png" 
          rating = "5.0"
          reviewcount = {30}
          country = ". U S A"
          title = " Learn wedding photography"
          price = {125}

        />
        <Card
          // text = " Online "
          image = "mountain-bike 1.png" 
          rating = "4 .8"
          reviewcount ={2}
          country = ".U S A"
          title = " Group Mountain Bikin"
          price = {50}
        />

      </div>
    </div>
     

  );
}

export default App;
