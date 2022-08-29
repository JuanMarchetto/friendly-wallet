const ContactSelector = ({img, url}) => (
  <div className="mx-2 my-2  ">
    <a href={url}>
      <img
        className="rounded-full w-28"
        src={img}
        alt=""
      />
    </a>
  </div>
);

export default ContactSelector
