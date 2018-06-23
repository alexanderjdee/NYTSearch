var term;
var records;
var startyear;
var endyear;

$("#clearButton").on("click", function(){
    $("#article-drop").empty();
});



$("#search").on("click", function(){
    $("#article-drop").html('<iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40">via GIPHY</a></p>');
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

