import "./App.css";
import { Footer } from "./Component/Footer";
import { Navbar } from "./Component/Navbar";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
