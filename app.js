const express = require('express');
const app = express();
const cars = [
    { id: 1, name: 'Tesla'},
    { id: 2, name: 'Toyota'},
    { id: 3, name: 'Mercedes'}
];
app.use(express.json());
app.get('/', (req, res) => res.send(cars));
app.get('/name/:id', (req, res) => res.send(req.params.id));
app.get('/cars/:id', (req, res) => {
    const coolcars = cars.find(c => c.id === parseInt(req.params.id));
    if (!coolcars) res.status(404).send('The car with the given id was not found');
    res.send(coolcars);
})
app.post('/newcar', (req, res) => {
    const car = {
        id: cars.length + 1,
        name: req.body.name
    };
    cars.push(car);
    res.send(car);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));