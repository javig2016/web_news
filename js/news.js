﻿var archivos = ["data/noticiasbloc2.json", "data/noticiasbloc3.json"];
var limite = 0;

$(document).ready(function(){
    $("#vermas").on("click", ponerNoticias);
    $(window).scrollTop(0);
});

$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() == $(document).height())
    {
        ponerNoticias();
    }
});

function ponerNoticias()
{
    if(limite >= archivos.length)
    {
        alert("No hay más noticias :)");
    }

    if(limite < archivos.length)
    {
        $.getJSON(archivos[limite], function(jsonObject){
            var items = [];
            var str;
            $.each(jsonObject, function(i, noticia){
                str = "";
                str += "<div class='col-sm-3 noticia'>";
                str += "<h3 class='titulo'>" + noticia.titulo + "</h3>";
                str += "<img class='img-responsive' src=\"" + noticia.imagen + "\" />";
                str += "<p class='descripcion'>" + noticia.descripcion + "</p>"
                str += "<h4 class='fecha'>" + noticia.datetime + "</h4>";
                str += "</div>";
                items.push(str);
            });

            $("<div/>", {
                "class": "row",
                html: items.join("")
            }).appendTo("#noticiasjson");
        });
        limite++;
    }
}