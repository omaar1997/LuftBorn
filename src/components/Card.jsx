import "../styles/card.scss";

const colors = [
  "#FF8B64",
  "#55C2E6",
  "#FF5E7D",
  "#7335D2",
  "#F1C75B",
  "#4BCF82",
];

const Card = ({ cardDetails }) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <>
      <div className="cardContainer">
        <div
          className="secondaryCard"
          style={{ backgroundColor: randomColor }}
        />
        <div className="cardBody">
          <div className="cardHeader title">
            <span>{cardDetails.category}</span>
            <button className="menu-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="smallScreen">
            <div className="price">{cardDetails.price}$</div>
            <div className="cardContent">
              <div className="description">{cardDetails.title}</div>
              <div className="count">
                InStore <br /> {cardDetails.rating.count}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
