var clearhighscores = document.getElementById("clearBtn");


var tbody = document.getElementById("tbody")
for (let i = 0; i < localStorage.length; i++) {
    var userName = localStorage.key(i)
    var userScore = localStorage.getItem(userName)
    tbody.insertAdjacentHTML('afterbegin', '<tr class="scores"><td>' + userName + ' - ' + userScore + '</td></tr>')
}

//  this function has the clear highscores button work by clearing local storage and re-rendering table
clearhighscores.addEventListener("click", clearStorage);



function clearStorage() {
    localStorage.clear();
    window.location.reload();
}