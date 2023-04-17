const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "user_login"
})

app.post('/register', (req, res) => {



    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = year + "-" + month + "-" + day;


    db.query("INSERT INTO users (Username,Password,Email,City,Country,CreatedDate) VALUES (?, ?, ?, ?, ?, ?)",
        [req.body.name, req.body.password, req.body.email, req.body.city, req.body.country, currentDate],
        (err, result) => {
            if (err) return res.json("hiii");
            if (result) {
                console.log(result);
                res.send(result);

            } else {
                res.send({ message: "Enter correct asked Details" })
            }
        }

    )
})

app.post('/login', (req, res) => {

    db.query("SELECT * FROM users WHERE Email=? AND Password=?", [req.body.email, req.body.password],
        (err, result) => {
            /*    if(err) return res.json("Error");
        if(result.length > 0){
            return res.json("Login Sucessful");
        }else{
            return res.json("No record Found");
        }*/
            if (err) {
                return res.json("hiii");
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: " Username or Password is wrong" });
                }
            }
        }

    )
})


app.put('/forgetpassword', (req, res) => {

    
    db.query("UPDATE users SET Password=? WHERE Email=?", [req.body.password, req.body.email], (err, result) => {

        if (err) return res.json("Error");
        if (result) {
            console.log(result);
            res.send(result);

        } else {
            res.send({ message: "Enter Valid Email" })
        }

    })
})



app.listen(8081, () => {
    console.log("Running....");


})
