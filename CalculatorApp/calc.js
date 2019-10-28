console.log("inside calci")

// operators assignment

var equalsOperator = document.getElementById("equals-button");

// textbox
var display = document.getElementById("display");

var operand_1 = null, operand_2 = null, operatorSign = null;

display.value = null;

function signButtonClick(id) {
    operatorSign = document.getElementById(id).value;

    display.value += document.getElementById(id).value;


}

function clickButton(id) {
    display.value += document.getElementById(id).value;
}



equalsOperator.onclick = function () {


    var temp = display.value
    var splitted = temp.split(operatorSign);

    operand_1 = splitted[0]; operand_2 = splitted[1];

    console.log("op1:" + operand_1 + "\nsign : " + operatorSign + "\n op2 : " + operand_2)

    // operation begins 
    var result = 0;
    if (operatorSign == "+") {
        result = parseInt(operand_1) + parseInt(operand_2);
    }
    else if (operatorSign == "-") {
        result = parseInt(operand_1) - parseInt(operand_2);
    }
    else if (operatorSign == "*") {
        result = parseInt(operand_1) * parseInt(operand_2);
    }
    else if (operatorSign == "/") {
        result = parseInt(operand_1) / parseInt(operand_2);
    }
    else {
        result = "incorrect operator"
    }

    display.value = result

    operatorSign = null;
    operand_2 = null;
    operand_1 = null;

    console.log(result)
}

var clearButton = document.getElementById("clear-button")

clearButton.onclick = function () {

    operatorSign = null;
    operand_2 = null;
    operand_1 = null;

    display.value = null;

}
