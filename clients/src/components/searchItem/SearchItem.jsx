import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {

  const StarRating = ({ rating }) => {
    const star = [];
    for (let i = 1; i <= 5; i++) {
      if (i < rating) {
        star.push(<i key={i} className="fas fa-star text-warning"></i>);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        star.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
      } else {
        star.push(<i key={i} className="far fa-star text-warning"></i>);
      }
    }
  
    return <>{star} </>;
  };
  return (
    <div className="searchItem">
      <img
        src={item?.photoAlbum[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item?.name}</h1>
        <span className="siDistance">{item?.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {item?.description}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
        {item.rating &&
          <button>{StarRating(item?.rating)} </button>
        } 
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₦{item?.cheapestPrice} </span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item?._id}`}>
          <button className="siCheckButton">See availability</button>
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;