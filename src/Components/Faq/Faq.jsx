import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/faq.json';
import { useEffect, useRef, useState } from "react";
import parse from 'html-react-parser';

const Faq = ({ variant = "default" }) => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
    const isEngineeringGuidance = variant === "engineering-guidance";
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);

    const EngineeringFaqData = [
      {
        title: 'What engineering services does Veresk provide?',
        desc: 'Veresk supports engineering design, calculations, technical coordination, digital engineering workflows and practical project delivery.'
      },
      {
        title: 'Can Veresk support both design and delivery?',
        desc: 'Yes. Support can extend from early calculations and concept development through coordination, implementation and technical review.'
      },
      {
        title: 'How do digital tools and AI fit into the engineering process?',
        desc: 'Digital and AI-assisted tools help streamline calculations, improve workflows and support faster, more consistent technical decisions.'
      },
      {
        title: 'Which engineering disciplines can be supported?',
        desc: 'The platform is being developed around building-services and multidisciplinary engineering workflows, including mechanical, electrical, hydraulic and related technical applications.'
      }
    ];

    const FaqContent = isEngineeringGuidance ? {
        img1:'/assets/images/engineering-guidance-team.jpg',
        eyebrow:'ENGINEERING GUIDANCE',
        leftTitle:'Engineering Support<br>When You <span>Need It</span>',
        Title:'Practical Answers to Common <span>Engineering Questions</span>',
        Content:'Clear, practical guidance across engineering design, digital tools, technical coordination and project delivery.'
      } : {
        img1:'/assets/images/faq1.png',
        eyebrow:'SOLUTEK COMPANY',
        leftTitle:'Keeping Your Business<br> Safe and <span>Available.</span>',
        Title:'A Comprehensive <span>Guide.</span>',
        Content:'Alternative innovation network environmental whiteboard pursue  for premier methods empowerment  go forward opportunities'
      };
    const faqItems = isEngineeringGuidance ? EngineeringFaqData : data;

    return (
            <div className={`faq-area${isEngineeringGuidance ? ' engineering-guidance-area' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title text-left">
                                <SectionTitle
                                    SubTitle={FaqContent.eyebrow}
                                    Title={FaqContent.leftTitle}
                                ></SectionTitle>
                            </div>
                            <div className="faq-thumb">
                                <img src={FaqContent.img1} alt={isEngineeringGuidance ? "Engineering guidance team" : "FAQ"} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="tab_container">
                                <div className="feq-content">
                                    <h3 className="faq-title">{parse(FaqContent.Title)}</h3>
                                    <p className="faq-description">{FaqContent.Content}</p>
                                </div>
                                <div id="tab1" className="tab_content">
                                    <ul className="accordion">
                                    {faqItems.map((item, index)=>(
                                        <li key={index} className={`cs_accordian ${index === openItemIndex ? "active" : "" }`}>
                                            <a onClick={() => handleItemClick(index)}><span>{item.title}</span></a>
                                            <p ref={accordionContentRef}>{item.desc}</p>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-shape">
                        <img src="/assets/images/faq2.png" alt="faq2" />
                    </div>
                    <div className="faq-shape2">
                        <img src="/assets/images/faq3.png" alt="faq2" />
                    </div>
                </div>
            </div>
    );
};

export default Faq;
