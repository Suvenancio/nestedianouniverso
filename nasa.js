$('button').click(function(){


    $.ajax({

        'url': 'https://api.nasa.gov/planetary/apod?api_key=HDCWdf2xCu3FYYespZ5YmzGTKMmo7ywdc8nx8rKs&date=' + $('#data').val()
         ,
       
        
        'success': function(ok)
        {   
            $('#mostraTexto').html(`<p>${ok.explanation}</p>`)
            $('#mostraImagem').html(`<img src="${ok.url}">`)
            $('#titulo').html(`${ok.title}`)
            $('#copyright').html(`${ok.copyright}`)

            tiraUndefined()
            console.log()
            
        }
    })
})

function tiraUndefined(){

  if( $('#copyright')=== undefined){

    $('#copyright').removeClass("invisivel")

     }
     else
     {
        $('#copyright').addClass("invisivel")
       
      }

}

