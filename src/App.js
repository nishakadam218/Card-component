import "./styles.css";
import Card from "./card";
const data = [
  {
    id: "1",
    title: "I Am Nisha",
    para:
      "I am a full stack developer my skills are Reactjs ,javascript, html, css, bootstrap,material ui and so on..."
  },
  {
    id: "2",
    title: "I Am Nisha",
    para:
      "I am a full stack developer my skills are Reactjs ,javascript, html, css, bootstrap,material ui and so on..."
  },
  {
    id: "3",
    title: "I Am Nisha",
    para:
      "I am a full stack developer my skills are Reactjs ,javascript, html, css, bootstrap,material ui and so on..."
  },
  {
    id: "4",
    title: "I Am Nisha",
    para:
      "I am a full stack developer my skills are Reactjs ,javascript, html, css, bootstrap,material ui and so on..."
  },
  {
    id: "5",
    title: "I Am Nisha",
    para:
      "I am a full stack developer my skills are Reactjs ,javascript, html, css, bootstrap,material ui and so on..."
  },
  {
    id: "6",
    title: "I Am Nisha",
    para:
      "I am a full stack developer my skills are Reactjs ,javascript, html, css, bootstrap,material ui and so on..."
  }
];

export default function App() {
  return (
    <div className="card-container">
      <h1>Card Component</h1>
      <div className="App">
        {data.map((card) => {
          const { id, title, para } = card;
          return <Card id={id} title={title} para={para} />;
        })}
      </div>
    </div>
  );
}
