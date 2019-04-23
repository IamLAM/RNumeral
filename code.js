function convertToRoman(num) {

    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let natural = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 1];
    let nroman;
    let anroman = [];
    let i = 1;
    while (i <= 1000) {

        if (num >= natural[i]) {
            nroman += romans[i];
            num = n - natural[i];

        }
        i++;
    }

    num = nroman;
    console.log(num);


    // return num;


}
convertToRoman(1555);