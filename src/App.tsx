import { Route, Routes } from "react-router"
import Movie from "./pages/Movie"
import ViewMovie from "./pages/ViewMovie"
import { FavoritesContextProvider } from "./context/FavoritesContext"

function App() {
  return (
    <div>

      <Routes>
        <Route index element={<Movie />} />
        <Route path="/view/movie/:id" element={<FavoritesContextProvider><ViewMovie /></FavoritesContextProvider>} />
      </Routes>
      
    </div>
  )
}

export default App
