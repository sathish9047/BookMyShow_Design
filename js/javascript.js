function shows() {
    document.getElementById("id01").style.display = "block";
}
function closes() {
    document.getElementById("id01").style.display = "none";
}


function showing() {
    document.getElementById("bigil").style.display = "block";
    document.getElementById("hollywood").style.display = "none";
}

function soon() {
    document.getElementById("bigil").style.display = "none";
    document.getElementById("hollywood").style.display = "block";
}

// only allows number 

function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
    {
        document.getElementById("login").style.display="block";
        return true;
    }  
    else
        return false;
}   




//  scroll top


$(document).ready(function () {
    $("#hollywood").css({ display: "none" });
    $("#scroll").css({display:"none"});
    $(window).scroll(function(){
        var z=$(document).scrollTop();
            if(z>200){
                $("#scroll").show();
            }
            else{
                $("#scroll").hide();
            }
    });
    $("#scroll").click(function(){
        $(window).scrollTop(0);
    });

    //Dynamic Year
    const d = new Date();
    let year = d.getFullYear();
    document.getElementsByClassName("cls-year")[0].innerHTML = year;
    document.getElementsByClassName("cls-year")[1].innerHTML = year;


     //  notification and remove batches
     $("#notify").click(function()
     {
         $(".cls-notify").slideToggle();
         $(".badge").css({display:"none"});
         $(".cls-notify button").click(function()
         {
             $(".cls-notify").slideUp();
         });
     });
     // color aactive and remove
     $(".cls-just button").click(function () {
         $(this).addClass("active").siblings().removeClass("active");
     });
    //dropdown menu
 
     $(".cls-menu li a").click(function () {
         var swap=$(this).html();
         var x = $("#menu").html();
         $("#menu").html(swap);
         $(this).html(x);
     });


    //  login 
     $("#login").click(function()
     {
         var a=$("#mobile").val();
         if(a.length<10)
         {
             alert("please enter your valid mobile number");
         }
     });
});








