import "./card.css";
function Card(props) {
  return (
    <div>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  );
}
export default Card;
