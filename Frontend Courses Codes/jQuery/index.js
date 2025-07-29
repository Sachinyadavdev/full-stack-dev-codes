
$(document).ready(function(){$('h2').css("color","white");});
$('h2').css("color","white");


$("h2").addClass("bigTitle");  // selecting and manipulating the DOM


$("h2").text("This is the changed text using jQuery");
$("button").text("New Button");

$("h2").html("<p>This is the paragraph tag in the html</p>");

$("img").attr("src");

console.log($("img").attr("src"));

$("a").attr("href","https://yahoo.com");

console.log($("h2").attr("class"));

// Adding event listners

$("h2").click(function () { 
   $("h2").css("color","purple");
    
});

$(document).keypress(function (e) { 
   console.log( $("h2").text(e.key));
});


$("h2").before("<h1>New Text</h1>");
$("h2").after("<h1>New Text</h1>");
$("h2").append("<h1>New Text</h1>");
$("h2").prepend("<h1>New Text</h1>");