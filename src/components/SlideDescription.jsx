import LinkIcon from "@mui/icons-material/Link";

function SlideDescription(props) {
  return (
    <div className="slide-description">
      <h1 className="slide-title">
        {props.title}{" "}
        <a href={props.link} className="project-link">
          <LinkIcon className="project-link-icon" />
        </a>
      </h1>
      <p>{props.info}</p>
    </div>
  );
}

export default SlideDescription;
