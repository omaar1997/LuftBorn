import Card from "./Card";
import "../styles/cardList.scss";
import { useEffect, useState } from "react";

const CardsList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div className="mainContent">
        <div className="cardList">
          {cards.map((card) => (
            <Card key={card.id} cardDetails={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsList;
