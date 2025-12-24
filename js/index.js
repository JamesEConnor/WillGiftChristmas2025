//Get the revealed challenges
challenge = parseInt(localStorage.getItem("challenge") ?? "0")

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
    }
    //Make the next one clickable
    else if (i == challenge + 1) {
        newEl.click(function() {
            document.location = $(this).attr("link")
        })
    }
    //Make every future one unclickable
    else {
        newEl.addClass("noclick")
    }

    newEl.append($("<span>" + i + "</span>"))

    //Append to grid
    $("#grid").append(newEl)
}

$("#grid").css("background-image", "url('images/gridfulltext.png')")