document.getElementById("add-expense-form").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent form from reloading the page
    
    const expense = {
        name: e.target.name.value,
        amount: parseFloat(e.target.amount.value),
        category: e.target.category.value,
        date: e.target.date.value
    };

    // Add expense to local storage (for this example, we store it locally)
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    // Clear form fields
    e.target.reset();

    // Reload the expense list
    loadExpenses();
});

// Load expenses from local storage
function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const expenseList = document.getElementById("expenses");
    expenseList.innerHTML = '';  // Clear existing list

    expenses.forEach(exp => {
        const li = document.createElement("li");
        li.textContent = `${exp.name} - $${exp.amount} (${exp.category}) on ${exp.date}`;
        expenseList.appendChild(li);
    });
}

// Initial load of expenses when the page is loaded
window.onload = loadExpenses;
