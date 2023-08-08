function convert() {
    const conversionType = document.getElementById("menu").value;
    const inputNumber = document.getElementById("numero").value;
    let outputResult = document.getElementById("resultado");

    if (conversionType === "binario_hexadecimal") {
        outputResult.value = binario_a_hexadecimal(inputNumber);
    } else if (conversionType === "binario_decimal") {
        outputResult.value = binario_a_decimal(inputNumber);
    } else if (conversionType === "decimal_hexadecimal") {
        outputResult.value = decimal_a_hexadecimal(inputNumber);
    } else if (conversionType === "hexadecimal_binario") {
        outputResult.value = hexadecimal_a_binario(inputNumber);
    } else if (conversionType === "hexadecimal_decimal") {
        outputResult.value = hexadecimal_a_decimal(inputNumber);
    }else if (conversionType === "decimal_Binario") {
        outputResult.value = decimal_a_Binario(inputNumber);
}

function binario_a_hexadecimal(binario) {
    const decimal = parseInt(binario, 2);
    return decimal.toString(16).toUpperCase();
}

function binario_a_decimal(binario) {
    return parseInt(binario, 2).toString();
}

function decimal_a_hexadecimal(decimal) {
    return parseInt(decimal).toString(16).toUpperCase();
}

function hexadecimal_a_binario(hexadecimal) {
    const decimal = parseInt(hexadecimal, 16);
    return decimal.toString(2);
}

function hexadecimal_a_decimal(hexadecimal) {
    return parseInt(hexadecimal, 16).toString();
}
function decimal_a_Binario(decimal) {
    return parseInt(decimal).toString(2);
}
}