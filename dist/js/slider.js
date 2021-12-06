var position = 1;

$('#next').click(function(){
    $('#flechas_blancas').addClass('move-right');
    $('#flechas_negras').addClass('move-left');
    $('#carousel-item-'+position).removeClass('active');
    position = position+1;
    if(position > 12){
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
    position = position-1;
    if(position == 0){
        position = 12;
    }
    $('#carousel-item-'+position).addClass('active');
    setTimeout(function(){
        $('#flechas_blancas').removeClass('move-right');
        $('#flechas_negras').removeClass('move-left');
    },1000)
})