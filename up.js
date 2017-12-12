$('.fab').click(function(){
    $('.videoDiv').show()

});

$('.x').click(function(){
    event.preventDefault();
    $('.videoDiv').hide();
});

$('.videoDiv').click(function(){
    event.preventDefault();
    $('.videoDiv').hide();
});
