const express = require("express");
const mockUsers = require("../mock.users.json")

const app = express();

const person = {
    name: "Kyle",
    emotion: (emotion) => {
        console.log(`I feel ${emotion}`);
    }
}

person.emotion("Happy");

app.get("/api/fetch-users", (req, res) => {
    return res.status(200).json(mockUsers);
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})

// Members BSIT 3A: 
// Kyle Ando
// John Vincent Aro 
// Micco James Ang 
// Shin Aro 