$(document).ready(function() {
  $(".design_icon").click(function() {
    $(".design_description").toggle();
  });
});

$(document).ready(function() {
  $(".dev_icon").click(function() {
    $(".dev_description").toggle();
  });
});

$(document).ready(function() {
  $(".product_icon").click(function() {
    $(".prod_description").toggle();
  });
});

$(document).ready(function() {
  $(".product_icon").click(function() {
    $(".prod_description").toggle();
  });
});


$(document).ready(function(){
  $(".contact_us").submit(function(event){
    var name =$("input.nameForm").val();
    var mail =$("input#emailForm").val();
    var message =$("messageForm").val();
    if ($("input.nameForm").val() && $("input#emailForm").val()) {
      alert(name + ", We have recieved your message. Thank you for reaching out to us.");
    }else {
      alert("Enter your name and email again!!");
    }
  });
});