function rot13(str) {
    const shift = 13;
    const firstCharCode = 65;
    const lastCharCode = 90;
    let newCharCode;
    let convertedString = '';

    str.split('').forEach((char) => {
        const charCode = char.charCodeAt(0);
        const nonAlphabeticRegExp = new RegExp("[^a-zA-Z0-9]");

        newCharCode = (charCode + shift > lastCharCode)
            ? charCode + shift - lastCharCode + firstCharCode - 1
            : charCode + shift;

        convertedString = nonAlphabeticRegExp.test(char)
            ? convertedString + char
            : convertedString + String.fromCharCode(newCharCode)

    });

    return convertedString;
}

const shiftedStr = rot13("SERR PBQR PNZC"); // 'FREE CODE CAMP