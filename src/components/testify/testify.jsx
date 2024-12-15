import { useRef } from "react";
import Slider from "react-slick";
import "./testify.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


function Testify() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="px-[15%] relative lg:px-[25%] ">
      <div className="slider-container ">
        <h1 className="text-center font-bold sm:text-xl md:text-2xl lg:text-3xl">What Do Our Attendees Have To Say?</h1>
        <h2 className="text-center py-4">Well See For Yourself!</h2>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          
          <div className="whole-carousel ml-[3rem] " key={1}>
            <div className="text-pix w-[10rem] ">
              <div className="sec-img-imgs flex items-center justify-center rounded-[50%] border-solid border-[2px] border-[#8300FF]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="name-content text-center w-[12rem] ml-[-1.5rem]">
                <div className="auth-name font-bold">Mr Belba Ngoy</div>
                <div className="auth-content text-[.8rem]">
                  Always a remarkable experience for my team and myself
                </div>
              </div>
            </div>
          </div>
          <div className="whole-carousel ml-[3rem]" key={2}>
            <div className="text-pix w-[10rem]">
              <div className="sec-img-imgs flex items-center justify-center rounded-[50%] border-solid border-[2px] border-[#8300FF]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="name-content text-center w-[12rem] ml-[-1.5rem]">
                <div className="auth-name font-bold">Mr Belba Ngoy</div>
                <div className="auth-content text-[.8rem]">
                  Always a remarkable experience for my team and myself
                </div>
              </div>
            </div>
          </div>
          <div className="whole-carousel ml-[3rem]" key={3}>
            <div className="text-pix w-[10rem]">
              <div className="sec-img-imgs flex items-center justify-center rounded-[50%] border-solid border-[2px] border-[#8300FF]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="name-content text-center w-[12rem] ml-[-1.5rem]">
                <div className="auth-name font-bold">Mr Belba Ngoy</div>
                <div className="auth-content text-[.8rem]">
                  Always a remarkable experience for my team and myself
                </div>
              </div>
            </div>
          </div>
          <div className="whole-carousel ml-[3rem]" key={4}>
            <div className="text-pix w-[10rem]">
              <div className="sec-img-imgs flex items-center justify-center rounded-[50%] border-solid border-[2px] border-[#8300FF]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="name-content text-center w-[12rem] ml-[-1.5rem]">
                <div className="auth-name font-bold">Mr Belba Ngoy</div>
                <div className="auth-content text-[.8rem]">
                  Always a remarkable experience for my team and myself
                </div>
              </div>
            </div>
          </div>
          <div className="whole-carousel ml-[3rem]" key={5}>
            <div className="text-pix w-[10rem]">
              <div className="sec-img-imgs flex items-center justify-center rounded-[50%] border-solid border-[2px] border-[#8300FF]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="name-content text-center w-[12rem] ml-[-1.5rem]">
                <div className="auth-name font-bold">Mr Belba Ngoy</div>
                <div className="auth-content text-[.8rem]">
                  Always a remarkable experience for my team and myself
                </div>
              </div>
            </div>
          </div>
          <div className="whole-carousel ml-[3rem]" key={6}>
            <div className="text-pix w-[10rem]">
              <div className="sec-img-imgs flex items-center justify-center rounded-[50%] border-solid border-[2px] border-[#8300FF]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="name-content text-center w-[12rem] ml-[-1.5rem]">
                <div className="auth-name font-bold">Mr Belba Ngoy</div>
                <div className="auth-content text-[.8rem]">
                  Always a remarkable experience for my team and myself
                </div>
              </div>
            </div>
            <h3>6</h3>
          </div>
        </Slider>
        <div className="nav-button absolute right-[15%]" style={{ textAlign: "right", top: 0 }}>
          <button className="first-but button p-3 mx-1 text-2xl rounded-[50%] border-solid border-[1px] border-[gray]" onClick={previous}>
          <MdArrowBackIosNew />
          </button>
          <button className="first-but button p-3 mx-1 text-2xl  rounded-[50%] border-solid border-[1px] border-[gray]" onClick={next}>
          <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testify;
