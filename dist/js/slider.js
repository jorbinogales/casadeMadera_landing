var position = 1;

$('#next').click(function(){
    $('#flechas_blancas').addClass('move-right');
    $('#flechas_negras').addClass('move-left');
    $('#carousel-item-'+position).removeClass('active');
    position = position+1;
    const items =  $('.item-slider');
    if(position > items.length){
        position = 1;
    }
    $('#carousel-item-'+position).addClass('active');

    setTimeout(function(){
        $('#flechas_blancas').removeClass('move-right');
        $('#flechas_negras').removeClass('move-left');
    },1000)
});

$('#previus').click(function(){
    $('#flechas_blancas').addClass('move-right');
    $('#flechas_negras').addClass('move-left');
    $('#carousel-item-'+position).removeClass('active');
    const items =  $('.item-slider');
    position = position-1;
    if(position == 0){
        position = items.length;
    }
    $('#carousel-item-'+position).addClass('active');
    setTimeout(function(){
        $('#flechas_blancas').removeClass('move-right');
        $('#flechas_negras').removeClass('move-left');
    },1000)
})