import logo from './logo.svg';
// import './App.css';
import './css/Style.css'
function App() {
  return (<>
    <div className="App">
      <div class="navbar navbar-expand-lg bg-light navbar-light" id="mynav">
        <div class="container-fluid">
          <a href="index.html" class="navbar-brand">Anurag Roshan</a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-between nav-sticky" id="navbarCollapse">
            <div class="navbar-nav ml-auto ">
              <a href="#home" class="nav-item nav-link active">Home</a>
              <a href="#about" class="nav-item nav-link">About</a>
              <a href="#projects" class="nav-item nav-link">Projects</a>
              <a href="#service" class="nav-item nav-link">My Skills</a>
              <a href="#experience" class="nav-item nav-link">Experience</a>
              <a href="#contact" class="nav-item nav-link">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Hero Start --> */}
    <div class="hero" id="home">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="hero-content" style={{ textAlign: "center" }}>
              <p class="my-5 px-3" style={{ fontSize: "30px", color: "#090322" }}>Hey I am Anurag Roshan</p>
              <div class="hero-text">
                <div class="container py-1" style={{ height: "250px" }}>
                  <div class="output" id="output">
                    {/* <!-- <h1>I am</h1> -->
                    <!-- <p>  <h1>Anurag Roshan </h1>\</p> --> */}
                    <h1 class="cursor" > </h1>

                  </div>
                </div>

              </div>
              <div class="hero-btn">
                <a class="btn" id="btn2" href="https://www.instagram.com/amnu_rag_15/">Contact Me</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    {/* --------------------Hero End ------------ */}

    {/* <!-- About Start --> */}
    <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div class="container-fluid">
        <div class="row align-items-center " style={{ marginTop: "80px" }}>
          <div class="col-lg-6" id="sepia">
            <div class="about-img">
              <img class="about-image mx-3 " src="https://github.com/AnuragRoshan/mycv/blob/main/img/about.png?raw=true" alt="Image" />  {/*-----------------------------------------Here* */}
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-header text-left">
                <p>About Me</p>
                <h2>Penultimate Under Grad Student </h2>
              </div>
              <div class="about-text"
                style={{ color: "black", backgroundColor: "rgba(240, 248, 255, 0.712)", padding: "12px 12px", marginBottom: "23px" }}>
                <p>
                  Currently I am pursuing Btech (CSE) from Chandigarh University. I love to Do Competitive
                  Programming and full stack MERN developer . Also exploring web 3.0 . Hands on
                  implementation on Docker and other DevOps tools.
                </p>
              </div>

              <a class="btn" href="">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- About End --> */}

    {/* Project Profile Start---------->  */}

    <div class="profiles " id="projects">
      <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
        <p>Real World Experience</p>
        <h2>My Projects</h2>
      </div>
      <div class="column">
        <div class="section-header text-center " >
          <h4>Movie Recommendation System</h4>

        </div>
        <div class="container projectcont" style={{ width: "50%", position: "relative", marginBottom: "4rem" }}>
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel"
            data-interval="1000">
            <div class="carousel-inner">
              <div class="carousel-item active" data-interval="1500">
                <img src="https://user-images.githubusercontent.com/68966298/178826347-b572b3e7-d903-4b08-ac6b-0a5009143ade.JPG"
                  class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-interval="1500">
                <img src="https://user-images.githubusercontent.com/68966298/178826468-28b970b4-1051-4f01-a1b7-57841af3a7b7.JPG"
                  class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-interval="1500">
                <img src="https://user-images.githubusercontent.com/68966298/178826646-38953597-f7ab-47ca-ab57-bc035aea5d27.JPG"
                  class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div class="overlay" style={{ zIndex: "1" }}>
            <div class=" text-center px-4 py-4 labelo">
              This project is being developed for Microsoft Engage 2022 mentorship program. In this
              project I
              have used Machine Learning algorithms and various other algorithms to implement movie
              recommendation system .
            </div>
            <div class=" text-center px-4 labelo">
              <h5 class="labelo">Tech Stack </h5>

              <b> Client: </b>React, Redux, Material UI
              <br />
              <b>Server:</b> Node, Express , Passport JS , Flask , JupyterNotebook

            </div>
          </div>
        </div>
        <div class="text-center container" style={{ fontWeight: "500", fontSize: "2rem " }}>More To Come</div>
        <div class="stage">
          <div class="dot-stretching"></div>
        </div>
      </div>
    </div>
    {/* Project Profile End------------->  */}

    {/* <!-- Service Start --> */}
    <div class="service" id="service">
      <div class="container">
        <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <p>What I do</p>
          <h2>My Skills</h2>
        </div>
        <div class="row">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="service-item">
              <div class="service-icon">
                <i class="fab fa-docker"></i>
              </div>
              <div class="service-text">
                <h3>Docker</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="service-item">
              <div class="service-icon">
                <i class="far fa-life-ring"></i>
              </div>
              <div class="service-text">
                <h3>Kubernetes</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="service-item">
              <div class="service-icon">
                <i class="fab fa-cuttlefish"></i>
              </div>
              <div class="service-text">
                <h3>C++</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="service-item">
              <div class="service-icon">
                <i class="fab fa-css3-alt"></i>
              </div>
              <div class="service-text">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="service-item">
              <div class="service-icon">
                <i class="fab fa-js-square"></i>
              </div>
              <div class="service-text">
                <h3>JAVA SCRIPT</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="service-item">
              <div class="service-icon">
                <i class="fab fa-node"></i>
              </div>
              <div class="service-text">
                <h3>NODE JS</h3>

              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="service-item">
              <div class="service-icon">
                <i class="fab fa-react"></i>
              </div>
              <div class="service-text">
                <h3>React Js</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <div class="service-text">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    {/* <!-- Service End --> */}
    {/* <!-- Experience Start --> */}
    <div class="experience" id="experience">
      <div class="container">
        <header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <p>My Journey</p>
          <h2>Experience</h2>
        </header>
        <div class="timeline">
          <div class="timeline-item right wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">2022</div>
              <h2>Microsoft Engage</h2>
              <h4>Mentee</h4>
              <p>
                Started One Month Microsoft Engage Program
              </p>
            </div>
          </div>
          <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">2020</div>
              <h2>Chandigarh University</h2>
              <h4>Chandigarh ,India</h4>
              <p>
                Started Engineering in CSE
              </p>
            </div>
          </div>
          <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">2019</div>
              <h2>Delhi Model High School</h2>
              <h4>Patna, India</h4>
              <p>
                Passed Class 12th
              </p>
            </div>
          </div>
          <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">2017</div>
              <h2>DR GL Dutta DAV Public School </h2>
              <h4>Patna ,India</h4>
              <p>
                Passed Class 10th
              </p>
              {/* <!-- Service End --> */}





            </div>
          </div>
        </div>
      </div>
    </div>
    {/* // <!-- Job Experience End --> */}

    {/* <!-- Footer Start --> */}
    <div class="footer wow fadeIn" data-wow-delay="0.3s" id="contact">
      <div class="container-fluid bottombar">
        <div class="container">
          <div class="footer-info">
            <h2>Anurag Roshan</h2>

            <div class="footer-socials">
              <a href="tel:+918210003603"><i class="fas fa-phone fab"></i></a>
              <a href="mailto:anuragraushan373@gmail.com"><i class="far fa-envelope-open "></i></a>
            </div>
            <div class="footer-social ">
              <a href="https://twitter.com/AnuRagRoshan15"><i class="fab fa-twitter"></i></a>

              {/* <!-- <a href=""><i class="fab fa-instagram"></i></a> --> */}
              <a href="https://www.linkedin.com/in/anurag-roshan-33357b181/"><i
                class="fab fa-linkedin-in"></i></a>

              <a href="https://github.com/AnuragRoshan"><i class="fab fa-github"></i></a>
              <a href="https://www.youtube.com/channel/UCBux1tHHJws7I9zumlP-aiQ"><i
                class="fab fa-youtube"></i></a>
              <a href="https://www.instagram.com/amnu_rag_15/"><i class="fab fa-instagram"></i></a>

            </div>
          </div>
        </div>

      </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to top button --> */}
    <a href="#" class="btn back-to-top"><i class="fa fa-chevron-up"></i></a>




  </>
  );
}

export default App;
