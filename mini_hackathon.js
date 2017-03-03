$(document).ready(function() {

            $.get('https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/todayilearned/top/.json', function(data) {

                for (var i = 0; i < 11; i++) {
                    var thumbnail = data.data.children[i].data.thumbnail
                    console.log(thumbnail);
                    var title = data.data.children[i].data.title
                    console.log(title);


                    $('.redditResult').append("<img src='" + thumbnail + "'>", title, "<br>")
                    // $('.title1').append("<h4> Title: </h4>" + title)
                }

            })

});


// Pokemon Ajax call Test API
//
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
