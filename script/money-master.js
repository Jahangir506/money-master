let balance = 0;

function calculation(){
    balance = 0;
    const income = getInputFieldValueId('income-field')
    
    const food = getInputFieldValueId('food-field');
    const rent = getInputFieldValueId('rent-field');
    const clothes = getInputFieldValueId('clothes-field')

    const expenses = food + rent + clothes;
    
    setElementInnerText('total-expenses', expenses)

    balance = income - expenses;

    setElementInnerText('balance', balance)

    const saving = getElementById('saving-balances')

    if(isNaN(income && food && rent && clothes)){
        alert('Please insert a number')
        return 0;
    }
    else if(income < expenses){
        alert('tomar saving balance theke tk kete neowa hobe');
        const savingHand = saving + balance;
        setElementInnerText('saving-balances', savingHand)
        const redColor = document.getElementById('red')
        redColor.style.color = 'red'
       }
    return balance;
}


document.getElementById('save').addEventListener('click',function(){
    const save = getInputFieldValueId('save-field')

    const savingTK = balance * save / 100 ;

    console.log(balance);
    if(isNaN(save) || balance < 0){
        alert('Do not saving your balance')
        return 0
    }

    setElementInnerText('saving-amount', savingTK)

    const saving = getElementById('saving-balances')

    const savingBalances = saving + savingTK;

    setElementInnerText('saving-balances', savingBalances)

    const remainingBalance = balance - savingTK;

    setElementInnerText('remaining-balance', remainingBalance)

})