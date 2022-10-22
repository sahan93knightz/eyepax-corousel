const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 3600;

app.get("/api/carousel", (req, res) => {
  const slides = req.query.slides || 0;

  if (slides > 10) {
    res.status(400);
    res.send({
      error: "Maximum number of slides allowed: 10",
    });
    return;
  }

  const response = [];

  for (let index = 1; index <= slides; index++) {
    response.push({
      image: `https://via.placeholder.com/1600x900?text=Placeholder${index}`,
      title: `Title ${index}`,
      subTitle: `Secondary Text ${index}`,
    });
  }
  res.send(response);
});

app.listen(port, () => {
  console.log(`App litening on port ${port}`);
});
