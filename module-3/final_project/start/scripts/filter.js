const buttons = document.querySelectorAll("button");
let allImages = document.querySelectorAll('.image');

const toggleImages = (dataClass) => {
  // if(dataclass === "all") {
    
  //   allImages.forEach( image => image.style.display = "flex")
  // }
  
  // else{

  //   allImages.forEach( images => {
      
  //     if(image.dataset.class === dataclass){
  //       image.style.display = 'flex';
  //     }

  //     else{
  //       image.style,display = 'none';
  //     }



   // });
 // }
   dataClass === "all" 
   ? allImages.forEach( image =>  image.style.display = 'flex') 
   :allImages.forEach (image =>{
    image.dataset.class === dataClass
     ?image.style.display = 'flex'
    :image.style.display = 'none';

   })
 }



   const toggleActiveClass = (active) =>{
     buttons.forEach( button => button.classList.remove("active"));
     active.classList.add("active");
  }

  // for(let counter = 0; counter < buttons.length; counter++) {
  //   buttons[counter].addEventListener('click', function(){
  //    toggleImages(buttons[counter].dataset.class);

  //   });

     buttons.forEach( button => {
       button.addEventListener( 'click', () => {
         toggleImages(button.dataset.class);
          toggleActiveClass( button ); 
        
       })
     });
