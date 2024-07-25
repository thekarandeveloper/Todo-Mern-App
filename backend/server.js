const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const tasksRoute = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


  mongoose.connect("mongodb+srv://karanKumar:Zvno5Ik0LPg5HVW1@cluster0.uyfvl1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit the process with a failure
    });
  
app.use("/api/tasks", tasksRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
