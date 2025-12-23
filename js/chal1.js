$("form").submit(function() {
    return false;
})

$("form input[type=submit]").click(function() {
    var submitted = $("form input[type=text]").val()
    
    //If unsuccessful, show an error
    if(submitted.toLowerCase() != "egg yolks") {
        $("form").addClass("error")
        setTimeout(function() {
            $("form").removeClass("error")
        }, 1000)
    }
    //If successful, reveal the success screen,
    //set the document cookie, and then redirect
    //to the main page
    else {
        $("#success").addClass("revealed")

        localStorage.setItem("challenge", "1")

        Cookies.
        setTimeout(function() {
            window.location = "../index.html"
        }, 4000)
    }
})