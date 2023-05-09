import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, repoLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        ></a>
      </div>
    </Col>
  );
};