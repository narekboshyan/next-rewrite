'use client'
import styles from './index.module.scss';
import Image from 'next/image';
import clientSideImage from '@/assets/images/services/clientside.png';
import serverSideImage from '@/assets/images/services/serverside.png';
import clientSideBgImage from '@/assets/images/services/clientsideBg.png';
import serverSideBgImage from '@/assets/images/services/serversideBg.png';
import databaseImage from '@/assets/images/services/database.png';
import cloudImage from '@/assets/images/services/cloud.png';
import ScrollAnimation from '@/components/ScrollAnimation';

const Technologies = () => {
  return <section className={styles.wrapper}>
    <h2>TECHNOLOGIES</h2>
    <div className={styles.container}>
      <ScrollAnimation threshold={0.5}>

      <article className={styles.article}>
        <h3>Client-Side Programming</h3>
        <span>We believe that the key success to your app depends on its responsive attitude and interactive UI/UX. Tailored to your expectations our team creates designs that delight customers and drive them to spend a notable time over it. We aim to make our apps simple and functional to provide enough information for users by the gorgeous interface design.</span>
        <Image className={styles.img} src={clientSideImage}
               alt="Javascript, React, Redux, Angular, JQuery, HTML5, CSS3, Sass" />
        <Image className={styles.bg} src={clientSideBgImage} alt="" aria-hidden={true} />
      </article>
      </ScrollAnimation>
      <ScrollAnimation threshold={0.5}>

      <article className={`${styles.article} ${styles.right}`}>
        <h3>Server-Side Programming</h3>
        <span>To create the logic of websites and applications we offer different server-side programming languages depending on the mix of your site’s requirements. Our development team delivers strong and reliable backends for web & mobile applications. To shape the most effective and efficient solution for architecting the technology we strongly collaborate with our customers and advise them the best suitable technology stack.</span>
        <Image className={styles.img} src={serverSideImage}
               alt="Node.Js, Java, Spring, Python Django, PHP, Laravel" />
        <Image className={styles.bg} src={serverSideBgImage} alt="" aria-hidden={true} />
      </article>
      </ScrollAnimation>
      <ScrollAnimation threshold={0.5}>

      <article className={styles.article}>
        <h3>Database Management</h3>
        <span>When it comes to storing data, there can’t be a definite solution, as every application is unique. Before deciding where to store the data, we understand the amount and type of the data, consult with our clients and suggest the most appropriate solution to them. Our experienced team deals with different Database Management Systems, BI solutions, NoSQL databases and queueing systems.</span>
        <Image className={styles.img} src={clientSideImage}
               alt="Javascript, React, Redux, Angular, JQuery, HTML5, CSS3, Sass" />
        <Image className={styles.bg} src={databaseImage} alt="" aria-hidden={true} />
      </article>
      </ScrollAnimation>
      <ScrollAnimation threshold={0.5}>

      <article className={`${styles.article} ${styles.right} ${styles.bottom}`}>
        <h3>Cloud Network Infrastructure</h3>
        <span>{`Adopting cloud computing isn’t always easy, though it saves money and increases flexibility. At BeeWeb, we value the importance of being well familiar with different cloud services and deployment models so that we can determine which one meets each client's needs and requirements. That’s why we have built a high-performing DevOps engineering team, which is responsible for everything connected to the cloud infrastructure management.`}</span>
        <Image className={styles.img} src={serverSideImage}
               alt="Node.Js, Java, Spring, Python Django, PHP, Laravel" />
        <Image className={styles.bg} src={cloudImage} alt="" aria-hidden={true} />
      </article>
      </ScrollAnimation>
    </div>
  </section>;
};

export default Technologies;