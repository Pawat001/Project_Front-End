const express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();


const base_url = "http://localhost:3000"

app.set("views", path.join(__dirname, "/public/views"));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get("/cars",async (req, res) => {
    try {
        const response = await axios.get(base_url + '/cars');
        res.render("cars", { cars: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/car/:id", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/cars/' + req.params.id);
        res.render("car", { car: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
 

app.get("/create1", (req, res) => {
    res.render("create1");
});

app.post("/create1", async (req, res) => {
    try {
        const data = { make: req.body.make, model: req.body.model ,year: req.body.year, price: req.body.price };
        await axios.post(base_url + '/cars', data);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update1/:id", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/cars/' + req.params.id);
            res.render("update1", {book: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.post("/update1/:id", async (req, res) => {
    try {
        const data = { title: req.body.title, author: req.body.author };
        await axios.put(base_url + '/cars/' + req.params.id, data);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/delete1/:id", async (req, res) => {
    try {
        await axios.delete(base_url + '/cars/' + req.params.id);
            res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

//table2

app.get("/cars",async (req, res) => {
    try {
        const response = await axios.get(base_url + '/cars');
        res.render("cars", { cars: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/car/:id", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/cars/' + req.params.id);
        res.render("car", { car: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
 

app.get("/create1", (req, res) => {
    res.render("create1");
});

app.post("/create1", async (req, res) => {
    try {
        const data = { make: req.body.make, model: req.body.model ,year: req.body.year, price: req.body.price };
        await axios.post(base_url + '/cars', data);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update1/:id", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/cars/' + req.params.id);
            res.render("update1", {book: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.post("/update1/:id", async (req, res) => {
    try {
        const data = { title: req.body.title, author: req.body.author };
        await axios.put(base_url + '/cars/' + req.params.id, data);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/delete1/:id", async (req, res) => {
    try {
        await axios.delete(base_url + '/cars/' + req.params.id);
            res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
app.listen(8080, () => {
    console.log('Server started on port 8080');
    });
