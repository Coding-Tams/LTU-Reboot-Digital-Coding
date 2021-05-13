const buttons = document.querySelectorAll("buttons");
let allImages = document.querySelectorAll('.image');

const toggleImages = (dataclass) => {
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
   dataclass === "all" 
   ? allImages.forEach( image =>  image.style.display = 'flex') 
   :allImages.forEach (image =>{
    image.dataset.class === dataclass
     ?image.style.display = 'flex'
    :image.style,display = 'none';

   })
 }



//    const toggleActiveClass = (active) =>{
//      buttons.forEach( button => button.classlist.remove ("active"))
//      active.classList.add("active");
//   }

  // for(let counter = 0; counter < buttons.length; counter++) {
  //   buttons[counter].addEventListener('click', function(){
  //    toggleImages(buttons[counter].dataset.class);

  //   });

     buttons.forEach( button => {
       button.addEventListener( 'click', () => {
        //  toggleImages(button.dataset.class);
        //  toggleActiveClass( button ); 
        console.log("click")
       })
     });
