  //  function1
  function bigImg(x) {
      x.style.height = "64px";
      x.style.width = "64px";

  };
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";

};

   // function 2
   $(document).ready(function(){
       $("h3").click(function(){
           $(this).hide(1000);
       });
   });
 
     // function 3
     var x = myFunction(5, 6);
     document.getElementById("demo").innerHTML = x;

     function myFunction(a, b) {
      return a * b;}
     //   function 4
      $("#show").click(function () {
        $("p").show("fast");
      });
      $("#hide").click(function () {
        $("p").hide(2000);
      });
     //   function 5
     $("#fadeout").click(function () {
        $(".fadeout1").fadeToggle(1000);
      });
     //function5 
     $(document).ready(function () {
            $(".b_btn").click(function () {
              alert("This is danger zone. you should go right now");
            });
     });
     // function 6
     $(document).ready(function(){
         $("#btn_4").click(function(){
             $(".p1").css("color","red").slideUp(2000).slideDown(2000);

         });


     });
    //  function 6
    $(document).ready(function(){
        $(".cb_b").click(function(){
            $(".cb_p").hide("slow",function (){
                alert("this is paragraph hidden")
            }).slideUp(2000).slideDown(2000);

        });


    });
// function7
$(document).ready(function(){
    $(".showed").click(function(){
        $(".hidden").slideToggle(3000)

    });


});
// function 8





























//  <script>
//       function textChange() {
//         document.getElementById("h2").innerHTML = "Hello";
//       }
//     </script>
//     <script>
//      
//       });
//     </script>
//     <script>
//       $(document).ready(function () {
//         //
//         $("#hide").click(function () {
//           $("h2").fadeOut();
//         });
//         //
//         $("#vari").click(function () {
//           $("h2").fadeToggle(1000);
//         });
//       });
//     </script>
