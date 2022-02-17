// document.getElementById('calculate-button').addEventListener('click', function () {
/*  const incomeInput = document.getElementById('rent-input');
 const incomeConsol = incomeInput.value;
 const previousInput = parseFloat(incomeInput);
 incomeConsol.value = previousInput + incomeInput;
 
 const foodInput = document.getElementById('food-input');
 const foodConsol = foodInput.value;
 const previousFood = parseFloat(foodInput);
 foodConsol.value = previousFood + foodInput;
 
 
 const clothInput = document.getElementById('cloth-input');
 const clothConsol = clothInput.value;
 const previousCloth = parseFloat(clothInput);
 clothConsol.value = previousCloth + foodInput; */

/* 
    function sumFunction() {
       
        const answer = a + b + c;
        return answer ;
        
    }; */

function myFunction() {
    // total expenses side start
    const rent = document.getElementById("rent-input").value;
    const rentFloat = parseFloat(rent);

    const food = document.getElementById("food-input").value;
    const foodFloat = parseFloat(food);

    const cloth = document.getElementById("cloth-input").value;
    const clothFloat = parseFloat(cloth)
    //    sum total expenses
    var totalExpenses = rentFloat + foodFloat + clothFloat

    const expenses = document.getElementById("total-expenses")
    const expensesConsol = expenses.innerText
    const expensesFloat = parseFloat(expensesConsol);

   expenses.innerText = totalExpenses

    // total balance side start
    //  get  incomeInput 
    const incomeInput = document.getElementById('income-input').value
    const incomeConsol = parseFloat(incomeInput);
   
     
    //    get  balance element
    const totalBalance = document.getElementById('total-balance')
    const balanceConsol = totalBalance.innerText
    const balanceFloat = parseFloat(balanceConsol);

    totalBalance.innerText = incomeConsol -  totalExpenses;

}


