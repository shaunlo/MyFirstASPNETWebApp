$("#btnSend").click(function () {
    alert("Message Sent! "
        + $("#txtName").val() +
        "," + $("#txtAge").val() +
        " " + $("#txtGender").val() +
        " " + $("#txtMessage").val());
    $("#picShaun").fadeToggle();
})