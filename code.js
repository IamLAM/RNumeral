function convertToRoman(num) {

    let romans = ["MMMCM", "MMMD", "MMMCD", "MMM", "MMCM", "MMD", "MMCD", "MM", "MCM", "MD", "MCD", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let natural = [3900, 3500, 3400, 3000, 2900, 2500, 2400, 2000, 1900, 1500, 1400, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    console.log(natural.length);
    console.log(romans.length);
    let nroman = "";
    let anroman = [];
    let i = 0,
        j = 0;

    for (j = 0; j < natural.length; j++) {
        console.log("(" + j + ")" + " num: " + num + " natural[j] " + natural[j] + " romans[j] " + romans[j]);
        while (num >= natural[j]) {
            num = num - natural[j];
            nroman = nroman + romans[j];
            console.log(num + "-" + natural[j] + "R= " + nroman);

        }
    }
}

convertToRoman(18);