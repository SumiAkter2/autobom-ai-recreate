import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import img from "../../assets/testimonial/pvw.svg";
import img2 from "../../assets/testimonial/person1.png";
import img3 from "../../assets/testimonial/person2.png";
import img4 from "../../assets/testimonial/person3.png";
import img5 from "../../assets/testimonial/person4.png";

const Testimonial = () => {
  const client = [
    {
      id: 1,
      name: "James Slider  ",
      img: img2,
      des: "autobom.ai has been a valuable tool allowing our organization to avoid supply driven product redesigns and, alternatively, massive inventory over-purchasing.",
      designation: "COO, PDW",
    },
    {
      id: 2,
      name: " Nicole Lie",
      img: img3,
      des: "The great thing about autobom.ai is that it has been evolving with the industry and global requirements. The tool has been helping us more and more as we have been using it, and the benefits to the company have been increasing with our usage.",
      designation: "Program Delivery Manager for Strategic Initiatives, Rakon",
    },
    {
      id: 3,
      name: "Adam Doolittle",
      img: img4,
      des: "autobom.ai is used in all aspects touching the component, from design to manufacturing. It’s not only my time savings but also the time savings for the regulatory compliance team as well as the procurement and design team. The time-saving runs through all these specialties.",
      designation: "Component Engineer, QSC",
    },
    {
      id: 4,
      name: "Heath A. Nunnemacher",
      img: img5,
      des: "What we’re now doing is building out a global component library with a connector – or data feed – from autobom.ai, which is the world’s most comprehensive aggregator of electronic component-level attribute information...we are building enormous resiliency into our supply chain at the front-end of the design process.",
      designation: "VP of Global Electronics Sourcing, TTI",
    },
  ];
  return (
    <div className="my-12">
      <div id="review">
        <div className="lg:px-24 px-6 py-6">
          <img src={img} alt="img" className="w-48 mx-auto my-12" />
        </div>

        <Swiper
          pagination={{
            clickable: true,
            marginTop: "300px",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-pagination-color": "#f2c83b",
            " --swiper-pagination-bullet-size": " 20px",
            "--swiper-pagination-bullet-width": " 20px",
            "--swiper-pagination-bullet-height": " 20px",
            "--swiper-pagination-margin": " 200px",
          }}
          className="mySwiper my-56"
        >
          {client.map((c) => (
            <SwiperSlide key={c.id}>
              <div className="text-center lg:w-[1000px] mx-auto">
                <p className="text-3xl font-semibold">&quot;{c.des}&quot;</p>
                <img
                  src={c.img}
                  className="w-40 mx-auto mt-12 "
                  alt="user-img"
                />
                <h3 className="font-semibold text-xl mt-6">{c.name}</h3>
                <h3>{c.designation}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
