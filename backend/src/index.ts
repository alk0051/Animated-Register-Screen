import express from 'express';

const app = express();

app.listen(3333);

console.log("Listen in 3333...")

app.get('/', (req, res) => {
  return res.send("Hello World");
});