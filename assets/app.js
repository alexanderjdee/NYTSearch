var term;
var records;
var startyear;
var endyear;
var articleDropDiv = $("#article-drop");

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryUrl += '?' + $.param({
'api-key': "d103cdd0ac7c447183784ba8c9d6c32f",
'q': term,
'begin_date': startyear,
'end_date': endyear
});

$(document).ready(function(){

    $("#clearButton").on("click", function(){
        $("#article-drop").empty();
     });
     
    $("#search").on("click", function(){
        $("#article-drop").html('<iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40">via GIPHY</a></p>');
        term = $("#term").val().trim();
        records = $("#recordNum").val().trim();
        startyear = $("#startYear").val().trim();
        endyear = $("#endYear").val().trim();
        console.log(term);
        console.log(records);
        console.log(startyear);
        console.log(endyear);
        document.getElementById("NYTSearch").reset();

        if(records === null || records === ""){
            records = 10;
            records = records.toString();
        }

        if(startyear === null || startyear === ""){
            startyear = "2018";
        }

        if(endyear === null || endyear === ""){
            endyear = "2018";
        }

        startyear += "0101";
        endyear += "1231";

        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryUrl += '?' + $.param({
        'api-key': "d103cdd0ac7c447183784ba8c9d6c32f",
        'q': term,
        'begin_date': startyear,
        'end_date': endyear
        });
        $.ajax({
            url: queryUrl,
            method: "GET" 
        }).then(function(response){
            $(articleDropDiv).empty();
            for(i=0; i<records; i++){
                console.log(response);
                console.log(response.response.docs[i]);
                var div = $("<div>")
                $(div).html(response.response.docs[i].headline.main + "<br>" + response.response.docs[i].web_url + "<br><br>");
                $(articleDropDiv).append(div);
            }
        });
        
    });
})

