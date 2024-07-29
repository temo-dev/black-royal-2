import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section id="blog" className="blog-area rel z-1">
      <div className="for-bgc-black pt-130 pb-100 rpt-100 rpb-70 border-neon">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15 neonText">KDE A KDY NÁS NAJDEŠ</span>
                <h2 className="neonText">
                  Pobočky PRAHA
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s border-neon">
                <div className="image">
                  <Image src="/assets/images/black-royal/_DSF6206.jpg" alt="Blog" width={200} height={200} />
                </div>
                <div className="content">
                  <div className="blog-meta mb-35">
                    <Link legacyBehavior className="tag" href="https://maps.app.goo.gl/hR4MTUcPCZPV15pWA">
                      Praha 5
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="https://maps.app.goo.gl/hR4MTUcPCZPV15pWA">
                      Radlická 365/154, Nová Waltrovka
                    </Link>
                  </h5>
                  <hr />
                  <div className="blog-meta mt-35">
                    <a className="date" href="/">
                      <i className="far fa-calendar-alt" /> Po-Ne, 11h-21h
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s border-neon">
                <div className="image">
                  <Image src="/assets/images/black-royal/logo-black-01.png" alt="Blog" width={200} height={200} />
                </div>
                <div className="content">
                  <div className="blog-meta mb-35">
                    <Link legacyBehavior className="tag" href="/">
                      Praha 3
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/">
                      Seifertová 11, Praha 3
                    </Link>
                  </h5>
                  <hr />
                  <div className="blog-meta mt-35">
                    <a className="date" href="/">
                      <i className="far fa-calendar-alt" /> Comming soon
                    </a>
                  </div>
                </div>
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
export default Blog;

export const Blog2 = () => {
  return (
    <section
      id="blog"
      className="blog-area bgc-black pt-110 rpt-80 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Introduction about me
              </span>
              <h2>Leatest News &amp; Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-item-two wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/blog/blog-two1.jpg" alt="Blog" />
                <Link legacyBehavior href="/blog-details">
                  <a className="details-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link legacyBehavior href="project-details">
                    Trending code settings for a nice portfolio
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More{" "}
                    <img
                      src="assets/images/shape/details-arrow.png"
                      alt="Arrow"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item-two wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/blog/blog-two2.jpg" alt="Blog" />
                <Link legacyBehavior href="/blog-details">
                  <a className="details-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link legacyBehavior href="project-details">
                    Trending code settings for a nice portfolio
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More{" "}
                    <img
                      src="assets/images/shape/details-arrow.png"
                      alt="Arrow"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item-two wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/blog/blog-two3.jpg" alt="Blog" />
                <Link legacyBehavior href="/blog-details">
                  <a className="details-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link legacyBehavior href="project-details">
                    Trending code settings for a nice portfolio
                  </Link>
                </h4>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More{" "}
                    <img
                      src="assets/images/shape/details-arrow.png"
                      alt="Arrow"
                    />
                  </a>
                </Link>
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
