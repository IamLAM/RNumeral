function convertToRoman(num) {

    let m = num / 1000;
    let resm = num % 1000;
    let c = resm / 100;
    let resc = resm % 100;
    let d = resc / 10;
    let u = resc % 10;
    let mil, cen, dec, uni;

    console.log("m: " + m + " resm: [" + resm + "] c:" + c + " resc: [" + resc + "]" + " d: " + d + " u:" + u);

    if (m == 1) {
        mil = "M";
    }
    if (m == 2) {
        mil = "MM";
    }
    if (m == 3) {
        mil = "MMM";
    }
    if (m == 4) {
        mil = "MMMM"
    }

    if (c == 1) {
        cen = "C";
    }
    if (c == 2) {
        cen = "CC";
    }
    if (c == 3) {
        cen = "CCC";
    }
    if (c == 4) {
        cen = "CD";
    }
    if (c == 5) {
        cen = "D";
    }
    if (c == 6) {
        cen = "DC";
    }
    if (c == 7) {
        cen = "DCC";
    }
    if (c == 8) {
        cen = "DCCC";
    }

    if (c == 9) {
        cen = "CM";

    }
    if (d == 1) {
        dec = "X";
    }
    if (d == 2) {
        dec = "XX";
    }
    if (d == 3) {
        dec = "XXX";
    }
    if (d == 4) {
        dec = "XL";
    }
    if (d == 5) {
        dec = "L";
    }
    if (d == 6) {
        dec = "LX";
    }
    if (d == 7) {
        dec = "LXX";
    }
    if (d == 8) {
        dec = "LXXX";
    }

    if (d == 9) {
        dec = "XC";


    }

    if (u == 1) {
        uni = "I";
    }
    if (u == 2) {
        uni = "II";
    }
    if (u == 3) {
        uni = "III";
    }
    if (u == 4) {
        uni = "IV";
    }
    if (u == 5) {
        uni = "V";
    }
    if (u == 6) {
        uni = "VI";
    }
    if (u == 7) {
        uni = "VII";
    }
    if (u == 8) {
        uni = "VIII";
    }

    if (d == 9) {
        cen = "IX";


    }
    let numf = mil + cen + dec + uni;
    console.log(numf);
    // return num;
}
convertToRoman(1555);