import logo from './logo.svg';
import './App.css';
import  Navbaar  from './components/Navbar';

function Home() {
  return (
    

    <div className="App">
      <Navbaar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Everyone this is <code>Shailendra Mishra</code>.
        </p>
       <p>
         I have started working with WITMATES TECHNOLOGIES as a React Developer.
       </p>
       
       
       
       
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default Home;
