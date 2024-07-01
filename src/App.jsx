import AnimeList from './Components/AnimeList'
import AnimePage from './Components/AnimePage'
import WatchList from './Components/WatchList'
import AnimeSearchList from './Components/AnimeSearchList'
import SearchBar from './Components/SearchBar'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TOP_ANIMES } from './utils/constants'
import { WatchListProvider } from './contexts/WatchListContext'


function App() {

  return (
    <>
      <Router>
        <Header />
       
        <WatchListProvider>
        <Routes>
          <Route path="/"  element={<AnimeList list={TOP_ANIMES} />} />
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/search/:text" element={<AnimeSearchList  />} />
        </Routes>
        </WatchListProvider>
      </Router>
        <Footer />
    </>
  )
}

export default App
