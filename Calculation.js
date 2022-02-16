document.getElementById('calculate-button').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input');
    const incomeConsol = incomeInput.value ;
    const previousInput = parseFloat(incomeInput);
    incomeConsol.value  = previousInput + incomeInput
    const rentInput = document.getElementById('rent-input');
    const foodInput = document.getElementById('food-input');

    
})