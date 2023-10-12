/* eslint-disable jsx-a11y/iframe-has-title */
import "./App.css";
import bg from "./assets/images/tennis-ball.jpg";
// import BG from "./assets/images/bg.png";
import csk from "./assets/images/csk.jpg";
import tennis from "./assets/images/tennis.jpg";
import top from "./assets/images/tennis-tennis-ball-svgrepo-com.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

// videos
import tennisVid from "./assets/videos/tennis.mp4";
import tennisVid_2 from "./assets/videos/tennis_2.mp4";
import tennis_3 from "./assets/videos/tennis_3.mp4";

// svg
import face from "./assets/svg/face.svg";
import insta from "./assets/svg/insta.svg";
import linkedin from "./assets/svg/linkedin.svg";
import whatapp from "./assets/svg/whatapp.svg";
import youtube from "./assets/svg/youtube.svg";

// import mail from "./assets/svg/envelope-svgrepo-com.svg";
// import Geo from "./assets/svg/location-marker-svgrepo-com.svg";
// import phone from "./assets/svg/phone-svgrepo-com.svg";

function App() {
  const location =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7859.290973389918!2d78.15657812776354!3d9.963424603111491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c717eb945659%3A0x1e0d5bc0fcb99d32!2sBlue%20Ocean%20Sports%20Arena%20(BOSA)!5e0!3m2!1sen!2sin!4v1697008036770!5m2!1sen!2sin";
  const [visable, setVisable] = useState(false);

  // ball visiable function
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisable(true);
    } else if (scrolled <= 300) {
      setVisable(false);
    }
  };

  // scroll Top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  // responsive nav tab
  const [showNav, setShowNav] = useState(0);

  const HandelTab = () => {
    document.getElementById("Side-nav").style.width = "250%";
    setShowNav(1);
  };

  const HandelClose = () => {
    document.getElementById("Side-nav").style.width = "0%";
    setShowNav(0);
  };

  // carousal
  var carouselContainer = document.getElementById("carousel");
  function tap(val) {
    if (val === ">") {
      carouselContainer.scrollLeft += 500;
    } else {
      carouselContainer.scrollLeft -= 500;
    }
  }

  // current Date
  var currentDate = new Date("Jan 5, 2024 15:37:25").getTime();
  // Day ,hours, mins and secs
  setInterval(function () {
    var countDown = currentDate - new Date().getTime();

    // time calculation for days , hours, mins and secs
    var day = Math.floor(countDown / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    var mins = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((countDown % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML =
      day + "D " + hours + "h " + mins + "m " + secs + "s";
  }, 1000);

  // scroll animation
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <>
      {/* header */}
      <header id="home">
        {/* <div className="position-relative"> */}
        <div className="nav" id="nav">
          <div className="logo">LOGO</div>
          <div className="drawer">
            {showNav === 0 ? (
              <button className="btn" onClick={HandelTab}>
                <i className="bi bi-list"></i>
              </button>
            ) : (
              <button className="btn" onClick={(e) => HandelClose()}>
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </div>
          <div className="nav-item  active">
            <ul>
              <li>
                <a href="#home">HOME</a>
                {/* <div className="line"></div> */}
              </li>
              <li>
                <a href="#matches">MATCHES</a>
                {/* <div className="line"></div> */}
              </li>
              <li>
                <a href="#player">PLAYERS</a>
                {/* <div className="line"></div> */}
              </li>
              <li>
                <a href="#blog">BLOG</a>
                {/* <div className="line"></div> */}
              </li>
              <li>
                <a href="#contact">CONTACT</a>
                {/* <div className="line"></div> */}
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}

        {/* SideNav */}
        <div className="Side-nav" id="Side-nav">
          <div className="Side-nav-item">
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#matches">MATCHES</a>
              </li>
              <li>
                <a href="#player">PLAYERS</a>
              </li>
              <li>
                <a href="#blog">BLOG</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
        {/*Header Content  */}
        <div className="img">
          <img src={bg} alt="bg" />
        </div>
        <div className="header-content">
          <div className="content">
            <div className="content-text">
              <div className="title">
                <h1>World Cup Events</h1>
              </div>

              <div className="sub-title">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-start gap-3 mb-3">
              <span id="demo" className="fs-1 text"></span>
            </div>
            <div className="mb-2 mt-2">
              <a href="#contact" className="btn btn-md">
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Player section */}
      <div className="container">
        <div className="matches" id="matches">
          <div className="card-style">
            <div className="d-flex justify-content-center">
              <div className="col-12 mt-3 mb-3">
                <div className="card p-4">
                  <div className="d-flex justify-content-between p-5">
                    <div className="card-left">
                      <div className="card-text">
                        <img
                          src={csk}
                          width={100}
                          height={100}
                          alt="img"
                          className="mb-2"
                        />

                        <li className="fw-medium">Team name(Loss)</li>
                        <li>player Name(3)</li>
                        <li>player Name(12)</li>
                        <li>player Name(10)</li>
                      </div>
                    </div>
                    <div className="card-center">
                      <div className="center-card-text">4-1</div>
                    </div>
                    <div className="card-right">
                      <div className="card-text">
                        <img
                          src={tennis}
                          width={100}
                          height={100}
                          alt="img"
                          className="mb-2"
                        />
                        <li className="fw-medium">Team name(Loss)</li>
                        <li>player Name(3)</li>
                        <li>player Name(12)</li>
                        <li>player Name(10)</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* next match */}
        <div className="d-flex justify-content-center">
          <div className="col-12">
            <div className="card">
              <div className="card-header next-match">NEXT MATCH</div>
              <div className="card-body">
                <div className="widget-vs">
                  <div className="d-flex aling-item-center justify-content-around gap-5">
                    <div className="text-center">
                      <h1 className="">TEAM LOGO</h1>
                      <p className="fs-4 text-dark">Team Name</p>
                    </div>
                    <div>
                      <div className="vs">/</div>
                    </div>
                    <div className="text-center">
                      <h1 className="">TEAM LOGO</h1>
                      <p className="fs-4 text-dark">Team Name</p>
                    </div>
                  </div>

                  <div className="text-center align-item-center">
                    <div className="text">
                      <b>World Cup Lorem</b>
                    </div>
                    <div className="p-text">
                      <p>December 20th,2023</p>
                      <p>9:30 AM IST</p>
                    </div>
                    <div className="text">New Era</div>
                  </div>
                </div>
              </div>
            </div>
            {/* upcoming match */}
            <div className="mt-4 mb-4 title fs-3">Upcoming Match</div>
            <div className="up-match">
              <div className="d-flex gap-4 coming-card flex-wrap gap-3">
                <div className="row">
                  <div className="col-6 mb-3">
                    <div className="card p-5">
                      <div className="d-flex align-item-center justify-content-center gap-3">
                        <div className="text-center mb-0">
                          <h1 className="fs-4 text-dark">
                            <img
                              src={csk}
                              width={100}
                              height={100}
                              alt="img"
                              className="mb-2"
                            />
                          </h1>
                          <p className="fs-4 text-dark">Team Name</p>
                        </div>
                        <div>
                          <div className="vs">vs</div>
                        </div>
                        <div className="text-center mb-0">
                          <div className="fs-4 text-dark">
                            <img
                              src={tennis}
                              width={100}
                              height={100}
                              alt="img"
                              className="mb-2"
                            />
                          </div>
                          <p className="fs-4 text-dark">Team Name</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text">
                          <b>World Cup Lorem</b>
                        </div>
                        <div className="p-text">
                          <p>December 20th,2023</p>
                          <p>9:30 AM IST</p>
                        </div>
                        <div className="text">New Era</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card p-5">
                      <div className="d-flex align-item-center justify-content-center gap-3">
                        <div className="text-center mb-0">
                          <div className="fs-4 text-light">
                            <img
                              src={tennis}
                              width={100}
                              height={100}
                              alt="img"
                              className="mb-2"
                            />
                          </div>
                          <p className="fs-4 text-dark">Team Name</p>
                        </div>
                        <div>
                          <div className="vs">vs</div>
                        </div>
                        <div className="text-center mb-0">
                          <div className="fs-4 text-dark">
                            <img
                              src={csk}
                              width={100}
                              height={100}
                              alt="img"
                              className="mb-2"
                            />
                          </div>
                          <p className="fs-4 text-dark">Team Name</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text">
                          <b>World Cup Lorem</b>
                        </div>
                        <div className="p-text">
                          <p>December 20th,2023</p>
                          <p>9:30 AM IST</p>
                        </div>
                        <div className="text">New Era</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                    <div className="card p-5">
                      <div className="d-flex align-item-center justify-content-center  gap-3">
                        <div className="text-center mb-0">
                          <div className="fs-4 text-light">
                            <img
                              src={tennis}
                              width={100}
                              height={100}
                              alt="img"
                              className="mb-2"
                            />
                          </div>
                          <p className="fs-4 text-dark">Team Name</p>
                        </div>
                        <div>
                          <div className="vs">vs</div>
                        </div>
                        <div className="text-center mb-0">
                          <div className="fs-4 text-dark">
                            <img
                              src={csk}
                              width={100}
                              height={100}
                              alt="img"
                              className="mb-2"
                            />
                          </div>
                          <p className="fs-4 text-dark">Team Name</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text">
                          <b>World Cup Lorem</b>
                        </div>
                        <div className="p-text">
                          <p>December 20th,2023</p>
                          <p>9:30 AM IST</p>
                        </div>
                        <div className="text">New Era</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                    <div className="card p-5">
                      <div className="d-flex align-item-center justify-content-center gap-3">
                        <div className="text-center mb-0">
                          <div className="fs-4 text-dark">
                            <img
                              src={csk}
                              width={100}
                              height={100}
                              alt="img"
                              className="mb-2"
                            />
                          </div>
                          <p className="fs-4 text-dark">Team Name</p>
                        </div>
                        <div>
                          <div className="vs">vs</div>
                        </div>
                        <div className="text-center mb-0">
                          <div className="fs-4 text-dark">
                            <img
                              src={tennis}
                              width={100}
                              height={100}
                              alt="img"
                              className="mb-2"
                            />
                          </div>
                          <p className="fs-4 text-dark">Team Name</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text">
                          <b>World Cup Lorem</b>
                        </div>
                        <div className="p-text">
                          <p>December 20th,2023</p>
                          <p>9:30 AM IST</p>
                        </div>
                        <div className="text">New Era</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* BLOG */}
        <div id="player">
          <div className="mt-4 mb-4 title fs-3">Videos</div>

          {/* <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li
                id="carousel__slide1"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <a href="#carousel__slide4" className="carousel__prev">
                    image
                  </a>
                  <a href="#carousel__slide2" className="carousel__next">
                    1
                  </a>
                </div>
              </li>
              <li
                id="carousel__slide2"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide1" className="carousel__prev">
                  1
                </a>
              </li>
              <li
                id="carousel__slide3"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide2" className="carousel__prev">
                  image
                </a>
                <a href="#carousel__slide4" className="carousel__next">
                  2
                </a>
              </li>
              <li
                id="carousel__slide4"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide3" className="carousel__prev">
                  images
                </a>
                <a href="#carousel__slide1" className="carousel__next">
                  3
                </a>
              </li>
            </ol>
            <aside className="carousel__navigation">
              <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide1"
                    className="carousel__navigation-button"
                  >
                    Go to slide 1
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide2"
                    className="carousel__navigation-button"
                  >
                    Go to slide 2
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide3"
                    className="carousel__navigation-button"
                  >
                    Go to slide 3
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide4"
                    className="carousel__navigation-button"
                  >
                    Go to slide 4
                  </a>
                </li>
              </ol>
            </aside>
          </section> */}
          <div className="carousel-wrapper" id="carousel">
            <video width="443" autoPlay loop muted>
              <source src={tennisVid_2} type="video/mp4" />
            </video>
            <video width="443" autoPlay loop muted>
              <source src={tennisVid_2} type="video/mp4" />
            </video>
            <video width="443" autoPlay loop muted>
              <source src={tennisVid_2} type="video/mp4" />
            </video>
            <video width="443" autoPlay loop muted>
              <source src={tennisVid_2} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="position-relative">
          <div className="position-absolute end-0 ">
            <button className="btn" type="button" onClick={() => tap("<")}>
              {/* {">"} */}
              <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>
          <div className="position-absolute start-0">
            <button className="btn" type="button" onClick={() => tap(">")}>
              {/* {"<"} */}
              <i className="bi bi-arrow-left-short"></i>
            </button>
          </div>
        </div>

        {/* Blog */}
        <div className="mt-5 mb-3 title fs-3">Our Blog</div>
        <div className="col-12" id="blog">
          <div className="blog-content">
            <div className="custom-media mb-2">
              <div className="card">
                <video width="443" autoPlay loop muted>
                  <source src={tennisVid} type="video/mp4" />
                </video>
                <div className="overlay">
                  <div className="card-text overlay-text">
                    Slide in Overlay from the BottomSlide in Overlay from the
                    Bottom Slide in Overlay from the Bottom
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-media mb-2">
              <div className="card">
                <video width="443" autoPlay loop muted>
                  <source src={tennis_3} type="video/mp4" />
                </video>
                <div className="overlay">
                  <div className="card-text overlay-text">
                    Slide in Overlay from the BottomSlide in Overlay from the
                    Bottom Slide in Overlay from the Bottom
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-media mb-2">
              <div className="card">
                <video width="443" autoPlay loop muted>
                  <source src={tennisVid_2} type="video/mp4" />
                </video>
                <div className="overlay">
                  <div className="card-text overlay-text">
                    Slide in Overlay from the BottomSlide in Overlay from the
                    Bottom Slide in Overlay from the Bottom
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-media  mb-2">
              <div className="card">
                <video width="443" autoPlay loop muted>
                  <source src={tennisVid} type="video/mp4" />
                </video>
                <div className="overlay">
                  <div className="card-text overlay-text">
                    Slide in Overlay from the BottomSlide in Overlay from the
                    Bottom Slide in Overlay from the Bottom
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-media mb-2">
              <div className="card">
                <video width="443" autoPlay loop muted>
                  <source src={tennis_3} type="video/mp4" />
                </video>
                <div className="overlay">
                  <div className="card-text overlay-text">
                    Slide in Overlay from the BottomSlide in Overlay from the
                    Bottom Slide in Overlay from the Bottom
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-media mb-2">
              <div className="card">
                <video width="443" autoPlay loop muted>
                  <source src={tennisVid_2} type="video/mp4" />
                </video>
                <div className="overlay">
                  <div className="card-text overlay-text">
                    Slide in Overlay from the BottomSlide in Overlay from the
                    Bottom Slide in Overlay from the Bottom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}

      {/* <div className="contact-details d-flex justify-content-center text-center">
          <div className="contact-item">
          <i className="bi bi-telephone title fs-4"></i> :
            <a href="tel:+91 6379219816">+91 6379219816</a>
            </div>
            <div className="contact-item">
            <i className="bi bi-envelope title fs-4"></i> :
            <a href="mailto:winioa@gmail.com">winioa@gmail.com</a>
            <div className="location">
              <i className="bi bi-geo-alt-fill title fs-4"></i>
              <a
                href="https://maps.app.goo.gl/cvbh8ji2EDrh35zeA"
                target="blank"
                >
                Location
                </a>
                </div>
                </div>
        </div> */}

      <div className="contact" id="contact">
        <div className="mt-4 mb-4 p-3 title fs-3">Contact</div>
        {/* <div className="row"> */}
        <div className="d-flex justify-content-center gap-4 contact-form">
          <div className="col-6 mt-4">
            <div className="contact-form">
              <form noValidate>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                  />
                  <label htmlFor="floatingPassword">
                    <i className="bi bi-person fs-5"></i>User Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">
                    <i className="bi bi-envelope fs-5"></i> Email address
                  </label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">
                    <i className="bi bi-chat-dots fs-5"></i> Comments
                  </label>
                </div>
                <div className="d-flex gap-3 text-start mb-3 mt-3">
                  <button className="btn btn-md" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Adress */}
          <div className="mt-4 mb-5">
            <div className="contact-map">
              <iframe
                src={location}
                width="550"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <div className="text-center bg-white text-dark p-4 h-120">
          <div className="address">
            <div className="footer-item">
              <div className="d-flex justify-content-around">
                {/* About */}
                <div className="footer-item_1 w-50 text-start p-2">
                  <div className="fs-2 text fw-bolder">
                    <i className="bi bi-book-half"></i> About As
                  </div>
                  <p className="fs-5 text-left">
                    Welcome to BOSA sports club! We are a passionate community
                    of sports enthusiasts dedicated to promoting physical
                    fitness, camaraderie, and the love of sports.
                  </p>
                </div>
                {/* Social NetWorks */}
                <div className="footer-item_2 w-50 text-start p-2 fw-bolder">
                  <div className="fs-2 text">
                    <i className="bi bi-globe2"></i> Find Us
                  </div>
                  <div className="d-flex gap-4 fs-2 rotate">
                    <a href="#instagram" target="blank">
                      <img src={face} alt="img" height={40} />
                    </a>
                    <a href="#instagram" target="blank">
                      <img src={linkedin} alt="linkedin" height={45} />
                    </a>
                    <a href="#instagram" target="blank">
                      <img src={insta} height={45} alt="insta" />
                    </a>
                    <a href="#instagram" target="blank">
                      <img src={youtube} alt="img" height={45} />
                    </a>
                  </div>
                </div>

                <div className="footer-item_3 w-50 text-start p-2">
                  <div className="fs-3 text fw-bolder">
                    <i className="bi bi-geo-alt-fill"></i>Address
                  </div>
                  <a
                    href="https://maps.app.goo.gl/WP8sLYCeveQRZwD29"
                    target="blank"
                  >
                    14, Alagar Kovil Main Rd, near Inthiya Super Market, Surya
                    Nagar, Madurai, Tamil Nadu 625007
                  </a>

                  <div className="mt-2">
                    <i className="bi bi-telephone text fs-4"></i> :
                    <a href="tel:+91 6379219816">+91 6379219816</a>
                  </div>
                  <div className="mt-2">
                    <i className="bi bi-envelope text fs-4"></i> :
                    <a href="mailto:winioa@gmail.com">winioa@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-dark fs-6 mt-3">
            Created By :
            <span>
              <a href="https://wizinoa.com/" target="blank" className="text">
                WizInoa💡
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* whatsApp */}
      <div className="position-relative">
        <div className="position-fixed position-absolute bottom-0 start-0 rotate">
          <a href="https://wa.me/6381114224">
            <img src={whatapp} height={40} alt="whatsapp" />
          </a>
        </div>
      </div>
      {/* <div className="position-relative mb-3">
        <div className="position-fixed position-absolute top-50 start-0 ">
          <a href="tel:+91 6381114224">
            <img src={phone} height={40} alt="phone" />
          </a>

          <a href="tel:+91 6381114224">
            <img src={Geo} height={40} alt="phone" />
          </a>
        </div>
      </div> */}

      {/* top button */}
      <div className="position-relative">
        <div className="position-fixed position-absolute bottom-0 end-0 mt-1 p-4 ">
          <Link
            onClick={scrollToTop}
            style={{ display: visable ? "inline" : "none" }}
          >
            <img
              src={top}
              width={40}
              height={50}
              className="animation"
              alt="top"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
