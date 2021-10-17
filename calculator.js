// ▼▼▼▼ подключение ▼▼▼▼
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// ▼▼▼▼ body-parser ▼▼▼▼, теперь его не нужно импортировать отдельно, достаточно написать такой код:
app.use(express.urlencoded({extended: true}));


// ▼▼▼▼ html ▼▼▼▼
// === Обычный калькулятор ===
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// === bmi калькулятор ===
app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});


// ▼▼▼▼ calculation ▼▼▼▼
// === regular calc ===
app.post("/", (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;

    res.send("The result of calculation is " + result);
});

// === bmi calc ===
app.post("/bmiCalculator", (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let result = Math.round(weight / (height * height));

    res.send('Your BMI is ' + result);
});


// ▼▼▼▼ подключил css ▼▼▼▼
app.use(express.static(__dirname + '/public'));