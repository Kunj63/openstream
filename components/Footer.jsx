/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Footer.module.css";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const open = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <p className={styles.credit}>
        Designed by{" "}
        <a
          href="https://teamopenstream.nicepage.io/"
          target="_blank"
          rel="noreferrer"
        >
          TEAM: ERROR 404
        </a>{" "}
      </p>
      <div className={styles.socials}>
        <span>
          <FaLinkedinIn
            className={styles.icon}
            onClick={() => open("https://www.linkedin.com/in/kunj-patel-959424244/")}
          />
          <FaLinkedinIn
            className={styles.icon}
            onClick={() => open("https://www.linkedin.com/in/erik-christian-64a041228/")}
          />
          <FaLinkedinIn
            className={styles.icon}
            onClick={() => open("https://www.linkedin.com/in/dhairya-parikh-8410b225b/")}
          />
          <FaLinkedinIn
            className={styles.icon}
            onClick={() => open("https://www.linkedin.com/in/patelmark6172/")}
          />
          
          
        </span>
        
      </div>
      <div className={styles.logo}>
        <img src="https://i.imgur.com/UhzOw1n.png" alt="logo" />
        <h2>Openstream</h2>
      </div>
    </div>
  );
}
