import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export const Commerical = ({ title }) => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-end">
          <div className="d-flex justify-content-center align-items-end flex-column text-center">
            <h1 className="industrytitle" style={{ fontWeight: "bolder" }}>
              {title}
            </h1>
            <img
              src="/assets/images/web images/industrydot.JPG"
              alt="decorative dots"
              style={{ marginTop: "10px", maxWidth: "100%" }}
            />
          </div>
        </div>
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          slidesPerView={6}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper comm mt-5 mb-5"
        >
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial1.gif")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial2.png")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial3.png")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial4.png")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial5.png")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial6.png")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial7.png")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial8.png")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercialp.png")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial1.gif")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="commericalimgbox"
              style={{
                backgroundImage:
                  'url("/assets/images/web images/Commercial10.gif")',
                height: "70px",
                width: "70px",
                backGroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
