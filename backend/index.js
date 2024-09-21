require("dotenv").config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require("./routes/task.route");

const app = express();
const PORT = 8082;
const DB_URI = 'mongodb://localhost:27017/taskManager';

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
