import "./searchItem.scss";
import { useNavigate } from "react-router-dom";
const SearchItem = ({source , title ,distance ,Subtitle ,price }) => {
  const navigate = useNavigate()

  const handleSearch = ()=>{
    navigate("/hotels/:id")
  }

    return(
        <div className="searchItem">
          <img
            src={source}
            alt=""
            className="siImg"
            onClick={handleSearch}
          />
          <div className="siDesc">
            <h1 className="siTitle">{title}</h1>
            <span className="siDistance">{distance}</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
              {Subtitle}
            </span>
            <span className="siFeatures">
              Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton" onClick={handleSearch} >See availability</button>
            </div>
          </div>
        </div>
      );
}
 
export default SearchItem;