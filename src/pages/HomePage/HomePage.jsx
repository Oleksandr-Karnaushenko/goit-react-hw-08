import { FaGithub, FaHtml5, FaCss3, FaReact, FaLinkedin } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <h1>The project was implemented using the following technologies:</h1>
      <ul className={styles.list}>
        <li>
          <FaHtml5 color="rgb(228, 77, 38)" />
          <p>Html 5</p>
        </li>
        <li>
          <FaCss3 color="rgb(38, 77, 228)" />
          <p>Css</p>
        </li>
        <li>
          <FaReact color="rgb(0, 216, 255)" />
          <p>React</p>
        </li>
        <li>
          <SiRedux color="rgb(118, 74, 188)" />
          <p>Redux</p>
        </li>
      </ul>
      <h3>More information:</h3>
      <div className={styles.info}>
        <ul className={styles.infoList}>
          <li>
            <a href="https://github.com/Oleksandr-Karnaushenko" target="_blank">
              <FaGithub />
              Other projects
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/oleksandr-karnaushenko/"
              target="_blank"
            >
              <FaLinkedin color="rgb(9, 102, 195)" />
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
