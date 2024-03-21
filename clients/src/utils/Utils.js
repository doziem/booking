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