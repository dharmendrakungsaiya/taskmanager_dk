require("dotenv").config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require("../src/routes/task.route");

const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('DB Connected!'))
    .catch((error) => console.error('Error in connecting DB', error));

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);



app.listen(PORT, () => {
    console.log(`Backend listening on PORT ${PORT}!`);
});
