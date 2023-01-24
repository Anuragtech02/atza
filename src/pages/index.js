import styles from "../styles/Home.module.scss";
import MainLayout from "@/layouts/MainLayout";
import clsx from "clsx";
import { Grid } from "@mui/material";
import project1 from "@/assets/atza-graphic.jpg";
import project2 from "@/assets/video-editing.jpg";
import project3 from "@/assets/atza-events.jpg";
import project4 from "@/assets/atza-ui.jpg";
import Image from "next/image";
import { Carousel, CustomImage } from "@/components";
import { useRouter } from "next/router";
import { FaUserAlt } from "react-icons/fa";

import nikeLogo from "@/assets/logos/nike-logo.png";

const brand1 = "/logos/brand-1.png";
const brand2 = "/logos/brand-2.png";
const brand3 = "/logos/brand-3.png";
const brand4 = "/logos/brand-4.png";
const brand5 = "/logos/brand-5.png";
const brand6 = "/logos/brand-6.png";
const brand7 = "/logos/brand-7.png";
const brand8 = "/logos/brand-8.png";
const brand9 = "/logos/brand-9.png";
const brand10 = "/logos/brand-10.png";
const brand11 = "/logos/brand-11.png";
const brand12 = "/logos/brand-12.png";
const brand13 = "/logos/brand-13.png";

import logo from "@/assets/atza-dark-logo.png";

import { BsArrowRight } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgArrowLongRight } from "react-icons/cg";
import Head from "next/head";

const Home = () => {
  const services = [
    {
      title: "Video Studio",
      link: "video-studio",
      image: "/services/atza-graphic.jpg",
    },
    {
      title: "Content Writing & Management",
      link: "content-writing",
      image: "/services/video-editing.jpg",
    },
    {
      title: "Design & UI/UX",
      link: "design",
      image: "/services/atza-events.jpg",
    },
    {
      title: "Digital Branding",
      link: "digital-branding",
      image: "/services/atza-ui.jpg",
    },
  ];

  const clients = [
    // { logo: tataLogo, description: "" },
    // { logo: bigbasketLogo, description: "" },
    // { logo: nikeLogo, description: "" },
    // { logo: comLogo, description: "" },
    { logo: brand1, description: "" },
    { logo: brand2, description: "" },
    { logo: brand3, description: "" },
    { logo: brand4, description: "" },
    { logo: brand5, description: "" },
    { logo: brand6, description: "" },
    { logo: brand7, description: "" },
    { logo: brand8, description: "" },
    { logo: brand9, description: "" },
    { logo: brand10, description: "" },
    { logo: brand11, description: "" },
    { logo: brand12, description: "" },
    { logo: brand13, description: "" },
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

  const router = useRouter();

  return (
    <MainLayout classes={[styles.container]}>
      <Head>
        <title>Atza - A new age Media Agency</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <span>
            <Image src={logo} alt="logo" width={300} />
          </span>
          <h4>
            <strong>Quick and Quality Content for your Brand</strong>
          </h4>
          {/* <button>
            <span>
              Learn More about us &nbsp; <BsArrowRight />
            </span>
          </button> */}
        </div>
      </div>
      <div className={styles.stats}>
        {/* <div className={styles.heading}>
          <h2>Our Superstats</h2>
          <span></span>
        </div> */}
        <div className={styles.counters}>
          <div className={clsx(styles.clients, styles.counter)}>
            <span>
              {/* <img src={usersIcon} alt="clients" /> */}
              <FaUserAlt fontSize={30} />
            </span>
            <div>
              <h1>50+</h1>
              <p>Clients Served</p>
            </div>
          </div>
          <div className={clsx(styles.services, styles.counter)}>
            <span>
              {/* <img src={servicesIcon} alt="services" />
               */}
              <FiSettings fontSize={30} />
            </span>
            <div>
              <h1>5+</h1>
              <p>Services</p>
            </div>
          </div>
          <div className={clsx(styles.clients, styles.counter)}>
            <span>
              {/* <img src={usersIcon} alt="clients" /> */}
              <FaUserAlt fontSize={30} />
            </span>
            <div>
              <h1>50+</h1>
              <p>Super Brands Served</p>
            </div>
          </div>
          <div className={clsx(styles.services, styles.counter)}>
            <span>
              {/* <img src={servicesIcon} alt="services" />
               */}
              <FiSettings fontSize={30} />
            </span>
            <div>
              <h1>10M+</h1>
              <p>Impressions on our Impact Content</p>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.servicesContainer}>
        <h1>Here&apos;s how we add value to your Brand</h1>
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
                  onClick={() => router.push(`/services/${service.link}`)}
                >
                  <CustomImage src={service.image} alt={service.title} />
                  <div>
                    <h3>{service.title}</h3>
                    <CgArrowLongRight fontSize={20} />
                  </div>
                  <div className={styles.underline}></div>
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
        <p>
          The superbrands we and our sister organizations have helped create an
          impact
        </p>
      </div>
      <div className={styles.clientsSlider}>
        <Carousel className={styles.slider}>
          {clients.map((client, i) => (
            <div key={i} className={styles.client}>
              <CustomImage
                src={client.logo}
                alt={client.title}
                width={200}
                height={200}
              />
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
                <Image
                  src={testimonial.image}
                  className={styles.profile}
                  alt="profile"
                />
                <div className={styles.testimonialDescription}>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.position}</span>
                  <p>&quot;{testimonial.message}&quot;</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
