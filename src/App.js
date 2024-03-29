 import {useEffect, useState} from 'react'
 import emailjs from '@emailjs/browser';
 import background from './images/background.jpg';
 import facility1 from './images/pexels-cesar-galeão-3289711.jpg';
import facility2 from './images/pexels-the-lazy-artist-gallery-2247179.jpg';
import facility3 from './images/pexels-william-choquette-1954524.jpg';
import facility4 from './images/pexels-cleiton-silva-10343485.jpg';
import fitnessMan from './images/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club.jpg';
import DD from './images/DD.png';
 

let x=1;
function App() {
 
 
 async function sendEmail(e){
    e.preventDefault();
 

  
    let firstName=document.getElementById("firstName") ;
    let lastName=document.getElementById("lastName") ;
    let PhoneNo=document.getElementById("PhoneNo");
    let email=document.getElementById("email");
    let textMessage=document.getElementById("textMessage") ;
    let submitMessage=document.getElementById("submitMessage");

    if(!firstName.value || !lastName.value || !PhoneNo.value || !email.value || !textMessage.value){
 
      return "";
    }
          submitMessage.innerHTML=`<i class="gg-spinner  "></i>`;

     var templateParams = {
      user: `${firstName.value}(FirstName)  ${lastName.value}(LastName)`,
      emial_id: email.value,
      to_name:"Santhosh",
      PhoneNo:PhoneNo.value ,
      message:textMessage.value
    };
  
   
    emailjs.init("I4hRM78EXk7LdR9pC");
    let response=await emailjs.send('service_i12y271', 'template_beywuwg',templateParams,"I4hRM78EXk7LdR9pC" );
 
      await new Promise(resolve=>setTimeout(()=>resolve("This is just for loading time"),2000));
      
      
    if(response.status===200){
      await new Promise(resolve=>setTimeout(()=>resolve("This is just for loading time"),500));
      
      firstName.value="";
      lastName.value="";
      PhoneNo.value="";
      email.value="";
      textMessage.value="";
      submitMessage.innerHTML=`<i class="fa-solid fa-check text-center fs-3"></i>`;
      await new Promise(resolve=>setTimeout(()=>resolve("This is just for loading time"),1000));

      submitMessage.innerHTML=`Submit`;
      
      alert("We got your details!");
      
    }
    else{

   submitMessage.innerHTML=`<i class="fa-solid fa-xmark text-center fs-3"></i>`;
       await new Promise(resolve=>setTimeout(()=>resolve("This is just for loading time"),1000));
      submitMessage.innerHTML=`Submit`;
      alert("Failed to get your details...");

    }
     
     
      
  }
  async  function scrollFunction() {
    let nav=document.getElementById("nav");
    let mybutton = document.getElementById("btn-back-to-top");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "flex";
     
        if(document.documentElement.scrollTop > 20){
          nav.classList.add("scrollStyle");
        }
        
        if( document.documentElement.scrollTop>document.getElementById("becomeMember").offsetHeight-420 ){
          document.getElementById("main").classList.add("makeVisible");
        
        //await new Promise(resolve=>setTimeout(()=>resolve("this is for loading time"),1000));
       
        
       
        
       
            
          
         
        }
        if(document.documentElement.scrollTop>document.getElementById("becomeMember").offsetHeight-220){
   
           
       
          document.getElementById('erin').classList.add("showIt");
          document.getElementById('gray').classList.add("showIt");
          
        }
        if(document.documentElement.scrollTop>document.getElementById("becomeMember").offsetHeight-90){
          document.getElementById('welcome').classList.add("showIt");
        }
        if(document.documentElement.scrollTop>document.getElementById("becomeMember").offsetHeight+document.getElementById("regular").offsetHeight-250){
          document.getElementById('womenBack').classList.add("slideMe");
          document.getElementById('results').classList.add("slideMe");
          setTimeout(()=>{
            document.getElementById('womenImage').classList.add("showIt");
          },500);
        }
        if(document.documentElement.scrollTop >document.getElementById("facility").offsetHeight+document.getElementById("results").offsetHeight+20 ){
              
          for(let i=1;i<=4;i++){
            if(i<3){document.querySelector(`#facility div:nth-child(${i}) img`).classList.add("showIt");}
            else{
              if(document.documentElement.scrollTop >document.getElementById("facility").offsetHeight+document.getElementById("results").offsetHeight+document.querySelector("#facility img").offsetHeight +20 ){
                document.querySelector(`#facility div:nth-child(${i}) img`).classList.add("showIt");
              }
            }
                
          }
        }
      } else {
        mybutton.style.display = "none";
        nav.classList.remove("scrollStyle");
        
      }
    }

  useEffect(()=>{
    if(document.getElementById("becomeMember").childNodes.length){
      
      document.getElementById("nameContainer").classList.add("changeFontColor");
      const gymName=document.querySelectorAll(".gymName");
        gymName[0].style.border="5px solid white";
        gymName[1].style.border="3px solid white";
        
     
    }
   
    if(x===1){
    if(document.getElementById("bannerImage")){
      setTimeout(()=>{
        document.getElementById("trainHard").classList.add("slideRight");
      },2500);
      
      setTimeout(()=>{
      
       document.getElementById("member").classList.add("showIt");
      },3500);
    }
 


     x++;
    }
    let nodeList=document.querySelectorAll('.closeDashboard');
     for (let i=0;i<nodeList.length;i++){
       nodeList[i].addEventListener("click",()=>{
        document.getElementById("close").click();
       });
     }



    let mybutton = document.getElementById("btn-back-to-top");


    
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener("click", backToTop);
        
        function backToTop() {
       
           document.body.scrollTop = 0;
           document.documentElement.scrollTop = 0;
        }

// When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    
  scrollFunction();
    };
 

  });
  return (
        <div  id="mother"   >
               <nav className="d-flex  p-2 align-items-center " id='nav'>
                         < div className="col-2  text-start"><button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa-solid fa-bars fs-4"></i></button></div>

                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Features</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" id='close'></button>
                            </div>
                            <div className="offcanvas-body" id='dashItems'>
                              <ul>
                                <li><a className='p-3 closeDashboard' href='#becomeMember'>Become member</a></li>
                                <li><a className='p-3 closeDashboard' href='#about'>About Us</a></li>
                                <li><a className='p-3 closeDashboard' href='#workFacility'>Facility</a></li>
                                <li><a className='p-3 closeDashboard' href='#hitUsUp'>Contact Us</a></li>
                                 
                              </ul>
                            </div>
                            </div>

                            <div className="col-10    d-flex flex-wrap "  id='nameContainer'> <span className='col-lg-6 col-md-6 col-sm-12 ' id='gymNameContainer'><span className='gymName '> B-FIT365</span></span><span className='col-lg-6 col-md-6 col-sm-12' id='studioContainer'>  <span  className='studio  '>Fitness</span><span className='studio  '> Studio</span> <i className="fa-solid fa-dumbbell fs-4 "></i></span></div>
                  
               </nav>
               <section className="row position-relative " id='becomeMember'>
                  <div className="col-12 position-absolute start-0 banner text-center   text-white   ">
                    <h1 id="trainHard">Train Hard. Sweat Hard.</h1>
                    <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 mx-auto my-3">
                      <a href='#messageContainer'><button className=" btn   p-2 my-2" id='member' >Become a member</button></a>
                    </div>
                  </div>
                 <div className="col-12 "><img src={background} className="img-fluid " alt="banner_image" id='bannerImage'></img></div>
                  
                 </section>

               <main  id='main'>
                <h1 className='p-4 text-center' id='about'>About Us</h1>
                 <section className='container d-flex flex-wrap text-center   position-relative my-5   ' id='regular'>
                 <div className='col-6 position-absolute  styleSection  mobileStyle someOtherStyle p-2'> </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12   my-3 p-2'>
                    <p className='fs-2 hideIt' id='erin'>“Once you are exercising regularly, the hardest thing is to stop it.” </p>
                    <p className='fs-2 hideIt text-end' id='gray'>- Erin Gray</p>
                    <p className='fs-5 hideIt' id='welcome'>Welcome to Bfit365, your ultimate destination for fitness and well-being! At Bfit, we believe that a healthy lifestyle is the key to unlocking your full potential. Whether you're a seasoned fitness enthusiast or just starting your wellness journey, our state-of-the-art facility and expert team are here to support you every step of the way. </p>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4 '><img src={fitnessMan} alt='fitness_man' className='img-fluid'></img></div>
                  <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 mx-auto my-3">
                     <a href='#messageContainer'>  <button className="btn btn-dark border p-2">Start Sweating</button></a>
                    </div>
                 </section>
                 
                 <section className='d-flex flex-wrap  my-3   px-2'>
                  <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 position-relative '>
                    <div className='col-6 position-absolute top-0 start-0 styleSection pushLeft ' id='womenBack'> </div>
                  
                    <div className='col-12 p-5 hideIt' id='womenImage'><img src='https://static.wixstatic.com/media/fd6edb_a1a0ee9383b442ca92e1aca0c515beab~mv2.jpg/v1/crop/x_0,y_190,w_2636,h_1616/fill/w_1164,h_713,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-1151770247_edited.jpg' className='img-fluid' alt="banner_image"></img></div>
                    
                  </div>
                  <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12 p-2 pushRight ' id='results'>
                  
                      <p className='fs-2'>Why choose Bfit?</p>
                      <p className='fs-5'>We're more than just a gym - we're a community dedicated to helping you achieve your fitness goals, no matter how big or small. Our modern and spacious facility is equipped with  variety of equipment, offering a diverse range of workout options to suit all fitness levels.</p>
                  </div>
                  
                 </section>

                 <div className='col-12 text-center' id='workFacility'><h1>Workout Facility</h1></div>
                 <section className='row  position-relative  my-3 py-5 px-2' id='facility'>
                
                 
                  
                  <div className='col-4 py-2'><img src={facility1} className='img-fluid hideIt' alt='facility_images'></img></div>
                  <div className='col-8 py-2'><img src={facility2} className='img-fluid  hideIt' alt='facility_images'></img></div>
                  <div className='col-8 py-2'><img src={facility3} className='img-fluid hideIt' alt='facility_images'></img></div>
                  <div className='col-4 py-2'><img src={facility4} className='img-fluid  hideIt' alt='facility_images'></img></div>
                 </section>


                 

               </main>

                <section className='container-fluid my-5 px-2' id='hitUsUp'>
                  <div className='row text-center my-5 py-3'>
                    <h1>Hit Us Up Anytime</h1>
                  </div>
                  <div className='row p-4  ' id='messageContainer'>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-success'  id='parallaxEffect'> </div>
                    <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12  bg-dark text-center text-white  ' id='message'>
                       <h2 className='p-4 col-12'style={{color:"#ff7300",fontWeight:700}}>Send A Message</h2>
                       <form className='col-12 d-flex flex-wrap  text-start py-4' id='form'  onSubmit={(event)=>sendEmail(event)}>
                               <div className='col-lg-6 col-md-6 col-12  my-2'> <div className='d-grid p-2'><label >First Name</label><input type='text' id='firstName' required></input></div></div>
                               <div className='col-lg-6 col-md-6 col-12  my-2'> <div className='d-grid p-2'><label >Last Name</label><input type='text' id='lastName' required></input></div></div>
                               <div className='col-lg-6 col-md-6 col-12  my-2'> <div className='d-grid p-2'><label >Phone No</label><input type='text' id='PhoneNo' required></input></div></div>
                               <div className='col-lg-6 col-md-6 col-12  my-2'> <div className='d-grid p-2'><label >Email</label><input type='email' id='email' required></input></div></div>
                               <div className='col-lg-6 col-md-6 col-12  my-2'> <div className='d-grid p-2'><label >Leave Us a message...</label><textarea rows={3} id='textMessage'  required></textarea></div></div>
                               <div className='col-lg-6 col-md-6 col-12  my-2'> <div className='d-grid  p-2 align-items-center'><button className='btn btn-light p-3 ' type='submit'  id='submitMessage'>Submit</button></div></div>

                         
                        </form>
                    </div>
                  </div>
                

                </section>

               <aside className='row   my-2   px-3' id='area'>
                 <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12 my-2'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.254938191809!2d78.50558127368959!3d17.399548902457603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99bb24f7ded9%3A0xb6886ea32ec7f661!2sB-FIT365%20FITTNESS%20STUDIO!5e0!3m2!1sen!2sin!4v1706455960836!5m2!1sen!2sin"  title='Bfit365_Location'    allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                  <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 shadow rounded my-2'>

                    <h3 className=' text-center'><i className="fa-solid fa-circle-question"></i></h3>
                    <h4 className=' text-center'>Need Help Reaching Us? </h4>
                    <p className=' text-center'>Contact on </p>
                    <ul className=' '>
                      <li className='text-start'><i className="fa-solid fa-phone "></i>&nbsp; 9052255588</li>
                      <li className='text-start'><i className="fa-solid fa-envelope "></i>&nbsp; bfit365gym@gmail.com</li>
                      </ul>
                  </div>

               </aside>

               <footer >
                <section  className=' text-white   px-2 py-5' style={{background:'#262626'}} id='list'>
                  <div className='row p-3'>
                    <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 text-center mx-auto my-2'><span className='gymName'> B-FIT365</span>
                     <p style={{color:"#ff7300"}} className='p-3'>Fitness Studio <i className="fa-solid fa-dumbbell fs-4 "></i></p>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 mx-auto my-2'>
                      <h4 >Features</h4>
                      <ul  id='featuresLink'>
                                <li><a className='p-1 closeDashboard' href='#becomeMember'>Become member</a></li>
                                <li><a className='p-1 closeDashboard' href='#about'>About Us</a></li>
                                <li><a className='p-1 closeDashboard' href='#workFacility'>Facility</a></li>
                                <li><a className='p-1 closeDashboard' href='#hitUsUp'>Contact Us</a></li>
                      </ul>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 mx-auto my-2  '><h4>Location</h4>
                    <p  >3 rd floor, vertex complex, temple, above Nandini tiffins, opp. Shankerrmatt temple, New Nallakunta, Hyderabad, Telangana 500044</p></div>
                    <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 text-center mx-auto my-2'><h4>Opening Hours</h4>
                    <ul>
                      <li>Mon-Sat : 5AM to 10PM</li>
                      <li>Sun : 6AM to 1PM</li>
                      </ul>
                      <div className='row '>
                     <div className='col-3'><i className="fa-brands fa-facebook-f fs-5"></i></div>
                     <div className='col-3'><i className="fa-brands fa-instagram fs-5"></i></div>
                     <div className='col-3'><i className="fa-brands fa-twitter fs-5"></i></div>
                     <div className='col-3'><i className="fa-brands fa-youtube fs-5"></i></div>
                      </div>
                      </div>
                     
                    
                  </div>
                     
                </section>
                <button   className="btn btn-floating z-2" id="btn-back-to-top"><i className="fas fa-arrow-up"></i></button>
                <section className='p-4' style={{background:"#ff7300"}} id='powered'>
                  <p className='text-center p-2'>
                  &#169; 2024 B-fit365. Powered by <a href='https://dua-designs.github.io/react-portfolio/'><img src={DD} alt='Creator' width={50} height={50}></img></a>
                  </p>
                </section>

               </footer>


          

        </div>
  )
}

export default App;
