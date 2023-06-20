
import './App.scss';
import Navbar from './component/Navbar';
import HeaderNav from './component/HeaderNav';
import CaroselSlider from './component/CaroselSlider';
import Card from './component/Card';
import Delivery from './component/Delivery';
import Deal from './component/Deal';
import Footer from './component/Footer';

function App() {
  const listBanners = [
    {
      img: "../images/slider_1.jpg"
      
    },
    {
      img: "../images/slider_2.jpg"
      
    },
    {
      img: "../images/slider_3.jpg"
     
    }
  ]

  const listItems = [
    {
      img: "../images/banner_1.jpg",
      content: "WOMEN'S"
    },
    {
      img: "../images/banner_2.jpg",
      content: "ACCESSORIES'S"
    },
    {
      img: "../images/banner_3.jpg",      content: "MEN'S"
    }
  ]

  const listDeliverys = [
    {
      img : "../images/dl1.png",
      title: "FREE SHIPPING",
      content: "Suffered Alteration in Some Form"

    },
    {
      img : "../images/dl2.png",
      title: "CASH ON DELIVERY",
      content: "The Internet Tend To Repeat"
    },
    {
      img: "../images/dl3.png",
      title: "45 DAYS RETURN",
      content: "Making it Look Like Readable"
    },
    {
      img: "../images/dl4.png",
      title : "OPENING ALL WEEK",
      content: "8AM-9PM"
    }

  ]
  return (
    <div className="App">
        <HeaderNav />
        <Navbar/>
        <CaroselSlider listBanners={listBanners}/>
        <Card  listItems={listItems}/>
        <Delivery listDeliverys={listDeliverys}/>
        <Deal />
        <Footer/>
    </div>
  );
}

export default App;
