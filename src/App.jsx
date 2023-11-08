import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import CityWeather from "./pages/CityWeather"
import SavedLocations from "./pages/SavedLocations"

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/city-weather" element={<CityWeather/>} />
      <Route path="/saved-locations" element={<SavedLocations/>} />
    </Routes>
  )
}

export default App