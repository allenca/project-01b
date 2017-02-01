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
  });

  $(".addtocart").on("click", function (){
    // 1. check exsisting cart value
    var inputField = parseInt($("#cartQty").val());
    inputField = inputField + 1; 
    // 2. add 1 to the value
    $("#cartQty").val(inputField++);
    // 3. put value back in input
    $("#cartQty").show();
  })
  //increase the counter per click on add to cart
  //shows the increase in counter per click on add to cart

  // $(".addtocart").on("click", function (){
  //   // 1. check exsisting cart value
  //   // grab and set node for input
  //   var inputCheck = $("#cartQty");
  //   console.log((5 > 0 ? "hello" : "bye")); 
  //   var exsistingVal = ($(inputCheck).val() == "null" ? 0 : parseInt($(inputCheck).val()));

  //   //inputField = inputField + 1; 
  //   // 2. add 1 to the value
  //   $(inputCheck).val(exsistingVal++);
  //   $(inputCheck).show();
  // })

});


