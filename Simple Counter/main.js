var count=0;
$("h2").html(count);
  $("#decrease").click( function(){
    count -= 1;
    if (count == 0){
     $("h2").css("color","black");
     $("h2").html(count);
     return;
   }
    if (count < 0) {
    $("h2").css("color","#FF0000");
    $("h2").html(count);
  }
  else  if (count > 0) {
  $("h2").css("color","#008000");
  $("h2").html(count);
}
  });
  $("#reset").click( function(){
    count =0;
    $("h2").css("color","black");
    $("h2").html(count);
  });
  $("#increase").click( function(){
    count += 1;
    if (count == 0){
     $("h2").css("color","black");
     $("h2").html(count);
     return;
   }
    if (count < 0) {
    $("h2").css("color","#FF0000");
    $("h2").html(count);
  }
  else  if (count > 0) {
  $("h2").css("color","#008000");
  $("h2").html(count);
}
 if (count == 0){
  $("h2").css("color","black");
}
  });
