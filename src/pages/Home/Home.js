import styles from "./Home.module.scss";
import MainLayout from "../../layouts/MainLayout";
import servicesIcon from "../../assets/icons/services-icon.png";
import usersIcon from "../../assets/icons/users-icon.png";
import clsx from "clsx";
import { Grid } from "@mui/material";
import project1 from "../../assets/atza-graphic.jpg";
import project2 from "../../assets/video-editing.jpg";
import project3 from "../../assets/atza-events.jpg";
import project4 from "../../assets/atza-ui.jpg";
import { Carousel } from "../../components";
import { useNavigate } from "react-router";

import tataLogo from "../../assets/logos/tata-logo.png";
import bigbasketLogo from "../../assets/logos/bigbasket-logo.png";
import nikeLogo from "../../assets/logos/nike-logo.png";
import comLogo from "../../assets/logos/com-logo.png";

import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  const services = [
    {
      title: "Video Studio",
      link: "/video-studio",
      image: project1,
    },
    {
      title: "Content Writing & Management",
      link: "/content-writing",
      image: project2,
    },
    {
      title: "Design & UI/UX",
      link: "/design",
      image: project3,
    },
    {
      title: "Digital Branding",
      link: "/digital-branding",
      image: project4,
    },
  ];

  const clients = [
    { logo: tataLogo, description: "" },
    { logo: bigbasketLogo, description: "" },
    { logo: nikeLogo, description: "" },
    { logo: comLogo, description: "" },
  ];

  const testimonials = [
    {
      name: "Dan Brown",
      image: nikeLogo,
      position: "Senior Marketing Manager at Mozilla",
      message: "They're very responsive and go satisfaction",
    },
    {
      name: "Dan Brown",
      image: nikeLogo,
      position: "Senior Marketing Manager at Mozilla",
      message: "They're very responsive and go satisfaction",
    },
    {
      name: "Dan Brown",
      image: nikeLogo,
      position: "Senior Marketing Manager at Mozilla",
      message: "They're very responsive and go satisfaction",
    },
    {
      name: "Dan Brown",
      image: nikeLogo,
      position: "Senior Marketing Manager at Mozilla",
      message: "They're very responsive and go satisfaction",
    },
  ];

  const navigate = useNavigate();

  return (
    <MainLayout classes={[styles.container]}>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <span>LOGO</span>
          <h4>
            <strong>
              A Part of the LIMEWIT Media group, we're a Media-as-a-Service
              Organization
            </strong>{" "}
            with a team of passionate Mediapreneurs and a knack of improving the
            Digital Content & Media Ecosystem
          </h4>
          <button>
            <span>
              Learn More about us &nbsp; <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.heading}>
          <h2>Our Superstats</h2>
          <span></span>
        </div>
        <div className={styles.counters}>
          <div className={clsx(styles.clients, styles.counter)}>
            <span>
              <img src={usersIcon} alt="clients" />
            </span>
            <div>
              <h1>50+</h1>
              <p>Clients Served</p>
            </div>
          </div>
          <div className={clsx(styles.services, styles.counter)}>
            <span>
              <img src={servicesIcon} alt="services" />
            </span>
            <div>
              <h1>5+</h1>
              <p>Services</p>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.servicesContainer}>
        <h1>Here's how we add value to your Brand</h1>
        <h4>
          We offer a plethora of Services to help you crack the digital
          Conundrum & make an impact on your potential customers
        </h4>
        <div className={styles.services}>
          <Grid container>
            {services.map((service, i) => (
              <Grid item key={service.title} md={3} sm={6} xs={12}>
                <article
                  key={i}
                  className={styles.service}
                  onClick={() => navigate(`/services/${service.link}`)}
                >
                  <img src={service.image} alt={service.title} />
                  <div>
                    <h3>{service.title}</h3>
                    <BsArrowRight fontSize={20} />
                  </div>
                </article>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
      <Clients clients={clients} />
      <Testimonials testimonials={testimonials} />
    </MainLayout>
  );
};

export default Home;

const Clients = ({ clients = [] }) => {
  return (
    <section className={styles.clients}>
      <div className={styles.heading}>
        <h1>SuperClients</h1>
        <p>The superbrands we've helped create an impact</p>
      </div>
      <div className={styles.clientsSlider}>
        <Carousel className={styles.slider}>
          {clients.map((client, i) => (
            <div key={i} className={styles.client}>
              <img src={client.logo} alt={client.title} />
              {/* <div className={styles.content}>
                <h3>{client.title}</h3>
              </div> */}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const Testimonials = ({ testimonials = [] }) => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonialSlider}>
        <Carousel
          settings={{ infinite: true }}
          className={styles.testimonialCarousel}
          prevBtnClasses={styles.prevBtn}
          nextBtnClasses={styles.nextBtn}
        >
          {testimonials.map((testimonial, i) => (
            <div key={i} className={styles.testimonialItem}>
              <div className={styles.testimonialContent}>
                <img
                  src={testimonial.image}
                  className={styles.profile}
                  alt="profile"
                />
                <div className={styles.testimonialDescription}>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.position}</span>
                  <p>"{testimonial.message}"</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
