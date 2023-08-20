import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            {/* Route for the ListPage which is the Home page */}
            <Route index element={} />
            {/* Route for the DetailsPage */}
            <Route path="/movie/:id" element={} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
