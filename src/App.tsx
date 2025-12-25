import { Route, Routes } from "react-router"
import { FavoritesContextProvider } from "./context/FavoritesContext"
import React, { Suspense } from "react"
import LoadingLayout from "./components/Layout/LoadingLayout"

const ViewMovie = React.lazy(() => import('./pages/ViewMovie'))
const Movie = React.lazy(() => import('./pages/Movie'))

function App() {
  return (
    <div>

      <Routes>
        <Route index element={<Suspense fallback={<LoadingLayout />}><Movie /></Suspense>} />
        <Route path="/view/movie/:id" element={<FavoritesContextProvider>

          <Suspense fallback={<LoadingLayout />}>
            <ViewMovie />
          </Suspense>

        </FavoritesContextProvider>} />
      </Routes>

    </div>
  )
}

export default App
