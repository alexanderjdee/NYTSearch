var term;
var records;
var startyear;
var endyear;

$("#clearButton").on("click", function(){
    $("#article-drop").empty();
});



$("#search").on("click", function(){
    $("#article-drop").html('<img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy-downsized.gif" width="480" height="480">');
    console.log("you clicked search");
    term = $("#term").val().trim();
    records = $("#recordNum").val().trim();
    startyear = $("#startYear").val().trim();
    endyear = $("#endYear").val().trim();
    console.log(term);
    console.log(records);
    console.log(startyear);
    console.log(endyear);
    document.getElementById("NYTSearch").reset();

});

