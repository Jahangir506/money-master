function getInputFieldValueId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const value = parseFloat(inputFieldString)
    inputField.value = '';
    return value;
}

function setElementInnerText (elementId, expenses){
    const textElement = document.getElementById(elementId);
    textElement.innerText = expenses;
}

function getElementById(elementId){
    const savingElement = document.getElementById(elementId)
    const savingBalancesString = savingElement.innerText;    
    const savingTwoDecimal = parseFloat(savingBalancesString)
    const savingParseFloat  = savingTwoDecimal.toFixed(2)
    const saving = parseFloat(savingParseFloat)
    return saving;
}