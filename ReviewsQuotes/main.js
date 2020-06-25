//variable which holds the information of the reviewer
var names = [ "Susan Smith","Anna Johnson","Peter Jones","Bill Anderson"];
var job = ["WEB DEVELOPER","WEB DESIGNER","INTERN","THE BOSS"];
var review = ["I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    ];
var index=0;
var pic = 0;
    //This function changes the necessary divs to show different reviews of different people
    function change(index){
        pic = index+1;
      $("#profilePic").attr("src", "images/person-"+pic+".jpg");
      $("#name").html(names[index]);
      $("#title").html(job[index]);
      $("#review-text").html(review[index]);
    }
  //when left arrow is clicked then index is increased
  $("#right").click( function(){
    index += 1;
    if (index > 3){
      index =0;
    }
    change(index);

  });
//when left arrow is clicked then index is reduced
  $("#left").click( function(){
    index -= 1;
    if (index < 0) {
      index = 3;
    }

    change(index);
  });
//surprise button chooses a review randomly
  $("#surprise").click(function(){
      index = Math.floor((Math.random() * 4) + 1) - 1;
      change(index);
  });
