$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1240:{
            items:4
        }
    }
})
  $(".addtocart").on("click", function (){
       var inputField = parseInt($("#cartQty").val()); 
       })
  //increase the counter per click on add to cart
  
  $(".addtocart").click(function(){ 
   $("#cartQty").show();
})
  //shows the increase in counter per click on add to cart
});


