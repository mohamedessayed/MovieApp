import { Route, Routes } from "react-router"
import Movie from "./pages/Movie"
import ViewMovie from "./pages/ViewMovie"

function App() {
  return (
    <div>

      <Routes>
        <Route index element={<Movie />} />
        <Route path="/view/movie/:id" element={<ViewMovie />} />
      </Routes>
      
    </div>
  )
}

export default App
