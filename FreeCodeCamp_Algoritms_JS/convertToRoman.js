const arrOfRomanNumbers = [
    {
        number: 1000,
        symbol: 'M',
    },
    {
        number: 900,
        symbol: 'CM',
    },
    {
        number: 500,
        symbol: 'D',
    },
    {
        number: 400,
        symbol: 'CD'
    },
    {
        number: 100,
        symbol: 'C',
    },
    {
        number: 90,
        symbol: 'XC',
    },
    {
        number: 50,
        symbol: 'L',
    },
    {
        number: 40,
        symbol: 'XL',
    },
    {
        number: 10,
        symbol: 'X'
    },
    {
        number: 9,
        symbol: 'IX',
    },
    {
        number: 5,
        symbol: 'V',
    },
    {
        number: 4,
        symbol: 'IV',
    },
    {
        number: 1,
        symbol: 'I',
    }];


function convertToRoman(num) {
    let romanNumberStr = '';
    let integer;

    arrOfRomanNumbers.forEach(el => {
        integer = Math.floor(num / el.number);

        if (integer) {
            num = num % el.number;
            romanNumberStr = romanNumberStr + el.symbol.repeat(integer)
        }
    })

    return romanNumberStr;
}

const res = convertToRoman(2);