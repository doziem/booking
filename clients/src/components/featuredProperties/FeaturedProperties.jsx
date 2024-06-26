import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () => {

  const navigate = useNavigate()
  const { data, loading } = useFetch("/hotels?featured=true");


  return (
    <div className="fp">
      {loading ? (
        "Loading...."
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id} onClick={()=>navigate(`/${item.type}/${item._id}`)}>
              <img src={item?.photoAlbum[0]} alt="" className="fpImg" />
              <span className="fpName">{item?.name} </span>
              <span className="fpCity">{item?.city} </span>
              <span className="fpPrice">
                Starting from ₦{item?.cheapestPrice}
              </span>
              {item?.rating && (
                <div className="fpRating">
                  <button>{item?.rating} </button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;