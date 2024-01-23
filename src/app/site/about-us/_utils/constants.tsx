import OurValuesImage from '@/assets/images/about/pic1.png';
import OurCultureImage from '@/assets/images/about/pic2.png';
import OurGoalImage from '@/assets/images/about/pic3.png';
import { StaticImageData } from 'next/image';

export type aboutInfoListType = {
  id: number;
  title: string;
  text: string;
  textAlign: 'left' | 'right';
  image: StaticImageData;
};

export const INFO_LIST: aboutInfoListType[] = [
  {
    id: 1,
    title: 'OUR GOAL',
    text: 'Our goal is to meet our partner’s business needs through feature-rich, secure and scalable websites/applications. We don’t only focus on delivering the project but also to exchange business value and build long-term collaborations.',
    textAlign: 'right',
    image: OurGoalImage,
  },
  {
    id: 2,
    title: 'OUR CULTURE',
    text: 'Our team of high-performing professionals provides effective solutions in web design and development focusing on new technologies and high quality. From consulting with clients to managing all phases of projects and coordinating with cross-functional team members, our team can make this happen.',
    textAlign: 'left',
    image: OurCultureImage,
  },
  {
    id: 3,
    title: 'OUR VALUES',
    text: 'Our top priority is concentration on delivery and driving the best result. At BeeWeb, our employees also share these beliefs. So just like a bee, we work diligently and try to do our best to satisfy our clients. We appreciate good, long-term relationships with clients, we serve an individual approach to every client and project.',
    textAlign: 'right',
    image: OurValuesImage,
  },
];

export const ABOUT_HEADER_TEXT = (
  <p>
    <span>BeeWeb</span> is a software development company specialized in MVP Development. We aim to
    create the best possible initial version of your product to validate the product idea in the
    market. We try to find the most effective solution for our client&apos;s problems. Although we
    appreciate all the efforts that our employees make to achieve the company&apos;s goals. They
    contribute effectively towards the successful functioning of our company. Being located in
    Yerevan, Armenia we are developing projects for customers from all around the globe.
  </p>
);
