import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Banner.css';

import awards from '../Assets/awards.jpg';
import banner from '../Assets/banner.jpg';
import banner1 from '../Assets/mug.jpg';
import banner2 from '../Assets/banner2.jpg';
import banner3 from '../Assets/Gift.jpg';
import banner4 from '../Assets/Wedding.jpg';

// Arrows
const NextArrow = ({ className, onClick }) => (
  <div className={`${className} custom-arrow next`} onClick={onClick}>
    &gt;
  </div>
);

const PrevArrow = ({ className, onClick }) => (
  <div className={`${className} custom-arrow prev`} onClick={onClick}>
    &lt;
  </div>
);

const banners = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
  { id: 4, image: banner4 },
  { id: 5, image: awards },
  { id: 6, image: banner }
];

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="banner-carousel">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="banner-slide">
            <img src={banner.image} alt={`Banner ${banner.id}`} className="banner-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../Styles/Banner.css'; 
// import awards from '../Assets/awards.jpg';
// import banner from '../Assets/banner.jpg';
// import banner1 from '../Assets/mug.jpg';
// import banner2 from '../Assets/banner2.jpg';
// import banner3 from '../Assets/Gift.jpg';
// import banner4 from '../Assets/Wedding.jpg';

// // Custom arrow components
// const NextArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={`${className} custom-arrow next`} onClick={onClick}>
//       &gt;
//     </div>
//   );
// };

// const PrevArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={`${className} custom-arrow prev`} onClick={onClick}>
//       &lt;
//     </div>
//   );
// };

// // Banner data
// const banners = [
//   { id: 1, image: banner1,height: '250px', width: '100%' },
//   { id: 2, image: banner2,height: '250px', width: '100%' },
//   { id: 3, image: banner3,height: '250px', width: '100%' },
//   { id: 4, image: banner4,height: '250px', width: '100%' },
//   { id: 5, image: awards,height: '250px', width: '100%' },
//   { id: 6, image: banner,height: '250px', width: '100%' }
// ];

// // Banner component
// const BannerCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="banner-carousel">
//       <Slider {...settings}>
//         {banners.map((banner) => (
//           <div key={banner.id} className="banner-slide">
//             <img src={banner.image} alt={`Banner ${banner.id}`} className="banner-image" />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default BannerCarousel;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../Styles/Banner.css'; 
// import banner1 from '../Assets/baner1.jpg';
// import banner2 from '../Assets/baner2.jpg';
// import banner3 from '../Assets/baner3.jpg';
// import banner4 from '../Assets/baner4.jpg';
// import award from '../Assets/Award.jpg';

//  <button class="arrow left" onclick="prevSlide()">◀</button>
// const banners = [
//   { id: 1, image: banner1},
//   { id: 2, image: banner2 },
//   { id: 3, image: banner3},
//   { id: 4, image: banner4},
//   { id: 5, image: award },
// ];

//   <button class="arrow right" onclick="nextSlide()">▶</button>
// const BannerCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, // show 3 at a time (adjust as needed)
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 768, // mobile view
//         settings: {
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 1024, // tablet view
//         settings: {
//           slidesToShow: 2
//         }
//       }
//     ]
//   };

//   return (
//     <div className="banner-carousel">
//       <Slider {...settings}>
//         {banners.map((banner) => (
//           <div key={banner.id} className="banner-slide">
//             <img src={banner.image} alt={banner.title} className="banner-image" />
            
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default BannerCarousel;
