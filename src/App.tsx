import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            {/* Route for the ListPage which is the Home page */}
            <Route index element={<ListPage />} />
            {/* Route for the DetailsPage */}
            <Route path="/movie/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
