fetch("menu.html")
    .then(r => r.text())
    .then(html => {
        const menuContainer = document.getElementById("menu");
        menuContainer.innerHTML = html;

        // Lógica para resaltar el enlace actual
        const links = menuContainer.querySelectorAll("a");
        const currentPath = window.location.pathname.split("/").pop();

        links.forEach(link => {
            const linkPath = link.getAttribute("href");
            if (linkPath === currentPath) {
                link.classList.add("active");
            }
        });
    })
    .catch(error => console.error("Error cargando el menú:", error));