function getLifePathNumber(dob) {
    let sum = dob.replaceAll("-", "").split("").reduce((a, b) => a + parseInt(b), 0);
    
    while (sum > 9) {
        sum = sum.toString().split("").reduce((a, b) => a + parseInt(b), 0);
    }

    return sum;
}