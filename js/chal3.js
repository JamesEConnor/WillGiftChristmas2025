count = 50
succeeded = false
$("#cookie").click(function() {
    count--;
    if (count <= 0 && !succeeded) {
        count = 0
        succeeded = true
        challenge_success(3)
    }

    $("#clickcnt").text(count)
})