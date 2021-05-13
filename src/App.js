import './App.css';



function App() {
  return (
    <>
    
    <div className="page-container">
        
        <div className="header">
          <h1>Learn to code by 
            watching others
          </h1>
          <br />
          <p>See how experienced developers solve problems in real-time.<br />
            Watching scripted tutorials is great, but understanding how<br />
            developers think is invaluable.
          </p>
        </div>
  
      <div className="form-container">
        <button className="offer"><span><strong>Try it free 7 days</strong> then $20/mo. thereafter</span>
        </button>
        <form id="form" noValidate>
          <input id="firstName" name="name" type="text" placeholder="Jonathan" title="Input your First name" required />
          <input id="lastName" name="lastName" type="text" placeholder="Last Name" title="Input your Last name" required />
          <input id="email" name="email" type="email" placeholder="Email Address" title="Input your email" required />
          <input id="password" name="password" type="password" placeholder="Password" title="Input any password" required />
          <input id="formSubmit" className="btn-submit" type="submit"  value="Claim your free trial" />
          <p>By clicking the button you are agreeing to our <a>Terms and Services</a></p>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
