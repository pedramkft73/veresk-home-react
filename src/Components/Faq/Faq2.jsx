import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/faq.json';
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Faq2 = () => {

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

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="faq-area style-two" data-background="/assets/images/home-3/faq-bg.png">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="section-title text-left">
                            <SectionTitle
                                SubTitle="client review"
                                Title="Most Common <span> Question?</span>"
                            ></SectionTitle>
                        </div>
                        <div className="tab_container">
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
                    <div className="col-lg-6 col-md-12">
                        <div className="faq-thumb faq_thumb_area">
                            <img src="/assets/images/home-3/faq-thumb.png" alt="thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq2;