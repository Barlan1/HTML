# React JS HTML CSS

<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport"
           content="width=device-width, initial-scale=1.0">
  <title>Resume</title>
   
  <style>

    body{
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f9f9f9;
      color: #333;
      }
      
   nav{
      text-align: center;
      background-color: #353238 ;
      padding: 15px 20px;
    }

   nav a{
    color: white;
    padding: 10px 15px;
    font-size: 18px;
    text-decoration: none;
   }
      
   a:hover{
    background-color: #57545c;
    border-radius: 5px;
   }
      
   header{
      text-align: center;
      padding: 40px 20px;
      background: #ececec;
    }
    
   .content{
     display: flex;
     flex-wrap: wrap;
     gap:20px;
     padding: 20px;
     justify-content: center;
   }
      
   .card{
    flex:1 1 300px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0,0,0.1);
   }
      
   .card h3{
    margin-top:0;
    color:#2d2d2d;
   } 
      
   .testimonials{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:15px;
    padding: 20px;
   }
      
   .testimony{
    word-wrap: break-word;
    background: #ffffff;
    padding: 15px;
    border-left: 4px solid #555;
    border-radius: 8px;
    font-style: italic;
    box-shadow:0 1px 4px rgba(0, 0,0,0,0.1);
   }
      
  footer{
    text-align: center;
    color:white;
    background-color: rgb(55, 62, 65);
    padding: 12px;
    margin-top: auto;
    }
      
   @media(max-width: 768px){
    .testimonials{
      grid-template-columns: 1fr;
    }
   }
      
  </style>
  </head>
  
  <body>
    
    <nav>
      <a href="#home">About Me</a>
      <a href="#work">Work</a>
      <a href="https://github.com/Barlan1/vikas-portfolio">Projects</a>
      <a href="#resume">Resume</a>
    </nav> 
   
   <header id="about" >
      <h1>About Me</h1>
      <p>I am passionate web developer. </p>
      <h2>Web Developer and Designer</h2>
   </header>

   <div class="content">
     <div class="card">
          <h3>Portfolio Highlights</h3>
           <ul>
            <li>Responsive HTML Layout</li>
            <li>E-commerce storefront</li>
            <li>Interactive Form design</li>
            <li>prototype Landing pages</li>
            <li>Event countdown widget</li>
           </ul>
      </div>
      <div class="card">
        <h3>Career Achievements</h3>
        <p>Currently freelancing to flex my web muscles</p>
        <p>Upcoming Frontend Developer[Intern] at XYZ
          Headed major product redesigns resulting in a 40%
          increase in user engagement.</p>
        <a href="https://www.linkedin.com/in/vikas-meena-4ab61460">view my LinkedIn Profile</a>
        <h3>Community Involvement</h3>
        <p>Active participant in local and online developer forums.
          Regularly contribute to web development blogs and GitHub projects.</p>
        <a href="https://www.github.com/barlan1">Here is Github profile</a>
      </div>
      
      <div class="card">
        <h3>Academic Qualifications</h3>
        <p>B. Tech(Computer Science)
          from NIT Warangal
        </p>
        <p>Specializations:</p>
        <ul>
          <li>Systems Analysis</li>
          <li>Advanced JavaScript Techniques</li>
          <li>Web Accessibility Standards</li>
          <li>Performance Optimizations in Web Applications</li>
          <li>Cloud Computing </li>
          <li>Security in Web Applications</li>
          <li>Advanced Algorithms</li>
        </ul>
      </div>
  </div>

  <div class="testimonials">
     <div class="testimony">
        "Vikas consistently delivers high quality,
        innovative solutions that never exceed project
        expectation." -George Washington, Project America
     </div>
     <div class="testimony">
        Vikas is known for his precise attention to 
        detail and his ability to mentor younger
        developers. David Goody, UI Designer
     </div>
  </div>      
   
  <footer>&#169; copyright 2025</footer>
  </body>
   
  </html>
