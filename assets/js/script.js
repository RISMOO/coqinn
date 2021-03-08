
  $(document).ready(function(){
    $(".guip").mouseover(function(){
      $("#coq").hide();
    });
    $(".guip").mouseover(function(){
        $("#coq").show();
      });
});

$('.carousel').carousel()

$(document).ready(function(){

    
    $("#coq").mouseover(function(){
        $('#coq').attr('src','assets/images/liv.png');
    });
    $("#coq2").mouseover(function(){
        $('#coq2').attr('src','assets/images/liv.png');
      });
      

});



   $(document).ready(function () {
    setTimeout(function () {
        $('#').attr('src','assets/images/liv.png');
    }, 2000);

});




$("#coq").click(function(){
    $("#coq").hide();
  });
  $("#coq2").click(function(){
    $("#coq2").hide();
  });


  $("#close1").click(function(){
    $("#coq").show();
    $('#coq').attr('src','assets/images/coq.png');
   
  });

 $("#close").click(function(){
    $("#coq2").show();
    $('#coq2').attr('src','assets/images/coq.png')
  });


$(document).ready(function () {
    setTimeout(function () {
        $("#h1").toggle("slow");
    }, 1000);

});

$(document).ready(function () {
    setTimeout(function () {
        $("#social").toggle("slow");
    }, 2000);

});




