//Get the revealed challenges
challenge = 0;
cookies = document.cookie.split(";")
cookies.forEach(cookie => {
    splt = cookie.split("=")
    if (splt[0] == "challenge") {
        challenge = parseInt(splt[1])
    }
});

//Add boxes to hide image
var BOX_CNT = 7
for (let i = 1; i <= BOX_CNT; i++) {
    // Create element
    var newEl = $("<div class='grid-box'></div>")

    //Set grid position
    //Set BG image
    //Add text
    newEl.addClass("box-" + i)
    newEl.css("grid-area", "box-" + i)
    newEl.attr("link", "pages/chal" + i.toString() + ".html")

    //Only toggle the class if not
    //revealed by challenges
    if (i <= challenge) {
        newEl.addClass("revealed")
    } else {
        if (i != 7 || challenge == 6) {
            newEl.click(function() {
                document.location = $(this).attr("link")
            })
        }
        //Stop from being able to click
        //if this is box 7 and we haven't revealed
        //it yet
        else {
            newEl.addClass("noclick")
        }
    }

    newEl.append($("<span>" + i + "</span>"))

    //Append to grid
    $("#grid").append(newEl)
}

$("#grid").css("background-image", "url('images/gridfulltext.png')")