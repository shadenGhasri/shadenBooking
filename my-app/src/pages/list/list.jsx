import "./list.scss";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/searchItem";

const List = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [data,setData] = useState([
    {
      source : "https://b2n.ir/w60935",
      title : "Tower Street Apartments",
      distance : "500m from center",
      Subtitle : "Studio Apartment with Air conditioning",
      price : "$112",
      id: 1
    },
    {
      source : "https://b2n.ir/s09633",
      title : "Summerland Sun Apartments",
      distance : "1.9 km from centre",
      Subtitle : "Providing a bar and a garden",
      price : "$152",
      id: 2
    },
    {
      source : "https://b2n.ir/p90139",
      title : "Catalina Summerland Apartment",
      distance : "1.8 km from centre",
      Subtitle : "Located 100 metres from Ammos Beach",
      price : "$178",
      id: 3
    },
    {
      source : "https://b2n.ir/f27110",
      title : "Sea View Penthouse Mamaia",
      distance : "2 km from centre",
      Subtitle : "Sea View Studio Mamaia is located in the Summerland Complex",
      price : "$105",
      id: 4
    },

  ])

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
          {
            data.map(elem => (
              <SearchItem key={elem.id} source={elem.source}  title= {elem.title} distance={elem.distance} Subtitle={elem.Subtitle} price={elem.price} />
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
