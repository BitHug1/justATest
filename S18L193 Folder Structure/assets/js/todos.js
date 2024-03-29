//check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
});
  event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grab new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
})

$(".fa-plus").click(function(event){
  $("input[type='text']").fadeToggle(100);
})
