import { Link } from "react-router-dom";
import "./App.css";
import bg from "./assets/images/Premium.jpeg";
import BG from "./assets/images/bg.png";

function App() {
  return (
    <>
      <div className="header" id="home">
        <div className="nav">
          <div className="logo">LOGO</div>
          <div className="spacer"></div>
          <div className="nav-item active">
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
              <Link href="#contact" className="btn btn-md btn-danger">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Player section */}
      <div className="matches" id="matches">
        <div className="card-style container">
          <div className="d-flex justify-content-center p-3">
            <div className="col-10">
              <div className="card p-5">
                <div className="card-body">
                  <div className="card-left">
                    <div className="card-text">
                      <li>TEAM LOGO</li>
                      <li>(player Name)</li>
                      <li>(player Name)</li>
                      <li>(player Name)</li>
                    </div>
                  </div>
                  <div className="card-center">
                    <div className="center-card-text">4-1</div>
                  </div>
                  <div className="card-right">
                    <div className="card-text">
                      <li>TEAM LOGO</li>
                      <li>(player name)</li>
                      <li>(player name)</li>
                      <li>(Plcer name )</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-12">
              <div className="card">
                <div className="card-header">NEST MATCH</div>
                <div className="card-body">
                  <div className="widget-vs">
                    <div className="d-flex aling-item-center justify-content-around gap-5">
                      <div className="text-center">
                        <h1 className="">TEAM LOGO</h1>
                        <p className="fs-4 text-light">Team Name</p>
                      </div>
                      <div>
                        <div className="vs">/</div>
                      </div>
                      <div className="text-center">
                        <h1 className="">TEAM LOGO</h1>
                        <p className="fs-4 text-light">Team Name</p>
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
              <div className="mt-4 mb-4 text fs-2">Upcoming Match</div>
              <div className="up-match">
                <div className="d-flex gap-4 coming-card flex-wrap gap-3">
                  <div className="row">
                    <div className="col-6">
                      <div className="card p-5">
                        <div className="d-flex align-item-center justify-content-center gap-3">
                          <div className="text-center mb-0">
                            <h1 className="fs-4 text-light">TEAM LOGO</h1>
                            <p className="fs-4 text-light">Team Name</p>
                          </div>
                          <div>
                            <div className="vs fs-5">/</div>
                          </div>
                          <div className="text-center mb-0">
                            <h1 className="fs-4 text-light">TEAM LOGO</h1>
                            <p className="fs-4 text-light">Team Name</p>
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
                            <h1 className="fs-4 text-light">TEAM LOGO</h1>
                            <p className="fs-4 text-light">Team Name</p>
                          </div>
                          <div>
                            <div className="vs fs-5">/</div>
                          </div>
                          <div className="text-center mb-0">
                            <h1 className="fs-4 text-light">TEAM LOGO</h1>
                            <p className="fs-4 text-light">Team Name</p>
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
                            <h1 className="fs-4 text-light">TEAM LOGO</h1>
                            <p className="fs-4 text-light">Team Name</p>
                          </div>
                          <div>
                            <div className="vs fs-5">/</div>
                          </div>
                          <div className="text-center mb-0">
                            <h1 className="fs-4 text-light">TEAM LOGO</h1>
                            <p className="fs-4 text-light">Team Name</p>
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
                            <h1 className="fs-4 text-light">TEAM LOGO</h1>
                            <p className="fs-4 text-light">Team Name</p>
                          </div>
                          <div>
                            <div className="vs fs-5">/</div>
                          </div>
                          <div className="text-center mb-0">
                            <h1 className="fs-4 text-light">TEAM LOGO</h1>
                            <p className="fs-4 text-light">Team Name</p>
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
        </div>

        {/* BLOG */}
        <div className="blog" id="player">
          <div className="container">
            <div className="mt-4 mb-4 text fs-2">Videos</div>
            <div className="">
              <section class="carousel" aria-label="Gallery">
                <ol class="carousel__viewport">
                  <li
                    id="carousel__slide1"
                    tabindex="0"
                    class="carousel__slide"
                  >
                    <div class="carousel__snapper">
                      <a href="#carousel__slide4" class="carousel__prev">
                        image
                      </a>
                      <a href="#carousel__slide2" class="carousel__next">
                        1
                      </a>
                    </div>
                  </li>
                  <li
                    id="carousel__slide2"
                    tabindex="0"
                    class="carousel__slide"
                  >
                    <div class="carousel__snapper"></div>
                    <a href="#carousel__slide1" class="carousel__prev">
                      1
                    </a>
                  </li>
                  <li
                    id="carousel__slide3"
                    tabindex="0"
                    class="carousel__slide"
                  >
                    <div class="carousel__snapper"></div>
                    <a href="#carousel__slide2" class="carousel__prev">
                      image
                    </a>
                    <a href="#carousel__slide4" class="carousel__next">
                      2
                    </a>
                  </li>
                  <li
                    id="carousel__slide4"
                    tabindex="0"
                    class="carousel__slide"
                  >
                    <div class="carousel__snapper"></div>
                    <a href="#carousel__slide3" class="carousel__prev">
                      images
                    </a>
                    <a href="#carousel__slide1" class="carousel__next">
                      3
                    </a>
                  </li>
                </ol>
                <aside class="carousel__navigation">
                  <ol class="carousel__navigation-list">
                    <li class="carousel__navigation-item">
                      <a
                        href="#carousel__slide1"
                        class="carousel__navigation-button"
                      >
                        Go to slide 1
                      </a>
                    </li>
                    <li class="carousel__navigation-item">
                      <a
                        href="#carousel__slide2"
                        class="carousel__navigation-button"
                      >
                        Go to slide 2
                      </a>
                    </li>
                    <li class="carousel__navigation-item">
                      <a
                        href="#carousel__slide3"
                        class="carousel__navigation-button"
                      >
                        Go to slide 3
                      </a>
                    </li>

                    <li class="carousel__navigation-item">
                      <a
                        href="#carousel__slide4"
                        class="carousel__navigation-button"
                      >
                        Go to slide 4
                      </a>
                    </li>
                  </ol>
                </aside>
              </section>
            </div>
            {/* Blog */}
            <div className="" id="blog">
              <div className="text mt-5 mb-5">Our Blog</div>
              <div className="row">
                <div className="col-12">
                  <div className="custom-media ">
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src={BG}
                        width={100}
                        height={250}
                        class="card-img-top"
                        alt="playerImage"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src={BG}
                        width={100}
                        height={250}
                        class="card-img-top"
                        alt="playerImage"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src={BG}
                        width={100}
                        height={250}
                        class="card-img-top"
                        alt="playerImage"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src={BG}
                        width={100}
                        height={250}
                        class="card-img-top"
                        alt="playerImage"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src={BG}
                        width={100}
                        height={250}
                        class="card-img-top"
                        alt="playerImage"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src={BG}
                        width={100}
                        height={250}
                        class="card-img-top"
                        alt="playerImage"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact */}
            <div className="text mt-5 mb-3" id="contact">
              Contact
            </div>
            <div className="d-flex">
              <div className="col-6">
                <div className="text">
                  <h1>Address</h1>
                </div>
                <p>Wizinoa , Athikulam Madurai</p>
                <div className="text">
                  <h1>Email</h1>
                </div>
                <p className="">
                  <a href="mailto:wizinoa@gmail.com">Wizinoa@gmail.com</a>
                </p>
                <div className="text">
                  <h1>Phone</h1>
                </div>
                <p className="p-text">
                  <a href="tel:91 1234567890">+91 1234567890</a>
                </p>
              </div>
              <div className="col-6 mt-4">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                  <textarea
                    type="text"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Message"
                  ></textarea>
                  <label for="floatingPassword">Message</label>
                </div>
                <div className=" mb-3 mt-3">
                  <button className="btn btn-md btn-outline-light">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <footer>
            <p className="">
              Created by --
              <a href="https://github.com/its-Inbarajan">Inbarajan</a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
