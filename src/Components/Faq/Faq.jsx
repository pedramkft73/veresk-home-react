import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/faq.json';
import { useEffect, useRef, useState } from "react";
import parse from 'html-react-parser';

const Faq = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
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

    const FaqContent = {
        img1:'/assets/images/faq1.png',
        Title:'A Comprehensive <span>Guide.</span>',
        Content:'Alternative innovation network environmental whiteboard pursue  for premier methods empowerment  go forward opportunities'
      }

    return (
            <div className="faq-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title text-left">
                                <SectionTitle
                                    SubTitle="SOLUTEK COMPANY"
                                    Title="Keeping Your Business<br> Safe and <span>Available.</span>"
                                ></SectionTitle>
                            </div>
                            <div className="faq-thumb">
                                <img src={FaqContent.img1} alt="faq1" />
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
                                    {data.map((item, index)=>(
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