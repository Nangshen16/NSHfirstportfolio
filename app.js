document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.threelines');
    hamburger.addEventListener('click', function(e) {
      console.log("hamburger");
      var menuNote = document.querySelector(".menuburger")
      menuNote.classList.toggle('hidden')
    });
    var button = $('button')
    //console.log(button);
    button.on('click',function(e){
      console.log('button');
    });
    
    
  });
        console.log("Hello");

  let url =`https://spreadsheets.google.com/feeds/list/1YbstXavGeeNm6LShLSREfGecku4_ggOgKs5xP6Ysu98/od6/public/values?alt=json`

  fetch(url)  // starts the fetch process
    .then( response => response.json() )    // returns the JSON data as a JS object
    .then( data => {
        console.log(data.feed);
         // creates an array of parsed project objects
         const projects = data.feed.entry.map( entry => {
            return {
               title: entry.gsx$title.$t,
               image: entry.gsx$image.$t,
               description: entry.gsx$description.$t,
               url: entry.gsx$url.$t
            }
            })
            console.log(projects);
            app(projects);
    })
    const app =(projects) => {
        console.log("app",projects)
        for (let i=0; i< projects.length; i++){
            /*projects[i].title*/
            /*console.log(project[i].title);
            $(`#project1`).append( $('<h1>').text(projects[i].title))
            $(`#projects2`).append($(`<div>`).text(projects[i].title))
            $(`#project`+(i+1)).append($(`<div>`).text(projects[i].title))*/
            const $div = $(`<div>`).attr('id',`#project`+(i+1)).addClass(`slider`)
            $div.append( $('<h3>').text(projects[i].title))
            if (projects[i].image) {
                $div.append($(`<img>`).attr(`src`,projects[i].image))
                
            }
            if (projects[i].description) {
                $div.append($(`<p>`).text(projects[i].description))
            }
            /*$div.append($(`<img>`).attr(`src`,projects[i].image))*/

            $(`.projectsSlides`).append($div)
        }
        
    }