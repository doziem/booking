import { Link, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar"
import "./listResort.css"
import useFetch from "../../hooks/useFetch";
import { StarRating } from "../../utils/Utils";
import LoadingSpanner from "../spinner/LoadingSpanner";

const ListResort = () => {
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const { data, loading } = useFetch(`/hotels?type=${path}`);
  return (
    <div>
         <Navbar/>
      { loading? (<LoadingSpanner/> ):(data?.map((item) => (
        <div className="list_hotel_Item">
          <img
            src={item?.photoAlbum[0]}
            alt=""
            className="list_hotel_Img"
          />
          <div className="list_hotel_Desc">
            <h1 className="list_hotel_Title"> {item?.name}</h1>
            <span className="list_hotel_Distance">
               {item?.distance}m from city center
            </span>
            <span className="list_hotel_TaxiOp">Free airport taxi</span>
            <span className="list_hotel_Subtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="list_hotel_Features"> {item?.description}</span>
            <span className="list_hotel_CancelOp">Free cancellation </span>
            <span className="list_hotel_CancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="list_hotel_Details">
            <div className="list_hotel_Rating">
              <span>Excellent</span>
              {item.rating &&
              <button > {StarRating(item?.rating)} </button>
               }  
            </div>
            <div className="list_hotel_DetailTexts">
              <span className="list_hotel_Price">₦{item?.cheapestPrice} </span>
              <span className="list_hotel_TaxOp">Includes taxes and fees</span>
              <Link
              to={`/hotel/${item?._id}/${item?.name}`}
              >
                <button className="list_hotel_CheckButton">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      )))}
    </div>
  )
}

export default ListResort