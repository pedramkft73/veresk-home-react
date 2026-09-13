import parse from 'html-react-parser';

const SectionTitle = ({Title,SubTitle}) => {
    return (
        <div>
          <h5 className="section-sub-title">{parse(SubTitle)}</h5>
					<h1 className="section-main-title">{parse(Title)}</h1>        
        </div>
    );
};

export default SectionTitle;