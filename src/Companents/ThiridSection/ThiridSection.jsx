import React from 'react'
import styles from '../ThiridSection/ThiridSection.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ThiridSection = () => {
  return (
    <div>
          <div>
      <section className={styles.aboutMain}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <h1>
              Our <span>Practice Areas</span>
            </h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in.
            </p>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
            <button>learn more</button>
          </div>
          <div className={styles.aboutFinance}>
            <div className={styles.aboutFinanceOne}>
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={styles.aboutIcon}
                />
                <div>
                  <h2>Banking and Finance Law</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={styles.aboutIcon}
                />
                <div>
                  <h2>Banking and Finance Law</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={styles.aboutIcon}
                />
                <div>
                  <h2>Banking and Finance Law</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={styles.aboutIcon}
                />
                <div>
                  <h2>Banking and Finance Law</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="">More Practice Areas</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
 </div>
  );
};

export default ThiridSection
