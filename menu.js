fetch("menu.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("menu").innerHTML = html;
    });