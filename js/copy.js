window.addEventListener('load', function () {
    let elements = document.getElementsByClassName("List-item");
    for (let index = 0; index < elements.length; index++) {
        elements[index].addEventListener("copy", function (event) {
            event.clipboardData.setData("text", window.getSelection().toString())
        })
    }
})