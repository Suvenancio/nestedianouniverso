$('button').click(function(){


    $.ajax({

        'url': 'https://api.nasa.gov/planetary/apod?api_key=MU0Ag065ESVG3hY9ouQsE4kRCS6rPVKqGc7v1w9z&date=' + $('#data').val()
         ,
       
        
        'success': function(ok)
        {   
            $('#mostraTexto').html(`<p>${ok.explanation}</p>`).removeClass('descricao')
            $('#titulo').html(`${ok.title}`)
           
            console.log(ok)
            
           if(ok.media_type== 'image'){
            $('#mostraImagem').html(`<img src="${ok.url}">`)
           }
           else
           {
            $('#mostraImagem').html(`<iframe width="600" height="400" src="${ok.url}"></iframe>`)

           }
          
        }
    })
})


