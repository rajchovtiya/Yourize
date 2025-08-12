import ScrollToTop from "./components/ScrollToTop";
import Rout from "./route/Rout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Rout />
    </BrowserRouter>
  );
}

export default App;
