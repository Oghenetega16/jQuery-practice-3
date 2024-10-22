$('#slideupbox').click(function (){
    $('#box').slideUp('normal');
});

$('#slidedownbox').click(function (){
    $('#box').slideDown('2000', 'swing');
});

$('#slidetogglebox').click(function (){
    $('#box').slideToggle('2000', 'easeOutBounce');
});