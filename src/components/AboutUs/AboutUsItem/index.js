const AboutUsItem = (props) => {
  return (
    <div className="d-flex flex-column AboutUsItem">
      <span className="text-uppercase text-large alt-font font-weight-700 text-black display-block mb-2">
        {props.title}
      </span>
      <div className="text-medium alt-font medium-gray-text">{props.desc}</div>
      <div className="AboutUsItem__separator"></div>
    </div>
  );
};

export default AboutUsItem;
