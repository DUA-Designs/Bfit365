 import {useState,useEffect} from 'react'
 import background from './images/background.jpg';
 import facility1 from './images/pexels-cesar-galeão-3289711.jpg';
import facility2 from './images/pexels-the-lazy-artist-gallery-2247179.jpg';
import facility3 from './images/pexels-william-choquette-1954524.jpg';
import facility4 from './images/pexels-cleiton-silva-10343485.jpg';
import fitnessMan from './images/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club.jpg';

function App() {

  useEffect(()=>{

    let mybutton = document.getElementById("btn-back-to-top");
        function scrollFunction() {
          if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
          ) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
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
        <div  id="mother"  >
               <nav className="p-1 d-flex flex-wrap mb-3  align-items-center">
                         < div className="col-lg-1 col-md-2 col-sm-3 col-xs-4 p-2 "><button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa-solid fa-bars fs-1"></i></button></div>

                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                              <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                              <p>Try scrolling the rest of the page to see this option in action.</p>
                            </div>
                            </div>
                            <div className="col-lg-11 col-md-10 col-sm-9 col-xs-8  text-white p-2"  id='nameContainer'> <span className='gymName'> Bfit365</span>  <span  className='studio'>Fitness</span><span className='studio'> Studio</span> <i className="fa-solid fa-dumbbell fs-4"></i></div>
                  
               </nav>
               <main className="container">
                 <section className="row position-relative py-4">
                  <div className="col-12 position-absolute start-0 top-50  text-center   text-white p-3 ">
                    <h1 id="trainHard">Train Hard. Sweat Hard.</h1>
                    <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 mx-auto">
                      <button className=" btn   p-2" id='member'>Become a member</button>
                    </div>
                  </div>
                 <div className="col-12 "><img src={background} className="img-fluid " alt="banner_image"></img></div>
                  
                 </section>
                 <section className='row text-center   position-relative my-5 py-5'>
                 <div className='col-6 position-absolute  styleSection  mobileStyle'> </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12   my-3 '>
                    <p className='fs-2'>“Once you are exercising regularly, the hardest thing is to stop it.” </p>
                    <p className='fs-2 text-end'>- Erin Gray</p>
                    <p className='fs-5'>Welcome to Bfit365, your ultimate destination for fitness and well-being! At Bfit, we believe that a healthy lifestyle is the key to unlocking your full potential. Whether you're a seasoned fitness enthusiast or just starting your wellness journey, our state-of-the-art facility and expert team are here to support you every step of the way. </p>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4'><img src={fitnessMan} alt='fitness_man' className='img-fluid'></img></div>
                  <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 mx-auto my-3">
                      <button className="btn btn-dark border p-2">Start Sweating</button>
                    </div>
                 </section>
                 
                 <section className='row position-relative my-3'>
                  <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 '>
                  
                    <div className='col-12 p-5'><img src='https://static.wixstatic.com/media/fd6edb_a1a0ee9383b442ca92e1aca0c515beab~mv2.jpg/v1/crop/x_0,y_190,w_2636,h_1616/fill/w_1164,h_713,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-1151770247_edited.jpg' className='img-fluid' alt="banner_image"></img></div>
                    
                  </div>
                  <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12 p-2  '>
                  
                      <p className='fs-2'>100% results Guaranteed.</p>
                      <p className='fs-5'>Why choose Bfit?We're more than just a gym - we're a community dedicated to helping you achieve your fitness goals, no matter how big or small. Our modern and spacious facility is equipped with top-of-the-line equipment, offering a diverse range of workout options to suit all fitness levels.</p>
                  </div>
                  <div className='col-6 position-absolute top-0 start-0 styleSection '> </div>
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
                 <div className='col-lg-9 col-md-8 col-sm-12 col-xs-12 my-2'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.254938191809!2d78.50558127368959!3d17.399548902457603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99bb24f7ded9%3A0xb6886ea32ec7f661!2sB-FIT365%20FITTNESS%20STUDIO!5e0!3m2!1sen!2sin!4v1706455960836!5m2!1sen!2sin"  title='Bfit365_Location'    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                  <div className='col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2 shadow rounded my-2'>

                    <h3 className=' text-center'><i class="fa-solid fa-circle-question"></i></h3>
                    <h4 className=' text-center'>Need Help Reaching Us? </h4>
                    <p className=' text-center'>Contact on </p>
                    <ul>
                      <li><i class="fa-solid fa-phone"></i> 9052255588</li>
                      <li><i class="fa-solid fa-envelope"></i> bfit365gym@gmail.com</li>
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
                     <div className='col-3'><i class="fa-brands fa-facebook-f fs-5"></i></div>
                     <div className='col-3'><i class="fa-brands fa-instagram fs-5"></i></div>
                     <div className='col-3'><i class="fa-brands fa-twitter fs-5"></i></div>
                     <div className='col-3'><i class="fa-brands fa-youtube fs-5"></i></div>
                      </div>
                      </div>
                     
                    
                  </div>
                     
                </section>
                <button type="button" className="btn   btn-floating z-2"id="btn-back-to-top"><i className="fas fa-arrow-up"></i></button>
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
