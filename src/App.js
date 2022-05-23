import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import dataContext from "./context/data";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Hotel1 from "./pages/hotel/hotel1";
import Hotel2 from "./pages/hotel/hotel2";
import Hotel3 from "./pages/hotel/hotel3";
import Hotel4 from "./pages/hotel/hotel4";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/login/login";
import Logout from "./pages/logout/logOut";


function App() {
  const [data, setData] = useState([
    {
      source: "https://b2n.ir/w60935",
      title: "Tower Street Apartments",
      distance: "500m from center",
      Subtitle: "Studio Apartment with Air conditioning",
      price: "$112",
      id: 1,
    },
    {
      source: "https://b2n.ir/s09633",
      title: "Summerland Sun Apartments",
      distance: "1.9 km from centre",
      Subtitle: "Providing a bar and a garden",
      price: "$152",
      id: 2,
    },
    {
      source: "https://b2n.ir/p90139",
      title: "Catalina Summerland Apartment",
      distance: "1.8 km from centre",
      Subtitle: "Located 100 metres from Ammos Beach",
      price: "$178",
      id: 3,
    },
    {
      source: "https://b2n.ir/f27110",
      title: "Sea View Penthouse Mamaia",
      distance: "2 km from centre",
      Subtitle: "Sea View Studio Mamaia is located in the Summerland Complex",
      price: "$105",
      id: 4,
    },
  ]);


  return (
    <BrowserRouter>
      <dataContext.Provider
        value={{
           data, 
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/hotels/code1" element={<Hotel1 />} />
          <Route path="/hotels/code2" element={<Hotel2/>} />
          <Route path="/hotels/code3" element={<Hotel3/>}/>
          <Route path="/hotels/code4" element={<Hotel4/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </dataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
