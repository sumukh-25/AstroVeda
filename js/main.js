function getZodiacSign(day, month) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    return "Pisces";
}

function getLifePathNumber(dob) {
    let sum = dob.replaceAll("-", "").split("").reduce((a, b) => a + parseInt(b), 0);
    while (sum > 9) {
        sum = sum.toString().split("").reduce((a, b) => a + parseInt(b), 0);
    }
    return sum;
}

function calculate() {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;

    let dateObj = new Date(dob);
    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;

    let zodiac = getZodiacSign(day, month);
    let lucky = getLifePathNumber(dob);

    document.getElementById("result").innerHTML = `
        <h2>Welcome ${name}</h2>
        <p>Your Zodiac Sign: ${zodiac}</p>
        <p>Your Lucky Number: ${lucky}</p>
        <p>Prediction: Today is a spiritually powerful day for growth and clarity.</p>
    `;
}