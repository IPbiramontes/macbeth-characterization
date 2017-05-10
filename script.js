/* global $ */ 
$( document ).ready(function() {
    $.get("head.html", function(data){
        $("#head").replaceWith(data);
    });
   
    
    $("p").hide();
    
    $("#MacBackground").hide();
    
     $("#MacRed").hide();
    
    $("#taketext").hide();
    
    $("#messagebut").hover(function(){
    $("#love").show();
    });
    
    
    $("#messagebut").click(function() {
        $("#brave").show();
        
    });
    
      $("#message2but").hover(function() {
        $("#heaven").show();
        
    });
     $("#message2but").click(function() {
        $("#valor").show();
        
    });
    
   /* $("#forward1").hover(function(){
    $("#body").css(background-image, url("Macbethred.png"));
    });*/
   
    
    var audio = new Audio('cold.mp3');
    var dosaudio = new Audio ('takeit.mp3');
    
    $("#music").click(function() {
    audio.play();
    }); 
    
     $("#music").dblclick(function() {
    audio.pause();
    }); 
    
    $("#JT").click(function() {
    dosaudio.play();
    }); 
    
     $("#JT").dblclick(function() {
    dosaudio.pause();
    }); 
    
    $("#info").click(function() {
    $("#coldtext").show();
    }); 
    
    $("#info").dblclick(function() {
    $("#coldtext").hide();
    });
    
    $("#info2").click(function() {
    $("#taketext").show();
    }); 
    
    $("#info2").dblclick(function() {
    $("#taketext").hide();
    });
    
    $("#alertlitt").click(function() {
    alert("Welcome to my interactive art page! Try clicking ,hovering or double clicking over different buttons :)");
    });
     


});