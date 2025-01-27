import React from 'react';
import styles from './EmailContainer.module.css';
import { MdEmail } from "react-icons/md";

const EmailContainer = () => {
  return (
    <section className={styles.contactcontainerWrapper}>
    <div
      className={styles.contactcontainer}
      data-scroll-to="contactContainer"
    >
      <h3 className={styles.contactMe}>Contact Me</h3>
      <div className={styles.email}>
        <MdEmail className={styles.emailIcon}/>
        <div className={styles.hovercomponenttext}>
          <a href="mailto:juhani.manninen00@gmail.com" class={styles.emailLink}>juhani.manninen00@gmail.com</a>
        </div>
      </div>
    </div>
    </section>
  )
};

export default EmailContainer