import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  // ✅ useState must be at the top level
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
     `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
    )
    

      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [currency]);

  // ✅ Now 'data' is defined here
  console.log("Currency Data:", data);

  return data;
}

export default useCurrencyInfo;
