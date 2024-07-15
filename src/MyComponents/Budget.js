import React, { useState, useEffect,useCallback  } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Budget() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [totalBudget, setTotalBudget] = useState(10000); // Example initial budget
  const [remainingBudget, setRemainingBudget] = useState(10000);
  const [pieData, setPieData] = useState([]);

  // Function to fetch data and update pie chart
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.post('http://192.168.1.6:5000/predict', {
        income: totalBudget, // Pass total budget as income for prediction
      });
      const data = (response.data[0]);
      // console.log(data);
      setPieData(data);
            
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [totalBudget]);

  // Effect to fetch data initially and on totalBudget change
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handler to add expense
  const handleAddExpense = () => {
    if (description && amount) {
      const newExpense = { description, amount: parseFloat(amount) };
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      const newRemainingBudget = remainingBudget - parseFloat(amount);
      setRemainingBudget(newRemainingBudget);
      setDescription('');
      setAmount('');
    } else {
      alert('Please enter both description and amount.');
    }
  };

  // Handler to change total budget
  const handleChangeBudget = () => {
    const newBudget = prompt('Enter new total budget:');
    if (newBudget) {
      const parsedBudget = parseFloat(newBudget);
      if (!isNaN(parsedBudget) && parsedBudget > 0) {
        const spentAmount = totalBudget - remainingBudget;
        setTotalBudget(parsedBudget);
        setRemainingBudget(parsedBudget - spentAmount);
      } else {
        alert('Please enter a valid number greater than 0.');
      }
    }
  };

    // Calculate percentages based on remaining budget
    const calculatePercentages = () => {
      // const total = totalBudget - remainingBudget;
      const percentages = pieData.map((item) => {
        const total = (item/100)*totalBudget;
        console.log(total);
        return Math.abs(remainingBudget-total)*(item/100);
      });
      console.log(percentages);
      return percentages;
    };
  

  const pieChartData = {
    labels: ['Housing Budget',
'Transportation Budget',
'Food Budget',
'Utilities Budget',
'Entertainment Budget','Savings Budget'],
    datasets: [
      {
        label: 'Remaining Budget',
        // data: [122,2,3,2,3,4],
        data: calculatePercentages(),
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <>
    <div className='Appret mid'>
    <h1>Your Ultimate Budget Management Tool!</h1>
      <p><strong>Budget Hero</strong> is your go-to web application for effortless financial management. It simplifies budget tracking, expense management, and investment visualization with intuitive tools and clear, interactive charts. Whether you're setting up your budget, categorizing expenses, or planning for the future, Budget Hero guides you through every step with ease. Stay on top of your finances, make informed decisions, and achieve your financial goals with confidence, all within a user-friendly interface designed for seamless navigation and clarity.</p>
      <p>The Budget is set to ₹10000 by default. Change the Budget by using the button below:</p>
      <hr/>
      <h1 style={{margin: "20px", fontFamily:"neon", textAlign:"center"}}>Budget Hero<img src="jar.gif" style={{height:"50px", width:"50px", opacity:"100%"}}/></h1>
      </div>
    <div className="budget-container" style={{color:"white"}}>
      <div className="header">
        {/* <h1>Budget Hero</h1>
        <p>
          Track your budget and investment options to make informed decisions.
        </p> */}
        <button onClick={handleChangeBudget}>Change Total Budget</button>
      </div>

      <div className="budget-info">
        <div className="budget-summary">
          <h2>Total Budget: ₹{totalBudget.toFixed(2)}</h2>
          <h2>Remaining Budget: ₹{remainingBudget.toFixed(2)}</h2>
          {remainingBudget < 0 && (
            <div className="warning">
              Warning: You have exceeded your budget!
            </div>
          )}
        </div>

        <div className="expense-form">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>

        <div className="expenses-list">
          <h3>Expenses</h3>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                {expense.description}: ₹{expense.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
        </div>

      <div className="pie-chart"  >
        <h2>Investment Distribution</h2>
        {pieData.length > 0 ? (
          <Pie 
            data={pieChartData}
            options={{plugins: {
      legend: {
        labels: {
          color: '#FFFFFF', // Color of labels
        },
      },
      }}}
      
            // }}
          />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>

      <div className="how-to-use">
        <h2>How to Use This Budget Tracker</h2>
        <p>
          Use this tool to manage your expenses, track your remaining budget,
          and visualize your investment distribution dynamically.
        </p>
      </div>
    </div>
    <div style={{color:"white", padding:"50px", margin:"50px", textAlign:"justify"}}>
    <h2>How to Use Budget Hero: FAQs</h2>
<ul>
  <li><strong>Setting Up Your Budget:</strong> Start by entering your total budget. Click on the "Change Total Budget" button to input your initial budget amount. Track your total budget and remaining budget directly on the homepage. The remaining budget updates dynamically as you add expenses.
</li>
  <li><strong>Adding Expenses:</strong> Use the expense form to add your expenses. <strong>Desc:</strong> Enter a brief description of your expense (e.g., groceries, rent). <strong>Amount:</strong> Input the expense amount. Click on "Add Expense" to include it in your budget.
<strong>Validation:</strong> Ensure both the description and amount fields are filled before adding an expense.
</li>
  <li><strong> Managing Expenses:</strong>View your added expenses in the expenses list. Each expense shows its description and amount. Modify or delete expenses as needed to maintain accurate budget tracking.</li>
  <li><strong>Visualizing Investment Distribution:</strong> The pie chart dynamically visualizes your investment distribution based on remaining budget percentages across predefined categories. Categories include Housing, Transportation, Food, Utilities, Entertainment, and Savings. Changes in the remaining budget automatically update the pie chart to reflect new allocations.</li>
</ul>

  </div>
  </>
  );
}

