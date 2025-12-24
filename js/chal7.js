$("form").submit(function() {
    return false;
})

$("form input[type=submit]").click(function() {
    var submitted = $("form input[type=checkbox]").is(":checked")
    
    //If unsuccessful, show an error
    if(!submitted) {
        $("form").addClass("error")
        setTimeout(function() {
            $("form").removeClass("error")
        }, 1000)
    }
    //If successful, reveal the success screen,
    //set the document cookie, and then redirect
    //to the main page
    else {
        challenge_success(7)
    }
})