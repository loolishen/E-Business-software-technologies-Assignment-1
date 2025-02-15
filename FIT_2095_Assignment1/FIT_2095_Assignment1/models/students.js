class EventsCat {
    constructor(name,description){
        this.id = IDGenerator();
        this.name = name;
        this.creationDate = DateGenerator();
        this.description = description;
    }
}
function IDGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'C';
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    result += '-';
    for (let j = 0; j < 4; j++) {
        const randomDigit = Math.floor(Math.random() * 10);
        result += randomDigit;
    }
    return result;
}

function DateGenerator(){
    function randomNumberGenerator(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return randomNumberGenerator(1,30) + " - " + randomNumberGenerator(1,12) + " - " + randomNumberGenerator(2017, 2023)
}

module.exports = EventsCat





