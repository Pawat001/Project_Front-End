const express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();

//port of backend
const base_url = "http://localhost:3000"

app.set("views", path.join(__dirname, "/public/views"));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));
app.get("/",async (req, res) => {
    res.render("home");
});
//all data
app.get("/cars",async (req, res) => {
    try {
        const response = await axios.get(base_url + '/cars');
        res.render("cars", { cars: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
//data by id
app.get("/car/:id", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/cars/' + req.params.id);
        res.render("car", { car: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
 
//create
app.get("/create1", (req, res) => {
    res.render("create1");
});

app.post("/create1", async (req, res) => {
    try {
        const data = { make: req.body.make, model: req.body.model ,year: req.body.year, price: req.body.price };
        await axios.post(base_url + '/cars', data);
        res.redirect("/cars");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
//update
app.get("/update1/:id", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/cars/' + req.params.id);
            res.render("update1", {car: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
//updata post
app.post("/update1/:id", async (req, res) => {
    try {
        const data = { make: req.body.make, model: req.body.model ,year: req.body.year, price: req.body.price };
        await axios.put(base_url + '/cars/' + req.params.id, data);
        res.redirect("/cars");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
//delete
app.get("/delete1/:id", async (req, res) => {
    try {
        await axios.delete(base_url + '/cars/' + req.params.id);
            res.redirect("/cars");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

//table2

app.get("/owners",async (req, res) => {
    try {
        const response = await axios.get(base_url + '/owners');
        res.render("owners", { owners: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/owner/:id", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/owners/' + req.params.id);
        res.render("owner", { owner: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
 

app.get("/create2", (req, res) => {
    res.render("create2");
});

app.post("/create2", async (req, res) => {
    try {
        const data = { name: req.body.name, age: req.body.age };
        await axios.post(base_url + '/owners', data);
        res.redirect("/owners");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update2/:id", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/owners/' + req.params.id);
            res.render("update2", {owner: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.post("/update2/:id", async (req, res) => {
    try {
        const data = { name: req.body.name, age: req.body.age };
        await axios.put(base_url + '/owners/' + req.params.id, data);
        res.redirect("/owners");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/delete2/:id", async (req, res) => {
    try {
        await axios.delete(base_url + '/owners/' + req.params.id);
            res.redirect("/owners");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

//table3
app.get("/results",async (req, res) => {
    try {
        const response = await axios.get(base_url + '/results');
        res.render("results", { results: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/result/:id", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/results/' + req.params.id);
        res.render("result", { result: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
 

app.get("/create3", (req, res) => {
    res.render("create3");
});

app.post("/create3", async (req, res) => {
    try {
        const data = { id_owner: req.body.id_owner, id_car: req.body.id_car };
        await axios.post(base_url + '/results', data);
        res.redirect("/results");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update3/:id", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/results/' + req.params.id);
            res.render("update3", {result: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.post("/update3/:id", async (req, res) => {
    try {
        const data = { id_owner: req.body.id_owner, id_car: req.body.id_car };
        await axios.put(base_url + '/results/' + req.params.id, data);
        res.redirect("/results");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/delete3/:id", async (req, res) => {
    try {
        await axios.delete(base_url + '/results/' + req.params.id);
            res.redirect("/results");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
//summary
app.get("/summary",async (req, res) => {
    try {
        const response = await axios.get(base_url + '/summary');
        res.render("summary", { summary: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});


app.listen(8080, () => {
    console.log('Server started on port 8080');
    });
