var textarea = document.getElementById("message");
var counter = document.getElementById("counter");
var warning = document.getElementById("warning");
var submitBtn = document.getElementById("submitBtn");
var successMsg = document.getElementById("successMsg");
var form = document.getElementById("messageForm");
var darkToggle = document.getElementById("darkToggle");

var maxLength = 200;

textarea.addEventListener("input", function () {
    var length = textarea.value.length;

    if (length > maxLength) {
        textarea.value = textarea.value.substring(0, maxLength);
        length = maxLength;
        warning.textContent = "Character limit reached!";
    } else {
        warning.textContent = "";
    }

    counter.textContent = length + " / " + maxLength + " characters";

    submitBtn.disabled = length === 0;

    if (length > 160) {
        counter.style.color = "red";
    } else if (length > 120) {
        counter.style.color = "orange";
    } else {
        counter.style.color = "green";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    successMsg.textContent = "Message successfully submitted!";

    textarea.value = "";
    counter.textContent = "0 / 200 characters";
    warning.textContent = "";
    submitBtn.disabled = true;

    setTimeout(function () {
        successMsg.textContent = "";
    }, 3000);
});

darkToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark");
});


