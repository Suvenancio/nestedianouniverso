$('button').click(function(){


    $.ajax({

        'url': 'https://api.nasa.gov/planetary/apod?api_key=HDCWdf2xCu3FYYespZ5YmzGTKMmo7ywdc8nx8rKs&date=' + $('#data').val()
         ,
       
        
        'success': function(ok)
        {   
            $('#mostraTexto').html(`<p>${ok.explanation}</p>`).removeClass('descricao')
            $('#mostraImagem').html(`<img src="${ok.url}">`)
            $('#titulo').html(`${ok.title}`)
            $('#copyright').html(`${ok.copyright}`)

           if(ok.media_type == "image"){

           }else
           {
               
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

