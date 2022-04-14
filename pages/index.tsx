import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Buildings,
  Calendar,
  GithubLogo,
  GitlabLogo,
  GraduationCap,
  LinkedinLogo,
  PhoneCall,
  WhatsappLogo,
} from "phosphor-react";

import skills from "../shared/skills.json";
import jobs from "../shared/jobs.json";
import styles from "../styles/Home.module.css";

import NavbarPrincipal from "../components/navbar/NavbarPrincipal";
import ChipSkill from "../components/ui/skills/ChipSkill";
import Step from "../components/ui/steps/Step";

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
            <GithubLogo height={24} width={24} />
            <GitlabLogo height={24} width={24} />
            <LinkedinLogo height={24} width={24} />
            <PhoneCall height={24} width={24} />
            <WhatsappLogo height={24} width={24} />
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
      </main>
    </>
  );
};

export default Home;
