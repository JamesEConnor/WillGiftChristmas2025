function challenge_success(chal_num) {
    $("#success").addClass("revealed")
    localStorage.setItem("challenge", chal_num.toString())
    setTimeout(function() {
        window.location = "../index.html"
    }, 4000)
}