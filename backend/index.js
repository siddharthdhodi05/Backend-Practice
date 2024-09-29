import express from "express";

const app = express();

/*app.get("/", (req, res) => {
  res.send("server")
})*/

app.get("/api/jokes", (req, res)=>{
  const jokes = [
    {
      id: 1,
      title: "Funny joke",
      content:"Once there was a man and he died oneday"
    },
    {
      id: 2,
      title: "not Funny joke",
      content:"Once there was a woman and he died oneday"
    },
     {
      id: 3,
      title: "old joke",
      content:"If something has a time period with very high value since it was created then that thing is old"
    },
     {
      id: 4,
      title: "new joke",
      content:"the thing is new if it is hot"
    }
  ]
  res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () =>{
  console.log(`server is running on port: ${port}`);
  
})