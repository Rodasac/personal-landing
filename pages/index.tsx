import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  PhoneCall,
  WhatsappLogo,
} from "phosphor-react";

import styles from "../styles/Home.module.css";

import NavbarPrincipal from "../components/navbar/NavbarPrincipal";

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
        <div className={styles.container}>
          <h1 className={styles.title}>
            Hi! I&apos;m Adolfo Bastardo, a FullStack and Apps Developer
          </h1>
        </div>
        <div className={styles.profile}>
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
        </div>
      </main>
    </>
  );
};

export default Home;
