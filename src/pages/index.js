import styles from "../styles/Home.module.scss";
import MainLayout from "@/layouts/MainLayout";
import clsx from "clsx";
import { Grid } from "@mui/material";
import project1 from "@/assets/atza-graphic.jpg";
import project2 from "@/assets/video-editing.jpg";
import project3 from "@/assets/atza-events.jpg";
import project4 from "@/assets/atza-ui.jpg";
import Image from "next/image";
import { Carousel } from "@/components";
import { useRouter } from "next/router";
import { FaUserAlt } from "react-icons/fa";

import nikeLogo from "@/assets/logos/nike-logo.png";

import brand1 from "@/assets/logos/brand-1.png";
import brand2 from "@/assets/logos/brand-2.png";
import brand3 from "@/assets/logos/brand-3.png";
import brand4 from "@/assets/logos/brand-4.png";
import brand5 from "@/assets/logos/brand-5.png";
import brand6 from "@/assets/logos/brand-6.png";
import brand7 from "@/assets/logos/brand-7.png";
import brand8 from "@/assets/logos/brand-8.png";
import brand9 from "@/assets/logos/brand-9.png";
import brand10 from "@/assets/logos/brand-10.png";
import brand11 from "@/assets/logos/brand-11.png";
import brand12 from "@/assets/logos/brand-12.png";
import brand13 from "@/assets/logos/brand-13.png";

import logo from "@/assets/atza-dark-logo.png";

import { BsArrowRight } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgArrowLongRight } from "react-icons/cg";
import Head from "next/head";

const Home = () => {
  const services = [
    {
      title: "Video Production",
      link: "video-studio",
      image: project1,
    },
    {
      title: "Content Writing",
      link: "content-writing",
      image: project2,
    },
    // {
    //   title: "Design & UI/UX",
    //   link: "design",
    //   image: project3,
    // },
    {
      title: "Digital Brand Management",
      link: "digital-branding",
      image: project4,
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
      name: "Aorin Shariyari",
      image: nikeLogo,
      position: "Marketing, Max Healthcare",
      message:
        "We at Max Healthcare have been working with Lakshay & his team for a long. They bring in innovative concepts of impact content, shoot and deliver high-quality videos, work on tighter deadlines without compromising on any aspect and are very professional in the services they deliver.",
    },
    {
      name: "Ankit Luthra",
      image: nikeLogo,
      position: "Founder, Ficus Plus",
      message:
        "They are real professionals, and I must say, handles pressure situation well. ATZA worked on two of my projects and delivered the content well on time.",
    },
    {
      name: "Aditya Bose",
      image: nikeLogo,
      position: "CEO, Probano",
      message:
        "I have had a wonderful experience working with Team ATZA. Their team is very professional, knows their job, and doesn't need many revisions to deliver the final product. Their rates are also affordable, and quality is of the highest order. I'd always recommend them for any content writing, video shooting, editing, and digital marketing work you have.",
    },
    {
      name: "Pavlin Daskalov",
      image: nikeLogo,
      position: "Marketing, OLX Europe",
      message:
        "Lakshay is a true professional and very easy to communicate with. He can take on any challenge and show amazing results. The quality of his work is impeccable.",
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
        <h1>
          Welcome to the world of creative and integrated digital solutions!
        </h1>
        <h4>
          Our fusion of extravagant content and video production services will
          help your business grow to greater heights.
        </h4>
        <div className={styles.services}>
          <Grid container>
            {services.map((service, i) => (
              <Grid item key={service.title} md={4} sm={6} xs={12}>
                <article
                  key={i}
                  className={styles.service}
                  onClick={() => router.push(`/services/${service.link}`)}
                >
                  <Image src={service.image} alt={service.title} />
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
        <h1>Life Before and Ahead With Our Clients</h1>
        <p>
          We at ATZA, take pride in working with a network of clients across the
          globe, impacting businesses for good.
        </p>
      </div>
      <div className={styles.clientsSlider}>
        <Carousel className={styles.slider}>
          {clients.map((client, i) => (
            <div key={i} className={styles.client}>
              <Image src={client.logo} alt={client.title} />
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
