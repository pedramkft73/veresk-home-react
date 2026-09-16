import parse from 'html-react-parser';

const SectionTitle = ({ Title, SubTitle }) => {
    return (
        <div>
            <p className="section-sub-title">{parse(SubTitle)}</p>
            <h2 className="section-main-title">{parse(Title)}</h2>
        </div>
    );
};

export default SectionTitle;
