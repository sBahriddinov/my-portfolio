//  icons
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineDribbble,
  AiOutlineLayout,
  AiOutlineSetting,
  AiOutlineTag,
  AiOutlineMail,
} from 'react-icons/ai';
import {FiMapPin, FiTool } from 'react-icons/fi'

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.png';
import Project3 from './assets/img/projects/p3.png';
import Project4 from './assets/img/projects/p4.png';
import Project5 from './assets/img/projects/p5.png';
import Project6 from './assets/img/projects/p6.png';
import Project7 from './assets/img/projects/p7.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.jpg';
import TestiImage2 from './assets/img/testimonials/testimonial-2.jpg';
import TestiImage3 from './assets/img/testimonials/testimonial-3.jpg';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [

  {
    icon: <AiOutlineInstagram />,
    href: 'https://www.instagram.com/_sammeee/',
    target: '_blank',
  },
  {
    icon: <AiOutlineGithub />,
    href: 'https://github.com/sBahriddinov',
    target: '_blank',
  },
  {
    icon: <AiOutlineDribbble />,
    href: 'https://dribbble.com/bakhriddinov',
    target: '_blank',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Kun.uz',
    category: 'web development',
    github: 'https://github.com/sBahriddinov/Kun.uz',
    demo: 'https://kun-uz1.netlify.app/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Ijodiy ish',
    category: 'web development',
    github: 'https://github.com/sBahriddinov/Ijodiy',
    demo: 'https://ijodiy.netlify.app/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Resgistration',
    category: 'wev development',
    github: 'https://github.com/sBahriddinov/Registration',
    demo: 'https://registration-4.netlify.app/',
  },
  {
    id: '4',
    image: Project4,
    name: 'Portfolio',
    category: 'branding',
    github: 'https://github.com/sBahriddinov/Portfolio',
    demo: 'https://portfolio-project5.netlify.app/',
  },
  {
    id: '5',
    image: Project5,
    name: 'Travel',
    category: 'web development',
    github: 'https://github.com/sBahriddinov/Travel',
    demo: 'https://travel6.netlify.app/',
  },
  {
    id: '6',
    image: Project6,
    name: 'Polar',
    category: 'Design',
    github: 'https://github.com/sBahriddinov/Polar',
    demo: 'https://polar7.netlify.app/',
  },
  {
    id: '7',
    image: Project7,
    name: 'Pixer',
    category: 'branding',
    github: 'https://github.com/sBahriddinov/Pixer',
    demo: 'https://pixer6.netlify.app/',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <AiOutlineLayout />,
    name: 'Web Design',
    description:
      "Men sizga o'ziga olgan web dizayn sohasidagi bilimlarim orqali sizning web saytingizni dizaynini qilib beraman albatta qo'limdan kelganicha",
  },
  {
    icon: <AiOutlineSetting />,
    name: 'Web Development',
    description:
      "Men sizga web sayt dizayningiz orqali endi dasturga aylantiraman ya'ni web saytga va internetga joylayman va mijozlaringizni oshishiga o'z hisamni qo'shaman.",
  },
  {
    icon: <FiTool />,
    name: 'Branding',
    description:
      "Men sizga o'z brandingizni yaratishga va uni yaxshi natijalarga ob chiqishga yordamlasha olaman.",
  },
  {
    icon: <AiOutlineTag />,
    name: 'SEO',
    description:
      "Men sizga web saytlarni qidiruv va uni yaxshi natiada chiqishiga ham javob berishim mumkun albatta bor bilimim orqali va saytlarni optimallashitishga ham yordamlashishim mumkun.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Valiyev Biloldin bu mening eng yaqin do'stim va ham kasbim u ham frontend dasturchi bo'lib ishlaydi lekin hozir ingiliz tilini chuqur o'rganyapti va o'z karerasini Amerikada davom ettirishga harkat qilyapti",
    authorName: 'Valiyev Biloldin',
    authorPosition: 'Project Manager, Web developer ( Frontend )',
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Muhammedjonova Odinaxon bu mening opam ham maslahatchim chunki jamoani qande boshqarishni o'rgatadi va smm bilan shug'ulanadi 1 yillik tajribaga ham ega.",
    authorName: 'Muhammedjonova Odina',
    authorPosition: 'SMM, Marketing',
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Nabiyev Otabek bu video contentlar olishga qiziqadi va turli xil qiziqarli video yasashga qiziqadi.",
    authorName: 'Nabiyev Otabek',
    authorPosition: 'Mobile Graph, Photograph',
  },
];

// contact
export const contact = [
  {
    icon: <AiOutlineMail />,
    title: 'Savolingiz bormi?',
    subtitle: 'Men sizga yordam beraman',
    description: 'Email me at baxriddinovsamandar110@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: "Farg'ona viloyati Bag'dod tumani",
  },
];
