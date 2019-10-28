$(document).ready(function(){

    const topics = ["Frank Ocean", "Hunter S Thompson", "Daft Punk", "Letterkenny", "Bernie Sanders", "Bob Dylan", "Trailer Park Boys",]

    let button;
    let newTopic = ""; //new topic that will be added to the input field 

    //function to create new buttons from the topics array

    const buttonGenerator = function (){
        $("#buttonArea").empty();

        for(i = 0; i < topics.length; i++){
            button = $("<button type=" + "button" + ">" + topics[i] + "</button>").addClass("btn btn-warning").attr("data", topics[i]);
            $("#buttonArea").append(button);
        };
    }

    $("#buttonArea").on("click", "btn", function(){
        const thing = $(this).attr("data");
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=7o4cJdGKn8FYveN8V0Y3BhVAKvY6JluV";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function(response){
            console.log(response);

            let = response.data;

            for (var i = 0; i < results.length; i++){

                let topicDiv = $("<div>");

                let p = $("<p>");
                p.text(results[i].rating);
                let p = $("<p>").text("Rating: " + results[i].rating);

                let topicImage = $("<img>").addClass("redBorder");
            }
        })
    })










});