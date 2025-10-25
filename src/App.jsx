import "./styles/app.scss";
import CardsList from "./components/CardsList";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <div className="appContent">
        <ProfileCard />
        <CardsList />
      </div>
    </>
  );
}

export default App;
