import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";


export const naira = Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    currencySign: 'accounting'
});

export const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export const formatCurrency = (value) => {
    if (value === "NGN") {
        return naira;
    } else if (value === "USD") {
        return dollarUS;
    } else {
        return naira;
    }
};
export const StarRating = ({ rating }) => {
    const star = [];
    for (let i = 1; i <= 5; i++) {
      if (i < rating) {
        star.push(<IoStarSharp key={i}/>);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        star.push(<IoStarOutline key={i} />);
      } else {
        star.push(<MdOutlineStarOutline key={i} />);
      }
    }
  
    return <>{star} </>;
  };