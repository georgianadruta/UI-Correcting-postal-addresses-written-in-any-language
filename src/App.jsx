import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import FormPage from "./pages/FormPage";
import TopPage from "./pages/TopPage";

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstPage/>}></Route>
        <Route exact path="/form" element={<FormPage/>}></Route>
        <Route exact path='/top' element={<TopPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
