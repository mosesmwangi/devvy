$(document).ready(function(){
    $("button#details").click(function() { 
        var details = $("#add").val();
        $("ul").append("<li>" + details + "</li>");
    })

})