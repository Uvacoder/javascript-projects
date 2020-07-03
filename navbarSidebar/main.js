//Main JavaScript
$("aside").hide();

 $(".sidebar-toggle").click(function(){
   $("aside").toggle( '10000', function(){
    });
    if ($(".container").is(".active"))
    {
        $(".container").removeClass("active");
    }
    else {
        $(".container").addClass("active");
    }
    });
