import Link from "next/link";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

const counterData = [
  { id: 1, text: "Years Of Experience", value: "13", valueType: "plus" },
  { id: 2, text: "Project Complete", value: "8", valueType: "k-plus" },
  { id: 3, text: "Client Satisfactions", value: "99", valueType: "percent" },
];

const Hero = () => {
  const slides = [0, 1, 2, 3].map((item) => (
    <Carousel.Slide key={item.title}>
      <Image src={"/assets/images/about/about-page.jpg"} width={100} height={100} alt="black-royal" />
    </Carousel.Slide>
  ));
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center">
          <div className="col-lg-8 col-sm-7">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2 neonText">ASIAN KITCHEN</span>
              <h1>
                <b className="neonText">BLACK ROYAL</b>
              </h1>
              <p style={{ color: "white" }}>
                Používáme čerstvé suroviny a bylinky si vybíráme sami.
              </p>
              <div className="hero-btns">
                <Link legacyBehavior href="/">
                  <a className="theme-btn">
                    Objednat teď <i className="far fa-angle-right" />
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="read-more">
                    moje menu <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="assets/images/black-royal/_DSF6203.jpg" alt="Author" />
              <div className="progress-shape">
                <img
                  src="assets/images/hero/progress-shape.png"
                  alt="Progress"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Hero;

export const Hero2 = () => {
  return (
    <div id="home" className="hero-area-two pt-150 rel z-2">
      <div className="container rel z-3">
        <div className="hero-two-content">
          <span className="sub-title wow fadeInLeft delay-0-1s">
            <i className="flaticon-asterisk-1" /> UI/UX Designer
          </span>
          <span className="title wow fadeInLeft delay-0-2s">
            Hello <small>i,m</small>
          </span>
          <span className="name wow fadeInRight delay-0-4s">henry gayle</span>
          <span className="designations wow fadeInLeft delay-0-6s">
            <span>Ux</span> Designer
          </span>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="assets/images/hero/hero-two.png" alt="Author" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
