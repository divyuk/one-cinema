import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import { Provider } from "react-redux";
import { store } from "./Store/store";
function App() {
  return (
    <div>
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
