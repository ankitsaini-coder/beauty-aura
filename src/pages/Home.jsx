import Layout from "../components/Layout";
// import Home_img1 from "../assets/img/aura_home_img1.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero_img1 from "../assets/img/aura_home_img1.webp"
import Hero_img2 from "../assets/img/aura_home_img2.webp"
import Hero_img3 from "../assets/img/tapssi.webp"
import video from "../assets/videos/Lipstick video.mp4"
const Home = (item) => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 17000,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <Layout>
      <div className="slider-container">
      <Slider {...settings}>
        <div className="main">
          <video autoPlay={true} loop={true} controls muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div>
        <img src={Hero_img2} alt="" />
        </div>
        <div>
        <img src={Hero_img3} alt="" />
        </div>
        <div>
        <img src={Hero_img1} alt="" />
        </div>
        <div>
        <img src={Hero_img2} alt="" />
        </div>
      </Slider>
    </div>
    </Layout>
  );
}

export default Home;


