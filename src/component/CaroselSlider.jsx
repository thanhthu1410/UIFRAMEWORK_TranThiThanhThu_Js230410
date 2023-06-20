import { Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Carouse = ({ listBanners }) => {
    // console.log(listBanners);
    return (
        <Carousel autoplaySpeed={1000} effect='fade' autoplay>
          
        {
            listBanners.map((item, index) => (
            <div key={index} style={{position:"relative"}}>
                <span className='banner' style={contentStyle}><img src={item.img} alt="" /></span>
                <div className='content' style={{position:"absolute", top:"10%"}}>
                    <h4>SPRING  / SUMMER COLLECTION 2023</h4>
                    <p className='saleContent'>Get up to 30% Off New Arrivals</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
            ))
        }
    </Carousel>
    )
};
export default Carouse;