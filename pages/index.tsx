import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Buildings,
  Calendar,
  GithubLogo,
  GitlabLogo,
  GraduationCap,
  Heart,
  LinkedinLogo,
  PhoneCall,
  WhatsappLogo,
} from "phosphor-react";

import data from "../shared/personal-data.json";
import skills from "../shared/skills.json";
import jobs from "../shared/jobs.json";
import itemCases from "../shared/personal-projects.json";
import styles from "../styles/Home.module.css";

import NavbarPrincipal from "../components/navbar/NavbarPrincipal";
import ChipSkill from "../components/ui/skills/ChipSkill";
import Step from "../components/ui/steps/Step";
import ItemCase from "../components/ui/item-case/ItemCase";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adolfo Bastardo Landing Page</title>
        <meta name="description" content="Adolfo's Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <video className={styles.video} autoPlay loop muted playsInline>
          <source src="/assets/videos/lovecoding.mp4" type="video/mp4" />
        </video>
        <NavbarPrincipal />
        <header className={styles.section}>
          <h1 className={styles.title}>
            Hi! I&apos;m Adolfo Bastardo, a FullStack and Apps Developer
          </h1>
        </header>
        <section className={styles.profile}>
          <div className={styles.imageProfile}>
            <Image
              src="https://picsum.photos/300/300.webp"
              alt="Profile Photo"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={styles.social}>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <GithubLogo height={24} width={24} />
            </a>
            <a
              href={data.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <GitlabLogo height={24} width={24} />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <LinkedinLogo height={24} width={24} />
            </a>
            <a
              href={`tel:+${data.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <PhoneCall height={24} width={24} />
            </a>
            <a
              href={`https://wa.me/${data.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <WhatsappLogo height={24} width={24} />
            </a>
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Resume</h1>
          <p>
            I live in San Felipe - Venezuela, I&apos;m 27 years old and I like
            plastic arts and choral music, I&apos;m a software developer skilled
            in FullStack and Apps development using tools and high-level
            technologies like Laravel, Wordpress, Python, Angular and ReactJS, I
            have experience in the deploy and develop of{" "}
            <span className="underline">Odoo based platforms*</span>.
          </p>
          <p className={styles.resumeSmall}>
            *I worked with Odoo 6 to 12 versions.
          </p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Skills</h1>
          <div className={styles.skills}>
            {skills.map(({ color, skill }) => (
              <ChipSkill key={skill} skill={skill} color={color} />
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Work &amp; Experience</h1>
          <div className={styles.steps}>
            {jobs.map(({ indicator, title, location, date, description }) => (
              <Step
                key={title}
                indicator={indicator}
                title={title}
                location={location}
                date={date}
                description={description}
              />
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Education</h1>
          <div className={styles.education}>
            <GraduationCap height={19} width={16} />
            <h4>Computing Engineer</h4>
            <Buildings height={19} width={16} />
            <p>Misión Sucre, San Felipe, Venezuela</p>
            <Calendar height={19} width={16} />
            <p>2014 - Paused Since 2016</p>
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Personal Projects</h1>
          {itemCases.map(({ imageUrl, title, skills, url }) => (
            <ItemCase
              key={title}
              imageUrl={imageUrl}
              title={title}
              skills={skills}
              url={url}
            />
          ))}
        </section>
        <section className={styles.section}>
          <h3>
            And... this website! Designed in Framer and coded in Next.js
            following the JAMStack software design.
          </h3>
          <h3>More projects in many languages coming soon.</h3>
          <a
            className={styles.contactMe}
            href={`https://wa.me/${data.phone}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            Do you wanna contact me?
            <WhatsappLogo height={27} width={27} alignmentBaseline="central" />
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerMessage}>
          <h3>Made with </h3> <Heart width={17} height={17} color="#FF4D9A" />{" "}
          <h3> from Venezuela</h3>
        </div>
        <p>
          <strong>Copyright ©️ 2022</strong>
        </p>
      </footer>
    </>
  );
};

export default Home;
