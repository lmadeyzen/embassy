import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Start } from "./pages/Start";
import { PickDate } from "./pages/PickDate";
import { Summary } from "./pages/Summary";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.webviewSdkInit;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/date" element={<PickDate />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
