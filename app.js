const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

const apiKey = "1W7U9ZEECSDBQE94";

app.get("/stockit", (req, res) => {
  fetch(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      let gainers = [],
        losers = [],
        active = [];

      if (data.hasOwnProperty("top_gainers")) {
        gainers = data.top_gainers;
        losers = data.top_losers;
        active = data.most_actively_traded;
      }

      res.render("index", { gainers, losers, active });
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
});

app.get("/stockit/ticker", (req, res) => {
  const { symbol } = req.query;
  fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      let {
        Name,
        Description,
        Exchange,
        Sector,
        Industry,
        MarketCapitalization,
        EPS,
        ProfitMargin,
        TrailingPE,
        ForwardPE,
        SharesOutstanding,
        DividendDate,
      } = data;
      res.render("ticker", {
        symbol,
        Name,
        Description,
        Exchange,
        Sector,
        Industry,
        MarketCapitalization,
        EPS,
        ProfitMargin,
        TrailingPE,
        ForwardPE,
        SharesOutstanding,
        DividendDate,
      });
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
});