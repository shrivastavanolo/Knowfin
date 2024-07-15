import {React,useState} from 'react'
// import LlamaAI from 'llamaai';

export default function Saving() {
  const [income, setIncome] = useState('');
  const [exp, setExp] = useState('');
  const [misc, setMisc] = useState('');
  const [res, setRes] = useState(null);

  async function calc() {
    const ca = parseFloat(income);
    const ra = parseFloat(exp);
    const cs = misc;
    const str3 = `Give me a 1 line monthly savings plan for monthly income = ${ca}(INR) and monthly expenditure = ${ra}(INR). Take into account that ${cs}. Use the 50/30/20 rule on this.`;
    console.log(str3);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
      {
          headers: {
              Authorization: "Bearer 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",
              "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({"inputs": str3}),
      }
  );
  const result = await response.json();
  let rez = JSON.stringify(result).split("\\n");
  // console.log();
  // return result;
    setRes(rez[1].slice(0,-3));
  }
  return (
    <div className='Appret'>
      <div className='mid'>
      <h1>Get Your Personalised Monthly Savings Plan</h1>
      <p>Our advanced Savings Genie is designed to help you manage your finances more effectively. By inputting your income, average monthly expenditure, and any other optional details you wish to consider, the Genie will generate a customised savings plan just for you. This AI-driven approach ensures that your plan is tailored to your specific financial situation and goals, helping you save smarter and achieve your objectives. Try it out below and take the first step towards a more secure financial future!</p>
      <hr/>
      </div>
      <br></br>
      <h1 style={{fontFamily:"neon", opacity:"100%" ,color:"white"}}>Savings Genie <img src="boing.gif" style={{height:"50px", width:"50px", opacity:"100%"}}></img></h1>
      <form className='mine' onSubmit={e => { e.preventDefault(); calc(); }}>
      <div className="mb-3">
        <label htmlFor="monthlyIncome" className="">What is your monthly income?</label>
        <input type="number" className="" value={income} onChange={e => setIncome(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="monthlyExp" className="">How much do you spend monthly on an average?</label>
        <input type="number" className="" value={exp} onChange={e => setExp(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="misc" className="">Any other financial details to take into account? (optional)</label>
        <input className="" value={misc} onChange={e => setMisc(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-success">Get your Savings Plan</button>
      </form>
      <hr/>
      <br></br>
      <h1 id="ress" style={{color: "darkgreen", fontWeight:"bold", fontFamily:"neon"}}>Your Savings Plan</h1>
      {res !== null && <p style={{marginLeft:"150px",marginRight:"150px",paddingLeft:"150px",paddingRight:"150px"}}><br></br> <strong>{res}</strong></p>}
    </div>
  )
}
