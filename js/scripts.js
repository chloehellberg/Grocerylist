$(document).ready(function() {
  $("#formOne").submit(function(event) {
    
    let items = ["item1","item2", "item3", "item4" ,"item5" ,"item6"];
    items.forEach(function(input) {
      let listItems =  $("input#" + input).val();
      // $("#" + input).text(listItems);
      $("#groceries").append("<li>" + listItems + "</li>");
    });
    $("#shoppingList").show();
    event.preventDefault();
    
  });
});    

// $(document).ready(function() {
//   const icecream = ["chocolate", "vanilla", "rocky road", "marionberry"];
//     icecream.forEach(function(flavor) {
//       $("#icecreamlist").append("<li>" + flavor + "</li>");
//     }); 
//   });
  
// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
    
//     let list1 = ["person1","person2", "animal", "exclamation" ,"verb" ,"noun"];
//     list1.forEach(function(input) {
//       let story =  $("input#" + input).val();
//       $("." + input).text(story);
//     });
//     $("#arrays").show();
//     event.preventDefault();
    
//   });
// });  