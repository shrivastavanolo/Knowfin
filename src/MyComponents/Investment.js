import {React, useState} from 'react'


const questions = [
  {
    question: "What is your investment goal?",
    options: [
      { text: "Long-term wealth preservation", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "High growth potential", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Steady income and potential appreciation", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Diversified portfolio growth", score: { gold: 0, stocks: 1, property: 1, bonds: 1, mutualFunds: 1, etfs: 1, cryptocurrencies: 1, reits: 1, commodities: 1, optionsFutures: 1, peerToPeerLending: 1 } },
    ]
  },
  {
    question: "What is your risk tolerance?",
    options: [
      { text: "Low", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "High", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Moderate", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
    ]
  },
  {
    question: "How much liquidity do you need?",
    options: [
      { text: "High liquidity", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Medium liquidity", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Low liquidity", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
    ]
  },
  {
    question: "What is your investment horizon?",
    options: [
      { text: "Short-term", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Long-term", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Medium to long-term", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
    ]
  },
  {
    question: "How knowledgeable are you about the investment options?",
    options: [
      { text: "I understand physical assets well", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "I have a good grasp of market trends and financial reports", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "I am familiar with precious metals and their market", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
    ]
  },
  {
    question: "What is your primary concern about investments?",
    options: [
      { text: "Inflation and currency devaluation", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Market volatility and economic downturns", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Maintenance and management", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
    ]
  },
  {
    question: "How much capital do you have to invest?",
    options: [
      { text: "Limited capital", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Sufficient capital for large investments", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Moderate capital", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
    ]
  },
  {
    question: "Do you prefer tangible or intangible assets?",
    options: [
      { text: "Tangible assets", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Intangible assets", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Either is fine", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
    ]
  },
  {
    question: "How do you prefer to manage your investments?",
    options: [
      { text: "Hands-on management", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Passive management", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Minimal management", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
    ]
  },
  {
    question: "What is your tax situation?",
    options: [
      { text: "Prefer investments with lower tax implications", score: { gold: 3, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Comfortable with potentially higher tax implications", score: { gold: 0, stocks: 0, property: 3, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
      { text: "Can handle capital gains taxes", score: { gold: 0, stocks: 3, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 } },
    ]
  },
];

export default function Investment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ gold: 0, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (score) => {
    const newScores = { ...scores };
    for (const key in score) {
      newScores[key] += score[key];
    }
    setScores(newScores);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setScores({ gold: 0, stocks: 0, property: 0, bonds: 0, mutualFunds: 0, etfs: 0, cryptocurrencies: 0, reits: 0, commodities: 0, optionsFutures: 0, peerToPeerLending: 0 });
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const getHighestScore = () => {
    const maxScore = Math.max(...Object.values(scores));
    const highestScores = Object.keys(scores).filter(key => scores[key] === maxScore);
    return highestScores.join(', ').toUpperCase();
  };

  return (
    <div className="Appret">
      <div className='mid'>
      <h1>Discover Your Ideal Investment Path!</h1>
      <p>Embark on a journey to uncover your perfect investment match from a diverse array of options. Explore the timeless allure of gold, the dynamic world of stocks, the solidity of property, the stability of bonds, the versatility of mutual funds, the innovation of ETFs, the intrigue of cryptocurrencies, the reliability of REITs, the potential of commodities, the strategic realm of options & futures, and the collaborative spirit of peer-to-peer lending! Delve into each category, weigh your preferences, and discover which investment avenue aligns best with your financial aspirations and lifestyle goals.</p>
      <hr/>
      </div>
      <h1 style={{margin: "50px", fontFamily:"neon"}}>Investment Quest<img src="bar.gif" style={{height:"50px", width:"50px", opacity:"100%"}}/></h1>
    
      {showResult ? (
        <div className="result-section">
          <h2>Your recommended investments are: {getHighestScore()}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-section">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option.score)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
      <div style={{color:"white", padding:"50px", margin:"50px", textAlign:"justify"}}>
      <h2>How to Use This Quiz?</h2>
  <p>
    This quiz is designed to help you make informed decisions about your investments across a wide spectrum of options:
  </p>
  <ul>
    <li><strong>Gold:</strong> Historically valued for wealth preservation and as a hedge against inflation.</li>
    <li><strong>Stocks:</strong> Represent ownership in companies and offer growth potential through dividends and capital gains.</li>
    <li><strong>Property:</strong> Provides steady income through rent and potential appreciation in value.</li>
    <li><strong>Bonds:</strong> Issued by governments or corporations to raise funds, offering fixed income and lower risk compared to stocks.</li>
    <li><strong>Mutual Funds:</strong> Pools of money from multiple investors invested in a diversified portfolio of stocks, bonds, or other assets.</li>
    <li><strong>ETFs (Exchange-Traded Funds):</strong> Similar to mutual funds but traded on stock exchanges, providing diversification and flexibility.</li>
    <li><strong>Cryptocurrencies:</strong> Digital currencies operating on decentralized technology, known for high volatility and potential high returns.</li>
    <li><strong>REITs (Real Estate Investment Trusts):</strong> Companies that own, operate, or finance income-generating real estate, offering dividends and potential capital appreciation.</li>
    <li><strong>Commodities:</strong> Physical goods such as oil, gold, or agricultural products traded on commodities exchanges.</li>
    <li><strong>Options & Futures:</strong> Derivative contracts that allow investors to speculate or hedge against price movements in various assets.</li>
    <li><strong>Peer-to-Peer Lending:</strong> Online platforms connecting borrowers with lenders, offering potentially higher returns than traditional savings accounts.</li>
  </ul>
  <p>
    By answering the quiz questions based on your financial goals, risk tolerance, investment horizon, and asset preferences, you'll receive personalized recommendations tailored to your profile. Use these insights as a starting point for further research and consultation with financial advisors to align your investment choices with your financial objectives and circumstances.
  </p>
  <p>
    Investing involves risks, and it's crucial to diversify your portfolio and conduct thorough due diligence before making investment decisions.
  </p>
    </div>
    </div>
  );
};