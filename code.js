function convertToRoman(num) {

    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let natural = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let nroman = "";
    let anroman = [];
    let i = 0,
        j = 0;

    for (j = 0; j <= natural.length; j++) {
        console.log("(" + j + ")" + " num: " + num + " natural[i] " + natural[i] + " romans[i] " + romans[i]);
        if (num >= natural[i]) {
            while (num >= natural[i]) {


                num = num - natural[i];
                nroman = nroman + romans[i];
                console.log(num + "-" + natural[i] + "R= " + nroman);
                if (natural[i] != 1)
                    i++;

            }
        } else {
            i++;
        }



    }



}

convertToRoman(5);