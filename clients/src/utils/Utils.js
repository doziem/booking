import { IoStarSharp,IoStarOutline,IoStarHalf} from "react-icons/io5";

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
export const StarRating = ( rating ) => {

  console.log("rating:::",rating);
    const star = [];
    for (let i = 1; i <= 5; i++) {
      if (i < rating) {
        star.push(<IoStarSharp style={{width:"1.8rem",height:"1.8rem", color: "yellow"}} key={i}/>);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        star.push(<IoStarHalf style={{width:"1.8rem",height:"1.8rem", color: "yellow"}} key={i} />);
      } else {
        star.push(<IoStarOutline style={{width:"1.8rem",height:"1.8rem", color: "yellow"}} key={i} />);
      }
    }
  
    return <>{star} </>;
  };