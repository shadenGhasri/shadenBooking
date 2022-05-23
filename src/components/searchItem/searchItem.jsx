import "./searchItem.scss";
import { useNavigate } from "react-router-dom";


const SearchItem = ({source , title ,distance ,Subtitle ,price ,id}) => {
  const navigate = useNavigate()

  const handleSearch = (dataId)=>{
    // console.log(dataId)
    // navigate(`/hotels${dataId}/:id`, {state: dataId})
    if(dataId === 1){
      navigate("/hotels/code1")
    }
    if(dataId === 2){
      navigate("/hotels/code2")
    }
    if(dataId === 3){
      navigate("/hotels/code3")
    }
    if(dataId === 4){
      navigate("/hotels/code4")
    }
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
              <button className="siCheckButton" onClick={()=>handleSearch(id)} >See availability</button>
            </div>
          </div>
        </div>
      );
}
 
export default SearchItem;