"use client";
import { noxfolioSlider } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="testimonials-area rel z-1 mb-50">
        <div className="for-bgc-black py-130 rpy-100 border-neon">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">
                      recenze na google mapě
                    </span>
                    <h2>
                      Mám 666+ klientů <span>
                        Zpětná vazba</span>
                    </h2>
                    <p style={{ color: "white" }}>
                      Zaregistrujte si jednoduše digitální zákazníkovou kartu do Apple Wallet/ Google Pay k získání voucheru s hodnotou 120 kč pro další nákup.
                    </p>
                  </div>
                  <div className="slider-arrows">
                    <button
                      className="testimonial-prev slick-arrow"
                      onClick={this.previous}
                    >
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button
                      className="testimonial-next slick-arrow"
                      onClick={this.next}
                    >
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Slider
                  ref={(c) => (this.slider = c)}
                  {...noxfolioSlider.testimonials}
                  className="testimonials-wrap"
                >
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text" style={{ color: "white" }}>
                      Všechno v topu! Jak víc detailněji to popsat? Upřímně jsem nečekal, že to jidlo bude tak skvěle. 🖤 Dal jsem si jejich signature model a mega dobre, to mísení chuti je neskutečné. Masakr. A prostředí? Velice útulné, a krásné, úplně by se tam dalo fotit. 📸
                    </div>
                    <div className="testi-des">
                      <h5>Ondřej Lamcha</h5>
                      <span>25.06.2024</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author2.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text" style={{ color: "white" }}>
                      Moc hezká atmosféra, super jídlo, příjemná obsluha. Není co vytýkat. Sem se rád vrátím zkusit něco dalšího.
                    </div>
                    <div className="testi-des">
                      <h5>Oldřich Urban</h5>
                      <span>10.07.2024</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text" style={{ color: "white" }}>
                      Všechno v topu! Jak víc detailněji to popsat? Upřímně jsem nečekal, že to jidlo bude tak skvěle. 🖤 Dal jsem si jejich signature model a mega dobre, to mísení chuti je neskutečné. Masakr. A prostředí? Velice útulné, a krásné, úplně by se tam dalo fotit. 📸
                    </div>
                    <div className="testi-des">
                      <h5>Ondřej Lamcha</h5>
                      <span>25.06.2024</span>
                    </div>
                  </div>
                </Slider>
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
  }
}
