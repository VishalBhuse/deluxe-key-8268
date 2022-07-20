import "./App.css";
import { Footer } from "./Component/Footer";
import { Home } from "./Component/Home";
import { Navbar } from "./Component/Navbar";
import { Navbarfirst } from "./Component/Navbarfirst";

function App() {
  return (
    <>
        <Navbarfirst />
        <Navbar />
        <Home />
        <Footer />
    </>
  );
}

export default App;
