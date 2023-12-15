document.addEventListener("DOMContentLoaded", function () {

    function updateContent() {
        document.getElementById("title").textContent = "Basketball Website";
        document.getElementById("copyright").textContent = "@ Manny All Rights Reserved. Basketball Website"
    }

    function changeCSSProperty() {
        var colors = ["Blue", "Green", "Red", "orange", "Purple"];
        var players = document.getElementsByClassName("player");
        for (var i = 0; i < players.length; i++) {
            
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            players[i].style.color = randomColor; 
        }
        var rules = document.getElementsByClassName("rule");
        for (var i = 0; i < rules.length; i++) {
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            rules[i].style.color = randomColor; 
        }
    }

    var updateContentButton = document.getElementById("changetext");
    var changeCSSButton = document.getElementById("changecss");

    updateContentButton.addEventListener("click", updateContent);
    changeCSSButton.addEventListener("click", changeCSSProperty);

    function updateDayContent() {
        var dayOfWeek = new Date().getDay(); 
        switch (dayOfWeek) {
            case 0:
                document.getElementById("day").innerHTML = "Happy Sunday";
                break;
            case 1:
                document.getElementById("day").innerHTML = "Happy Monday";
                break;
            case 2:
                document.getElementById("day").innerHTML = "Happy Tuesday";
                break;
            case 3:
                document.getElementById("day").innerHTML = "Happy Wednesday";
                break;
            case 4:
                document.getElementById("day").innerHTML = "Happy Thursday";
                break;
            case 5:
                document.getElementById("day").innerHTML = "Happy Friday";
                break;

            case 6:
                document.getElementById("day").innerHTML = "Happy Saturday";
                break;

        }
    }
    updateDayContent();
});
