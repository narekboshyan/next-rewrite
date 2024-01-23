import { memo } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Input from '../Input/Input';
import Button from '../Button/Button';
import LocationIcon from '@/assets/icons/location.svg';
import MailIcon from '@/assets/icons/mail.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import LinkedinIcon from '@/assets/icons/linkedIn.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.info_panel}>
        <div className={styles.info}>
          <div className={[styles.info_item, styles.location].join(' ')}>
            <span className={styles.info_item_icon}>
              <LocationIcon />
            </span>
            <Link
              href={
                'https://www.google.com/maps/place/BeeWeb/@40.1516978,44.4944499,21z/data=!4m6!3m5!1s0x406abdae0dc8ac95:0x92d032df58374914!8m2!3d40.1517205!4d44.4945272!16s%2Fg%2F11gy9vth0t?entry=ttu'
              }
              target="_blank">
              28 Garegin Nzhdeh street,
              <br />
              Yerevan, Armenia.
            </Link>
          </div>
          <div className={styles.info_item}>
            <span className={styles.info_item_icon}>
              <MailIcon />
            </span>
            <Link href={'mailto:info@beewebsystems.com'}>info@beewebsystems.com</Link>
          </div>

          <div className={styles.info_item}>
            <span className={styles.info_item_icon}>
              <PhoneIcon />
            </span>
            <div className={styles.info_item_phone}>
              <Link href={'tel:+(374)43 28 71 05'}>+(374) 43 28 71 05</Link>
              <Link href={'tel:+(374)43 38 83 73'}>+(374) 43 28 71 05</Link>
            </div>
          </div>
        </div>
        <div className={styles.subscribe}>
          <h4>SUBSCRIBE</h4>
          <p>Subscribe to BeeWeb&apos;s blog and get our latest news right in your inbox.</p>
          <Input
            placeholder="Your e-mail"
            wrapperClassName={styles.subscribe_input}
            RightElement={<Button className={styles.subscribe_button}>Subscribe</Button>}
          />
        </div>

        <div className={styles.social}>
          <h4>FOLLOW US</h4>
          <div className={styles.social_items}>
            <Link className={styles.social_item} href="https://www.facebook.com/BeeWebLLC">
              <FacebookIcon />
            </Link>
            <Link
              className={styles.social_item}
              href="https://www.linkedin.com/company/bee-web-systems-llc">
              <LinkedinIcon />
            </Link>
            <Link className={styles.social_item} href="https://twitter.com/beewebsystems">
              <TwitterIcon />
            </Link>
            <Link className={styles.social_item} href="https://www.instagram.com/beeweb_official/">
              <InstagramIcon />
            </Link>
          </div>
        </div>
        <div className={styles.clutch} />
      </section>
      <p className={styles.copyright}>Copyright © 2023 by BeeWeb. All Rights Reserved.</p>
    </footer>
  );
};

export default memo(Footer);
