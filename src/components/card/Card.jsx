import "./card.scss";

//! You can use in "return" (react jsx area) only "map" loop or "ternary" condition.
const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="cont">
      {data.map(({ name, job, img, comment, id }) => {
        // Removed the unnecessary nested block.
        // const {name, job, img, comment} = i
        // That "return" below belongs to "map"
        return (
          <div className="crd" key={id}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="person" />
            <div className="btn-cont">
              <button className="btn-cont-small">Small</button>
              <button className="btn-cont--large">Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
