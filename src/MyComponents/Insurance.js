import React from 'react'

export default function Insurance() {
  return (
<>
      <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators" >
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner" >
      <div className="carousel-item active">
      <a href="https://www.policyx.com/health-insurance/health-insurance-india/" target="_blank">
        <img src="critical_ill_insu.jpeg" className="d-block w-100" alt="..."/>
        </a>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="leh">Health Insurance</h5>
          <p className='leh'>Browse Health Insurance Plans for you and your family.</p>
        </div>
      </div>
      <div className="carousel-item">
        <a href="https://www.policyx.com/life-insurance/" target="_blank">
        <img src="Life-Insurance.jpg" className="d-block w-100" alt="..."/>
        </a>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='leh'>Life Insurance</h5>
          <p className='leh'>Protect your loved ones even after you are gone.</p>
        </div>
      </div>
      <div className="carousel-item">
        <a href="https://www.policyx.com/term-insurance/" target="_blank">
        <img src="term.jpg" className="d-block w-100" alt="..."/>
        </a>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='leh'>Term Insurance</h5>
          <p className='leh'>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>

  </div>
  <div style={{color:"white", padding:"50px", margin:"50px", textAlign:"justify"}}>
    <h2>Browse top Insurance policies</h2>
    <p>PolicyX.Com Insurance Price Index: India's first Health and Term Insurance Price Index. Get actionable insights into recent pricing trends of health and term plans offered by top insurance companies in India. Advanced data analytics to demonstrate quarterly shifts in pricing based on multiple factors like coverage, gender, age, and smoker/non-smoker status.</p>
    <h3>How PolicyX.com Works?</h3>
    <ol>
      <li><strong>Tell Us About Yourself:</strong> Share basic details like name, age, occupation, and income. The algorithm uses this information to find the best premium quotes from top insurers and to get you the most cost efficient solution.</li>
      <li>
    <strong>Compare & Select the Right Plan:</strong> Check and compare all quotes based on premium and benefits. Choose the plan that fits your needs and budget after careful consideration.</li>
    <li>
    <strong>Pay & Get Policy Within 5 Minutes:</strong> Pay the premium online via debit card, credit card, or net banking. A soft copy of the policy is usually available instantly. Assistance is provided if additional documentation or a medical check-up is required.
    </li>
    <li>
    <strong>Always There For You:</strong> Access customer service for free after purchasing a policy. Customer support is available for queries, policy changes, or claim support to ensure all queries are handled with care.
    </li>       
    </ol>
    </div>
</>  
  )
}
