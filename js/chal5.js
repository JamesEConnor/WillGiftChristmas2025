$(".magnifier-glass").click(function(e) {
    var posX = $("#waldo").offset().left
    var posY = $("#waldo").offset().top
    var relX = e.pageX - posX
    var relY = e.pageY - posY

    console.log(relX.toString() + ", " + relY.toString())

    if (605 <= relX && relX <= 625 && 200 <= relY && relY <= 220) {
        challenge_success(5)
    }
})