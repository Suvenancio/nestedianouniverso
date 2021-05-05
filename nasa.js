$('button').click(function(){


    $.ajax({

        'url': 'https://api.nasa.gov/planetary/apod?api_key=HDCWdf2xCu3FYYespZ5YmzGTKMmo7ywdc8nx8rKs&date=' + $('#data').val()
         ,
       
        
        'success': function(ok)
        {   
            $('#mostraTexto').html(`<p>${ok.explanation}</p>`).removeClass('descricao')
            
            $('#titulo').html(`${ok.title}`)
            $('#copyright').html(`${ok.copyright}`)

           if(ok.media_type == "image"){
            $('#mostraImagem').html(`<img src="${ok.url}">`)
           }else(ok.media_type == "video")
           {
            $('#mostraImagem').html(`<iframe width="600" height="400" src="${ok.url}"></iframe>`)
           }

            
            
            
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

