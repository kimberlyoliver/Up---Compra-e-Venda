$('.fab').click(function(){
    $('.videoDiv').show()
    $('.fab').hide();

});

$('.x').click(function(){
    event.preventDefault();
    $('.videoDiv').hide();
    $('.fab').show();    
});

$('.videoDiv').click(function(){
    event.preventDefault();
    $('.videoDiv').hide();
    $('.fab').show();        
});
