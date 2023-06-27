"use client";

const HighlightItem = (props) => {
  const { id, title, description, icon } = props;

  return (
    <div className="card text-center py-4 px-4">
      <div>
        <div>{icon}</div>
        <h2 className="uppercase">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default HighlightItem;
