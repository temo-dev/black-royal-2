import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Asian Kitchen</span>
              <h2 className="neonText">
                KONCEPT BLACK ROYAL
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/black-royal/_DSF6198.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">BLACK ROYAL</span>
              <h2 className="neonText">
                <Link legacyBehavior href="/">
                  Vaše zdraví pro nás je duležité
                </Link>
              </h2>
              <p style={{ color: "white" }}>
                Používáme čerstvé suroviny a bylinky si vybíráme sami.
              </p>
              <Link legacyBehavior href="/">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/black-royal/_DSF6200.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">BLACK ROYAL</span>
              <h2 h2 className="neonText">
                <Link legacyBehavior href="/">
                  Mini show
                </Link>
              </h2>
              <p style={{ color: "white" }}>
                Dělat nejlepší asijská jídla, která Vám připravíme přímo očima
              </p>
              <Link legacyBehavior href="/">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/black-royal/_DSF6201.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">BLACK ROYAL</span>
              <h2 h2 className="neonText">
                <Link legacyBehavior href="/">
                  Vaše spokojenost je na prvním místě
                </Link>
              </h2>
              <p style={{ color: "white" }}>
                spokojenost z jídel nikdy nestačí, zdokonaluje se to s moderním a příjemným prostředím v našem bistru.
              </p>
              <Link legacyBehavior href="/">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/black-royal/_DSF6206.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">BLACK ROYAL</span>
              <h2 h2 className="neonText">
                <Link legacyBehavior href="project-details">
                  Věrnostní program již brzy
                </Link>
              </h2>
              <p style={{ color: "white" }}>
                Zaregistrujte si jednoduše digitální zákazníkovou kartu do Apple Wallet/ Google Pay k získání voucheru s hodnotou 120 kč pro další nákup.
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="/projects">
            <a className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
            </a>
          </Link>
        </div> */}
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
export default Projects;

export const Projects2 = () => {
  return (
    <section
      id="projects"
      className="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Explore my projects
              </span>
              <h2>Explore My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-3">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two5.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="project-details-btn mb-50">
              <Link legacyBehavior href="/project-details">
                <a className="more-btn wow zoomIn delay-0-2s">
                  <span>More</span>
                  <i className="fal fa-arrow-up" />
                </a>
              </Link>
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
