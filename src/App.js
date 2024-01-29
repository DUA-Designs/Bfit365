 import {useEffect} from 'react'
 import background from './images/background.jpg';
 import facility1 from './images/pexels-cesar-galeão-3289711.jpg';
import facility2 from './images/pexels-the-lazy-artist-gallery-2247179.jpg';
import facility3 from './images/pexels-william-choquette-1954524.jpg';
import facility4 from './images/pexels-cleiton-silva-10343485.jpg';
import fitnessMan from './images/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club.jpg';
let x=1;
function App() {

  useEffect(()=>{
   
    if(x===1){
     setTimeout(()=>{
      document.getElementById("trainHard").classList.add("slideRight");
     },2000);
     
     setTimeout(()=>{
     
      document.getElementById("member").classList.add("showIt");
     },3000);


     x++;
    }



    let mybutton = document.getElementById("btn-back-to-top");
    let nav=document.getElementById("nav");

        function scrollFunction() {
       
          if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
          ) {
            mybutton.style.display = "flex";
         
            if(document.documentElement.scrollTop > 20){
              nav.classList.add("scrollStyle");
            }
            if(document.documentElement.scrollTop>document.getElementById("sec1").offsetHeight-150){
              document.getElementById('erin').classList.add("showIt");
              document.getElementById('gray').classList.add("showIt");
              
            }
            if(document.documentElement.scrollTop>document.getElementById("sec1").offsetHeight-50){
              document.getElementById('welcome').classList.add("showIt");
            }
            if(document.documentElement.scrollTop>document.getElementById("sec1").offsetHeight+document.getElementById("regular").offsetHeight-150){
              document.getElementById('womenBack').classList.add("slideMe");
              document.getElementById('results').classList.add("slideMe");
              setTimeout(()=>{
                document.getElementById('womenImage').classList.add("showIt");
              },1000);
            }
          } else {
            mybutton.style.display = "none";
            nav.classList.remove("scrollStyle");
            
          }
        }
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
        <div  id="mother" className='container-fluid' >
               <nav className="d-flex  p-2 align-items-center " id='nav'>
                         < div className="col-2  text-start"><button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa-solid fa-bars fs-4"></i></button></div>

                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                              <p>Try scrolling the rest of the page to see this option in action.</p>
                            </div>
                            </div>
                            <div className="col-10  text-white  "  id='nameContainer'> <span className='gymName'> Bfit365</span>  <span  className='studio'>Fitness</span><span className='studio'> Studio</span> <i className="fa-solid fa-dumbbell fs-4"></i></div>
                  
               </nav>
               <main  >
                 <section className="row position-relative " id='sec1'>
                  <div className="col-12 position-absolute start-0 banner text-center   text-white   ">
                    <h1 id="trainHard">Train Hard. Sweat Hard.</h1>
                    <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 mx-auto my-3">
                      <button className=" btn   p-2 my-2" id='member'>Become a member</button>
                    </div>
                  </div>
                 <div className="col-12 "><img src={background} className="img-fluid " alt="banner_image"></img></div>
                  
                 </section>

                 <section className='row text-center   position-relative my-5 py-5' id='regular'>
                 <div className='col-6 position-absolute  styleSection  mobileStyle'> </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12   my-3 '>
                    <p className='fs-2 hideIt' id='erin'>“Once you are exercising regularly, the hardest thing is to stop it.” </p>
                    <p className='fs-2 hideIt text-end' id='gray'>- Erin Gray</p>
                    <p className='fs-5 hideIt' id='welcome'>Welcome to Bfit365, your ultimate destination for fitness and well-being! At Bfit, we believe that a healthy lifestyle is the key to unlocking your full potential. Whether you're a seasoned fitness enthusiast or just starting your wellness journey, our state-of-the-art facility and expert team are here to support you every step of the way. </p>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4'><img src={fitnessMan} alt='fitness_man' className='img-fluid'></img></div>
                  <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 mx-auto my-3">
                      <button className="btn btn-dark border p-2">Start Sweating</button>
                    </div>
                 </section>
                 
                 <section className='d-flex flex-wrap  my-3'>
                  <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 position-relative '>
                  <div className='col-6 position-absolute top-0 start-0 styleSection pushLeft ' id='womenBack'> </div>
                  
                    <div className='col-12 p-5 hideIt' id='womenImage'><img src='https://static.wixstatic.com/media/fd6edb_a1a0ee9383b442ca92e1aca0c515beab~mv2.jpg/v1/crop/x_0,y_190,w_2636,h_1616/fill/w_1164,h_713,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-1151770247_edited.jpg' className='img-fluid' alt="banner_image"></img></div>
                    
                  </div>
                  <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12 p-2 pushRight ' id='results'>
                  
                      <p className='fs-2'>100% results Guaranteed.</p>
                      <p className='fs-5'>Why choose Bfit?We're more than just a gym - we're a community dedicated to helping you achieve your fitness goals, no matter how big or small. Our modern and spacious facility is equipped with top-of-the-line equipment, offering a diverse range of workout options to suit all fitness levels.</p>
                  </div>
                  
                 </section>

                 <div className='col-12 text-center'><h1>Workout Facility</h1></div>
                 <section className='row py-5 position-relative shadow rounded my-3'>
                
                 
                  
                  <div className='col-4 py-2'><img src={facility1} className='img-fluid' alt='facility_images'></img></div>
                  <div className='col-8 py-2'><img src={facility2} className='img-fluid' alt='facility_images'></img></div>
                  <div className='col-8 py-2'><img src={facility3} className='img-fluid' alt='facility_images'></img></div>
                  <div className='col-4 py-2'><img src={facility4} className='img-fluid' alt='facility_images'></img></div>
                 </section>


                 

               </main>
               <aside className='row p-3 my-2' id='area'>
                 <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12 my-2'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.254938191809!2d78.50558127368959!3d17.399548902457603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99bb24f7ded9%3A0xb6886ea32ec7f661!2sB-FIT365%20FITTNESS%20STUDIO!5e0!3m2!1sen!2sin!4v1706455960836!5m2!1sen!2sin"  title='Bfit365_Location'    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                  <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 shadow rounded my-2'>

                    <h3 className=' text-center'><i className="fa-solid fa-circle-question"></i></h3>
                    <h4 className=' text-center'>Need Help Reaching Us? </h4>
                    <p className=' text-center'>Contact on </p>
                    <ul>
                      <li><i className="fa-solid fa-phone"></i>&nbsp; 9052255588</li>
                      <li><i className="fa-solid fa-envelope"></i>&nbsp; bfit365gym@gmail.com</li>
                      </ul> </div>

               </aside>

               <footer >
                <section  className='py-5 text-white' style={{background:'#262626'}} id='list'>
                  <div className='row p-3'>
                    <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 text-center mx-auto my-2'><span className='gymName'> Bfit365</span></div>
                    <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 mx-auto my-2'>
                      <h5 >Features</h5>
                      <ul  >
                        <li>Become Member</li>
                        <li>About Us</li>
                        <li>Facility</li>
                        <li>Contact</li>
                      </ul>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 mx-auto my-2  '><h5>Location</h5>
                    <p  >3 rd floor, vertex complex, temple, above Nandini tiffins, opp. Shankerrmatt temple, New Nallakunta, Hyderabad, Telangana 500044</p></div>
                    <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 text-center mx-auto my-2'><h4>Opening Hours</h4>
                    <ul>
                      <li>Mon-Sat: 5AM to 10PM</li>
                      <li>Sun: 6AM to 1PM</li>
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
                <section className='p-3' style={{background:"#ff7300"}} id='powered'>
                  <p className='text-center p-2'>
                  &#169; 2024 By Bfit365. Powered by <a href='https://dua-designs.github.io/react-portfolio/'>Dua_Designs </a>.
                  </p>
                </section>

               </footer>


          

        </div>
  )
}

export default App;
