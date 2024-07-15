import {React,useState} from 'react'

export default function Retirement() {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [annualReturnPre, setAnnualReturnPre] = useState('');
  // const [annualReturnPost, setAnnualReturnPost] = useState('');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [totalCorpus, setTotalCorpus] = useState(null);
  const [retirementCorpusNeeded, setRetirementCorpusNeeded] = useState(null);

  const lifeExpectancy = 70;
  const inflationRate = 3;

  function calculateRetirement() {
    const ca = parseFloat(currentAge);
    const ra = parseFloat(retirementAge);
    const cs = parseFloat(currentSavings);
    const ms = parseFloat(monthlySavings);
    const arp = parseFloat(annualReturnPre);
    // const arpost = parseFloat(annualReturnPost);
    const me = parseFloat(monthlyExpenses);

    const monthlyReturnPre = arp / 12 / 100;
    const monthlyReturnPost = arp / 12 / 100;
    const monthlyInflationRate = inflationRate / 12 / 100;

    const savingMonths = (ra - ca) * 12;
    const withdrawingMonths = (lifeExpectancy - ra) * 12;

    const futureValueCurrentSavings = cs * Math.pow(1 + monthlyReturnPre, savingMonths);
    const futureValueMonthlySavings = ms * (Math.pow(1 + monthlyReturnPre, savingMonths) - 1) / monthlyReturnPre * (1 + monthlyReturnPre);

    const totalCorpusCalc = futureValueCurrentSavings + futureValueMonthlySavings;

    const adjustedMonthlyExpensesPostRetirement = me * Math.pow(1 + monthlyInflationRate, savingMonths);

    const retirementCorpusNeededCalc = adjustedMonthlyExpensesPostRetirement * (1 - Math.pow(1 + monthlyReturnPost, -withdrawingMonths)) / monthlyReturnPost;

    setTotalCorpus(totalCorpusCalc.toFixed(2));
    setRetirementCorpusNeeded(retirementCorpusNeededCalc.toFixed(2));
}

  return (
    <div className="Appret">
      <div className='mid'>
      <h1>Calculating Retirement Benefits using Our Calculator</h1>
      <p>The calculator uses rules of compound interest to determine the total corpus you will be able to accumulate as per the investments made post-maturity. Retiring comfortably is not an impossibility if you know how to invest and save wisely. To know how much return of investments you will be able to gain, you need the services of a retirement calculator. Remember that planning for the future is a mixture of both fiscal and investment prudence.
Retirement planning is essential for every citizen and especially for salaried and self-employed. We have a benchmarked retirement planning calculator which is at par with the best in the business. </p>
      <hr/>
      </div>
      <h1 style={{margin: "50px", fontFamily:"neon"}}>Retirement Calculator<img src="purple.gif" style={{height:"50px", width:"50px", opacity:"100%"}}/></h1>
      <form onSubmit={e => { e.preventDefault(); calculateRetirement(); }}>
        <label>
          How old are you?:
          <input type="number" value={currentAge} onChange={e => setCurrentAge(e.target.value)} />
        </label>
        <br />
        <label>
          At what age do you plan to retire?:
          <input type="number" value={retirementAge} onChange={e => setRetirementAge(e.target.value)} />
        </label>
        <br />
        <label>
          Your Current Savings in INR:
          <input type="number" value={currentSavings} onChange={e => setCurrentSavings(e.target.value)} />
        </label>
        <br />
        <label>
          Your Monthly Savings in INR:
          <input type="number" value={monthlySavings} onChange={e => setMonthlySavings(e.target.value)} />
        </label>
        <br />
        <label>
          What percentage of your annual investments do you earn back currently? (%):
          <input type="number" value={annualReturnPre} onChange={e => setAnnualReturnPre(e.target.value)} />
        </label>
        <br />
        <label>
          Desired Monthly Expenses Post-Retirement (INR):
          <input type="number" value={monthlyExpenses} onChange={e => setMonthlyExpenses(e.target.value)} />
        </label>
        <br />
        <button className="btn btn-success" type="submit">GO</button>
      </form>
      <hr/>
      <br></br>
      <h1 id="ress" style={{color: "darkgreen", fontWeight:"bold", fontFamily:"neon"}}>Results</h1>
      {totalCorpus !== null && <p>Total Corpus at the Start of Retirement: <strong>₹{totalCorpus}</strong></p>}
      {retirementCorpusNeeded !== null && <p>Annual Saving Amount starting now: <strong>₹{(retirementCorpusNeeded/(retirementAge-currentAge)).toFixed(2)}</strong></p>}
    </div>
  );
}
