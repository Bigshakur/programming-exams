
const express = require("express");
const app = express();
const PORT = 3000;


const tickets = [
    { id: "#001", status: "Open", subject: "Hello! Lorem ipsum dolor", petitioner: "Erik Johnson", required: "03/28", actualization: "04/15", group: "Support", agent: "Lela Anderson" },
    { id: "#002", status: "In review", subject: "Hi! Lorem ipsum dolor", petitioner: "Josh White", required: "02/21", actualization: "04/12", group: "Community", agent: "Lela Anderson" },
    { id: "#003", status: "Closed", subject: "Morning, lorem ipsum dolor", petitioner: "Steven McAdams", required: "03/25", actualization: "04/10", group: "Support", agent: "Lela Anderson" },
];


app.use(express.static("public"));


app.get("/api/tickets", (req, res) => {
    res.json(tickets);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));