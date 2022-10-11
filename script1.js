window.addEventListener('load',function(){
    const canvas=document.getElementById('canvas1')
    const ctx=canvas.getContext('2d')
    //it will set all canvas properties and methods
    // a variable call a shortcut for context in the canvas variable from line to do get context
   // console.log(ctx) --> it will automatically haves an in built type of ranges like width and height etc
   canvas.width=window.innerWidth;
   canvas.height=window.innerHeight;

   const image1=document.getElementById('image1')

   class particle {
      //particle class as blueprint to create an indivisual particle object
      // to give the consrtuctor method it is a sepicalkind of method
      constructor(){
        // creating one blank object and assign values on it 
        // it is like blue print of class
            this.x=50;
            this.y=100;
            // t=it defines the cordinates so javascript knows where to canvas to draw html
            this.size=400;
      }

      draw(){
        ctx.fillRect(this.x,this.y,this.size,this.size)
        // it is used to draw an image but we can't directly run the code by using instance of code we can run it
      }
   }




   class Effect{
    //class will handle the entire effect,all the particles at once
    //effect class is to handle particles at same time
   }




   const particle1=new particle();
   particle1.draw();
   ctx.drawImage(image1,100,100,100,100)
   
   /*  in above condition we are doing the instance of the class
    and creating on new blank object and it will assign it to properties based on blue print*/
   




   function animate(){
     // animation loop  to make animated and interactive
   }

   /* ctx.fillRect(120,100,150,200); used to draw a rectangle by using x,y cordinates and width and height
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 150);
        ctx.stroke();   to draw a line by using the above commands

      ctx.drawImage(image1,0,0)
      it used to draw the images by using of id,x,y,width,height (by using the width and height we can difine ) */
})