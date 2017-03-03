
$(document).ready(function() {


$.get('https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/todayilearned/top/.json', function(data){
    var thumbnail = data.data.children[1].data.thumbnail
    console.log(thumbnail);
    var title = data.data.children[1].data.title
    console.log(title);
    $('.redditResult').append("<img src='" + thumbnail + "'>")
    $('.title1').append("<h4> Title: </h4>" + title)
    // $('.link')

})
// var reddit = function() {
//     var url = "https://www.reddit.com/r/todayilearned/.json"
//     // url += $("input").val()
//     console.log(url);

    // $.get(url, function(data) {
    //     console.log(data);
    //     var title = data.Title
    //     console.log(title, poster);
    //     var poster = data.Poster
    //     updatePage(title, poster)
    // })
    // // .then(function(){
    // //     showMessage()
    // // })
    //
    //
    // function updatePage(title,poster) {
    //     $(".title").append(title)
    //     console.log(poster);
    //     $(".poster").append('<img src="" '> + poster)
    // }
});





// Pokemon Ajax call Test API

// $.ajax({
//         url: 'http://pokeapi.co/api/v2/pokemon/25',
//         type: 'GET',
//         data: {
//             format: 'json'
//         },
//         error: function(){
//             alert('An error has occurred');
//         },
//         success: function(results){
//               console.log(results);
//               // $("#result").empty()
//               $("#result").html(
//                "Name: " + results.name + "<br>" +
//                "Height: " + results.height + "<br>" +
//                "Weight: " + results.weight + "<br>" +
//                "<img src='" + results.sprites.front_shiny + "'>");
//             }
//     })

// });
