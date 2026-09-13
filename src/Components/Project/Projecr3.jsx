import { useState } from 'react';
import data from '../../Data/project3.json';
import { Link } from 'react-router-dom';

const Projecr3 = () => {

    const categoryMenu = [
        {
          title: 'Marketing',
          category: 'Marketing',
        },
        {
          title: 'Software',
          category: 'Software',
        },
        {
          title: 'Technology',
          category: 'Technology',
        },
        {
          title: 'Helpdesk',
          category: 'Helpdesk',
        },
      ];

      const [active, setActive] = useState('all');

    return (
        <div className="case-study-area project-main-area">
		<div className="container">
			<div className="row case-study-bg">
				<div className="col-lg-12 col-sm-12">
					<div className="case_study_nav">
						<div className="case_study_menu">
							<ul className="menu-filtering">
								<li className={active === 'all' ? 'active' : ''} onClick={() => setActive('all')}>SEE All</li>
                                {categoryMenu.map((item, index) => (
								<li onClick={() => setActive(item.category)} className={active === item.category ? 'active' : ''} key={index}>   
                                {item.title}
                              </li>
                            ))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row image_load">
            {data.map((item, index)=>(
				<div
                className={`col-lg-6 col-sm-6 project-grid-area grid-item ${ active === 'all' ? '' : !(active === item.category) ? 'd-none' : '' }`}
                key={index}                
                >
					<div className="case-study-single-box">
						<div className="case-study-thumb">
							<img src={item.img} alt="thumb" />
						</div>
						<div className="case-study-content1">
							<div className="case-study-title">
								<h5>{item.title}</h5>
								<h3><Link to="/project/project-details">{item.category}</Link></h3>
							</div>
							<div className="case-study-icon">
                            <Link to="/project/project-details"><i className="bi bi-arrow-right"></i></Link>
							</div>
						</div>
					</div>
				</div>
                ))}
			</div>
		</div>
	</div>
    );
};

export default Projecr3;