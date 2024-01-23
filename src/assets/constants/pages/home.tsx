import HeaderSlideImg1 from '@/assets/images/home/headerSlide/slide1.svg';
import HeaderSlideImg2 from '@/assets/images/home/headerSlide/slide2.svg';
import HeaderSlideImg3 from '@/assets/images/home/headerSlide/slide3.svg';
import HeaderSlideImg4 from '@/assets/images/home/headerSlide/slide4.svg';
import HeaderSlideImg5 from '@/assets/images/home/headerSlide/slide5.svg';
import HeaderSlideImg6 from '@/assets/images/home/headerSlide/slide6.svg';

import ReviewerImage from '@/assets/images/home/reviewer.png';
import ServiceClubImg from '@/assets/images/home/partners/service-club.png';
import TrymataImg from '@/assets/images/home/partners/trymata.png';
import QuestionProImg from '@/assets/images/home/partners/questionPro.png';
import EverseImg from '@/assets/images/home/partners/everse.png';
import HotSpotz from '@/assets/images/home/partners/hot-spotz.png';

import StudiesSlideImg1 from '@/assets/images/home/slide/s1.png';
import StudiesSlideImg2 from '@/assets/images/home/slide/s2.png';
import StudiesSlideImg3 from '@/assets/images/home/slide/s3.png';
import StudiesSlideImg4 from '@/assets/images/home/slide/s4.png';

import IYAImg1 from '@/assets/images/home/individual.png';
import IYAImg2 from '@/assets/images/home/startupper.png';
import IYAImg3 from '@/assets/images/home/company.png';
import { StaticImageData } from 'next/image';

export const HEADER_SLIDE_DATA = [
  { id: 1, text: 'your MVP', image: <HeaderSlideImg1 /> },
  { id: 2, text: 'your custom software', image: <HeaderSlideImg2 /> },
  { id: 3, text: 'your AI-powered digital products', image: <HeaderSlideImg3 /> },
  { id: 4, text: 'your SaaS products', image: <HeaderSlideImg4 /> },
  { id: 5, text: 'your web and mobile apps', image: <HeaderSlideImg5 /> },
  { id: 6, text: 'your web and mobile apps', image: <HeaderSlideImg6 /> },
];

export type TestimonialCardType = {
  id: number;
  reviewer: string;
  imageSrc: StaticImageData;
  position: string;
  review: string;
  country: string;
};

export const TESTIMONIALS_DATA: TestimonialCardType[] = [
  {
    id: 1,
    reviewer: 'Ryan Mitchell',
    country: 'USA',
    imageSrc: ReviewerImage,
    position: 'Founder, Ryse Strategies',
    review:
      '“It is impressive how BeeWeb team makes it personal. They often would come up with ideas and share before implementation, so no extra work was done. Besides, the teams communication is flawless. We love working with them.”',
  },
  {
    id: 2,
    reviewer: 'Ryan Mitchell',
    country: 'USA',
    imageSrc: ReviewerImage,
    position: 'Founder, Ryse Strategies',
    review:
      '“It is impressive how BeeWeb team makes it personal. They often would come up with ideas and share before implementation, so no extra work was done. Besides, the teams communication is flawless. We love working with them.”',
  },
  {
    id: 3,
    reviewer: 'Ryan Mitchell',
    country: 'USA',
    imageSrc: ReviewerImage,
    position: 'Founder, Ryse Strategies',
    review:
      '“It is impressive how BeeWeb team makes it personal. They often would come up with ideas and share before implementation, so no extra work was done. Besides, the teams communication is flawless. We love working with them.”',
  },
  {
    id: 4,
    reviewer: 'Ryan Mitchell',
    country: 'USA',
    imageSrc: ReviewerImage,
    position: 'Founder, Ryse Strategies',
    review:
      '“It is impressive how BeeWeb team makes it personal. They often would come up with ideas and share before implementation, so no extra work was done. Besides, the teams communication is flawless. We love working with them.”',
  },
];

export const PARTNERS_DATA_EXAMPLE = [
  { id: 1, name: 'service club', image: ServiceClubImg },
  { id: 2, name: 'trymata', image: TrymataImg },
  { id: 3, name: 'question pro', image: QuestionProImg },
  { id: 4, name: 'everse', image: EverseImg },
  { id: 5, name: 'hot spotz', image: HotSpotz },
  { id: 6, name: 'service club', image: ServiceClubImg },
  { id: 7, name: 'trymata', image: TrymataImg },
];

export const STUDIES_SECTION_DESCRIPTION =
  'With every challenge being unique, our case studies provide evidence of the agnostic, professional and agile approach provided by BeeWeb. Here you can explore some of the projects we have done.';

export const STUDIES_SLIDER_DATA = [
  {
    id: 1,
    title: 'Fitness',
    imageSrc: StudiesSlideImg1,
  },
  {
    id: 2,
    title: 'Startup',
    imageSrc: StudiesSlideImg2,
  },
  {
    id: 3,
    title: 'Marketplace',
    imageSrc: StudiesSlideImg3,
  },
  {
    id: 4,
    title: 'Real Estate',
    imageSrc: StudiesSlideImg4,
  },
  {
    id: 5,
    title: 'Marketplace',
    imageSrc: StudiesSlideImg1,
  },
  {
    id: 6,
    title: 'Real Estate',
    imageSrc: StudiesSlideImg2,
  },
];

export const IF_YOU_ARE_LIST = [
  {
    id: 1,
    text: (
      <p>
        an <span>individual</span> who has a great startup idea and want to realize it
      </p>
    ),
    imageSrc: IYAImg1,
  },
  {
    id: 2,
    text: (
      <p>
        a <span>startupper</span> who has received funding and need help to build the product
      </p>
    ),
    imageSrc: IYAImg2,
  },
  {
    id: 3,
    text: (
      <p>
        an established <span>company</span> who wants to launch a new product
      </p>
    ),
    imageSrc: IYAImg3,
  },
];
