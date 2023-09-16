const awesomeFunction = (req, res, next) => {
    res.json('Cecilia Merino');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super Awesome Person');
};

module.exports = {awesomeFunction, returnAnotherPerson};