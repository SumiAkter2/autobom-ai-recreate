import f1Img from "../../assets/Feature/f1.webp";
import f2Img from "../../assets/Feature/f2.webp";
import f3Img from "../../assets/Feature/f3.webp";
import f4Img from "../../assets/Feature/f4.webp";
import f5Img from "../../assets/Feature/f5.webp";
import f6Img from "../../assets/Feature/f6.webp";

import { BsFillClockFill } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdFindInPage } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";

const clock = <BsFillClockFill size="30px" />;
const dollar = <RiMoneyDollarBoxFill size="30px" />;
const travel = <MdFindInPage size="30px" />;
const quality = <MdHighQuality size="30px" />;
export const manageSpeedInfo = [
  {
    id: 1,
    img: clock,
    name: "Cut Lead Times",
    des: "Component IQ doesn't just find alternatives; it optimizes your BOM for cost- efficiency  and faster lead times. It's like having an entire team of experts who know the electronic component market inside out.",
    btn: "Contact",
  },
  {
    id: 2,
    img: dollar,
    name: " Slash component costs",
    des: "Once the analysis is complete, you'll receive a detailed report. It outlines the cost savings achieved, how much you can save per component, and the overall impact on your project's budget.",
    btn: "Learn more",
  },
  {
    id: 3,
    img: travel,
    name: " Find 1:1 alternatives",
    des: "The magic happens here. Component IQ, our AI engine, carefully matches each of your components with 1:1 alternatives that perfectly align with datasheet specifications.",
    btn: "Learn more",
  },
  {
    id: 4,
    img: quality,
    name: "Ensure higher quality",
    des: "Don't worry; we never compromises on quality. Component IQ ensures that every alternative component it suggests meets the highest quality and specification standards.",
    btn: "Learn more",
  },
];

export const featureInfo = [
  {
    id: 1,
    img: f1Img,
    title: "Autobom",
    para: "Design intelligently & get ahead of market shortages.",
    feature1: "1 Billion+ Components",
    feature2: "Deep Data for MPNs, AVLs",
    feature3: "Lifecycle Status & Forecasts",
    feature4: "10,000+ PCNs Tracked",
    feature5: "Cross Reference & Compare",
    feature6: "BOM Analysis & Reports",
    btn: "Learn more",
  },
  {
    id: 2,
    img: f2Img,
    title: "Compliance Manager",
    para: "",
    feature1: "Manage Documentation",
    feature2: "BOM level RoHS, REACH",
    feature3: "Collaboration Tools",
    feature4: "Download FMDs and COCs",
    feature5: "Export to PLM or ERP tools",
    feature6: "Monitor 105+ Regulations",
    btn: "Coming soon",
  },
  {
    id: 3,
    img: f3Img,
    title: "Supply Chain Watch",
    para: "",
    feature1: "30,000+ Manufacturing Sites",
    feature2: "Sub-Tier Relationships",
    feature3: "FAB, Factory, Assembly Sites",
    feature4: "Map Entire Supply Chain",
    feature5: "Real-time Event Monitoring",
    feature6: "Real-time Market Alerts",
    btn: "Coming soon",
  },
  {
    id: 4,
    img: f4Img,
    title: "Sub-Tier Intelligence",
    para: "Identify risky and banned sub-tier entities",
    feature1: "UFLPA Compliance",
    feature2: "Forced Labor Exposure",
    feature3: "Sub-tier supplier mapping",
    feature4: "Material Level Analysis",
    feature5: "Country Dependency Risk",
    feature6: "Alerts on New Banned Entities",
    btn: "Coming soon",
  },
  {
    id: 5,
    img: f5Img,
    title: "PCN Manager",
    para: "Manage & receive alerts on all your parts",
    feature1: "Manage all PCNs",
    feature2: "View PCN Documentation",
    feature3: "Deduplicate PCNs",
    feature4: "Create Alerts and Reports on PCNs",
    feature5: "Custom Internal Workflow",
    feature6: "PCNs by supplier",
    btn: "Coming soon",
  },
  {
    id: 6,
    img: f6Img,
    title: "Supplier Insights",
    para: "Build strong & secure strategic partnerships.",
    feature1: "150,000+ Suppliers",
    feature2: "Supplier Risk Analysis",
    feature3: "Supplier Compliance",
    feature4: "Complete Company Profiles",
    feature5: "Financials, Patents",
    feature6: "Alerts on Events, M&A",
    btn: "Coming soon",
  },
];
