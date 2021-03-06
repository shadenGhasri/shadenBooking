import "./header.scss";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { date, destination, options } });
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header px-4">
      <div className={type === "list" ? "listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <NavLink
              to="*"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "white",
                  textDecoration: "none",
                };
              }}
            >
              Stays
            </NavLink>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <NavLink
              to="*"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "white",
                  textDecoration: "none",
                };
              }}
            >
              Flights
            </NavLink>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <NavLink
              to="*"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "white",
                  textDecoration: "none",
                };
              }}
            >
              Car rentals
            </NavLink>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <NavLink
              to="*"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "white",
                  textDecoration: "none",
                };
              }}
            >
              Attractions
            </NavLink>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <NavLink
              to="*"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "white",
                  textDecoration: "none",
                };
              }}
            >
              Airport taxis
            </NavLink>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels ??? unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerBtn__SignIn" onClick={handleSignIn}>
              Sign in{" "}
            </button>

            {/* header search */}

            <div className="box mx-2">
              <div className="headerSearch row">
                <div className="headerSearchItem col-md-3 item1">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem col-md-3 item2">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                </div>
                <div className="headerSearchItem col-md-3 item3">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    className="headerSearchText"
                    onClick={() => setOpenOptions(!openOptions)}
                  >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">adult</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                            disabled={options.adult <= 1}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">children</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                            disabled={options.children <= 0}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">room</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                            disabled={options.room <= 1}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="headerSearchItem col-md-3 headerSearchBtn item4"
                  onClick={handleSearch}
                >
                  search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
