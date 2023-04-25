import "./app.scss";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import myData from "./data";

function App() {
  return (
    <div>
      <Header />
      <Card data={myData} />
      <Footer />
    </div>
  );
}

export default App;
