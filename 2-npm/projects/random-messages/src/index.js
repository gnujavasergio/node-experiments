const messages = [
    "Sergio",
    "Rocio",
    "chechi",
    "chochis",
    "Angel",
    "Daniel"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg}