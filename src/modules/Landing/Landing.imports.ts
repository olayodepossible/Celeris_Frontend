import analysis from "../../assets/images/analysis.png";
import company1 from "../../assets/logos/company1.svg";
import company2 from "../../assets/logos/company2.svg";
import company3 from "../../assets/logos/company3.svg";
import company4 from "../../assets/logos/company4.svg";
import company5 from "../../assets/logos/company5.svg";
import report from "../../assets/images/report.png";
import bigData from "../../assets/images/big-data.png";
import turnAround from "../../assets/images/turnaround.png";
import finance2 from "../../assets/images/finance2.png";
import secure from "../../assets/images/secure.png";
import expansion from "../../assets/images/expansion.png";
import lowfee from "../../assets/images/lowfee.png";
import fast from "../../assets/images/fast.png";
import encryption from "../../assets/images/encryption.png";
import explore from "../../assets/images/explore.png";
import about from "../../assets/images/about.svg";
import connect from "../../assets/images/connect.png";

export interface ICompaniesProps {
  icon: string;
  name: string;
}
export interface ISlider extends ICompaniesProps {
  comment: string;
  role: string;
  company: string;
}
export const companies: ICompaniesProps[] = [
  {
    icon: company1,
    name: "Company Name",
  },
  {
    icon: company2,
    name: "Company Name",
  },
  {
    icon: company3,
    name: "Company Name",
  },
  {
    icon: company4,
    name: "Company Name",
  },
  {
    icon: company5,
    name: "Company Name",
  },
];
export const sliderItems: ISlider[] = [
  {
    icon: company1,
    name: "John carter",
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
    role: "CEO",
    company: "Company",
  },
  {
    icon: company2,
    name: "John carter",
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
    role: "CEO",
    company: "Company",
  },
  {
    icon: company3,
    name: "John carter",
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
    role: "CEO",
    company: "Company",
  },
  {
    icon: company4,
    name: "John carter",
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
    role: "CEO",
    company: "Company",
  },
  {
    icon: company5,
    name: "John carter",
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
    role: "CEO",
    company: "Company",
  },
];
export const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default {
  analysis,
  company1,
  company2,
  company3,
  company4,
  company5,
  report,
  explore,
  bigData,
  turnAround,
  finance2,
  secure,
  expansion,
  lowfee,
  fast,
  encryption,
  about,
  connect,
};
