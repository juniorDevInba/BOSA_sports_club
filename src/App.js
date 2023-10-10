import "./App.css";
import bg from "./assets/images/tennis-ball.jpg";
import BG from "./assets/images/bg.png";
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

function App() {
  const [visable, setVisable] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisable(true);
    } else if (scrolled <= 300) {
      setVisable(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // console.log(new Date());
  // var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  // var distance = countDownDate - new Date();

  // console.log(Math.floor(distance / (1000 * 60 * 60 * 24)));

  window.addEventListener("scroll", toggleVisible);

  const [showNav, setShowNav] = useState(0);

  const HandelTab = () => {
    document.getElementById("Side-nav").style.width = "250%";
    setShowNav(1);
  };

  const HandelClose = () => {
    document.getElementById("Side-nav").style.width = "0%";
    setShowNav(0);
  };

  return (
    <>
      <header id="home">
        <div className="nav" id="nav">
          <div className="logo">LOGO</div>
          <div className="position-relative">
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
        </div>

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
                {" "}
                <a href="#blog">BLOG</a>
              </li>
              <li>
                {" "}
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

                        <li>Team name(Loss)</li>
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

                        <li>Team name(Loss)</li>
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

          <section className="carousel" aria-label="Gallery">
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
          </section>
        </div>

        {/* Blog */}
        <div className="mt-4 mb-4 title fs-3">Our Blog</div>
        <div className="col-12" id="blog">
          <div className="">
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
      </div>

      {/* Contact */}
      <div className="contact">
        <div className="mt-4 mb-4 m-5 title fs-3" id="contact">
          Contact
        </div>
        <div className="d-flex align-item-center justify-content-center gap-5">
          <div className="col-6 mt-4 mb-5">
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
                  <i className="bi bi-envelope fs-5"></i>Email address
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
                  <i className="bi bi-chat-dots fs-5"></i>
                  Comments
                </label>
              </div>
              <div className="text-center mb-3 mt-3">
                <button className="btn btn-md" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="text-center bg-white text-dark p-4 h-120">
          <div className="address">
            <div className="footer-item">
              <div className="d-flex justify-content-between align-item-center">
                {/* Adress */}
                <div className="footer-item_1 w-50 text-start p-3 ">
                  <div className="fs-3 text fw-bolder">
                    <i className="bi bi-geo-alt-fill"></i>Address
                  </div>
                  <a
                    className=""
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
                {/* Social NetWorks */}
                <div className="footer-item_2 w-50 text-start p-3 fw-bolder">
                  <div className="fs-2 text">
                    <i className="bi bi-globe2"></i> Social Media
                  </div>
                  <div className="d-flex gap-3 fs-2 m-1">
                    <a href="#instagram" target="blank">
                      <img src={insta} height={35} alt="insta" />
                    </a>
                    <a href="#instagram" target="blank">
                      <img src={face} alt="img" height={30} />
                    </a>
                    <a href="#instagram" target="blank">
                      <img src={linkedin} alt="linkedin" height={40} />
                    </a>
                    <a href="#instagram" target="blank">
                      <img src={youtube} alt="img" height={40} />
                    </a>
                  </div>
                </div>

                {/* About */}
                <div className="footer-item_3 w-50 text-start p-3">
                  <div className="fs-2 text fw-bolder">
                    <i className="bi bi-book-half"></i> About As
                  </div>
                  <p className="fs-5 text-left">
                    Welcome to BOSA sports club! We are a passionate community
                    of sports enthusiasts dedicated to promoting physical
                    fitness, camaraderie, and the love of sports. Founded with
                    the vision of fostering a healthy and active lifestyle, our
                    club offers a wide range of sporting activities, from tennis
                    and soccer to swimming and cycling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="position-fixed position-absolute bottom-0 start-0">
          <a href="https://wa.me/6381114224">
            <img src={whatapp} height={40} alt="whatsapp" />
          </a>
        </div>
      </div>

      {/* top button */}
      <div className="position-relative">
        <div className="position-fixed position-absolute bottom-0 end-0 p-5 ">
          <Link
            onClick={scrollToTop}
            style={{ display: visable ? "inline" : "none" }}
          >
            🔝
            <img
              src={top}
              width={40}
              height={50}
              alt="top"
              className="animation"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
