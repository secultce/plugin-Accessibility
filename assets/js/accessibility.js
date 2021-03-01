$(document).ready(function($){

    // aumentar e diminuir a fonte de conteudo
    var minTamanhoFont = 8;
    var maxTamanhoFont = 30;

    
    $("#accessibility-btn").on("click", function(e){
        $(".accessibility-box-wrapper").fadeToggle();
        $(".accessibility-box-title").fadeToggle();
    });

    $("#accessibility-plus").on("click", function(e){
       
        e.preventDefault();

        //alterar
        var ellements = $("#main-section p, #main-section span, #main-section li, #main-section h1, #main-section h2, #main-section h3, #main-section h4, #main-section h5, #main-section h6, #main-section a");

        ellements.each( function(){
            var fontSize = $(this).css("font-size");
                fontSize = parseInt(fontSize) + 1;

            if( fontSize < maxTamanhoFont){
                $(this).css("font-size", fontSize );
            }
            
        } );

    });

    $("#accessibility-minus").on("click", function(e){    
        e.preventDefault();

        var ellements = $("#main-section p, #main-section span, #main-section li, #main-section h1, #main-section h2, #main-section h3, #main-section h4, #main-section h5, #main-section h6, #main-section a");


        ellements.each( function(){
            var fontSize = $(this).css("font-size");
                fontSize = parseInt(fontSize) -1;
        
            if( fontSize > minTamanhoFont){
                $(this).css("font-size", fontSize );
            }
            
        } );
    });

    var ellements = $("#main-section p, #main-section span, #main-section li, #main-section h1, #main-section h2, #main-section h3, #main-section h4, #main-section h5, #main-section h6, #main-section a");

    var values_defaults = [];

    ellements.each(function(){
        var font_size = $(this).css("font-size");
        var index_val = $(this).context.localName;
        values_defaults.push({  "tagname" : index_val, "fontsize": font_size })
    });

    $("#accessibility-cancel").on("click", function(e){    
        
        e.preventDefault(); 
        
        $("body").removeClass(" pojo-a11y-negative-contrast");

        var ellements = $("#main-section p, #main-section span, #main-section li, #main-section h1, #main-section h2, #main-section h3, #main-section h4, #main-section h5, #main-section h6, #main-section a");
        
        ellements.each( function(el){            
            var $this = $(this);
            if( $this.context.localName == values_defaults[el].tagname ){
                $this.css( "font-size" , values_defaults[el].fontsize);
            }
        } );

        $(".accessibility-box-wrapper").fadeToggle();
        $(".accessibility-box-title").fadeToggle();

    });

    $("#accessibility-contrast").on("click", function(e){

        e.preventDefault();

        $("body").toggleClass(" pojo-a11y-negative-contrast");

    });
});

