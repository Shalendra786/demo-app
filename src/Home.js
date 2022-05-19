import './App.css';
import Navbaar from './components/Navbar';

function Home() {
  return (


    <div className="App">
      <Navbaar />
      <div className="App-header">
    
        
        <h1 data-testid="child" className='p_tag' >
          <b>
          Designer & Front-end Developer.
          </b>
        </h1>
        <p className='p_tag2'>
          
          I design and code beautifully simple things, and I love what I do.
       
        </p>
           
      
      <img src={"https://mattfarley.ca/img/mf-avatar.svg"} className="App-logo" alt="logo" />
       </div>
      <div className='about_me'>
        <img src='https://mattfarley.ca/img/hero.svg' className='table_img' alt="table_image" />
        </div>
        <div className='summary'>
          <div className='summary2'>
          <h2 className='summary_text'>Hi, I’m Shailendra. Nice to meet you.</h2>
          <p className='summary_text2'>Since beginning my journey as a WEB Developer nearly 1 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
          </p>
          </div>
        
         </div>
        
      
    </div>
  );
}


export default Home;
