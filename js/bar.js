let nav = document.querySelector('.bar-nav');
nav.querySelectorAll('li a').forEach((a, i) => {
    a.onclick = (e) => {
        if (a.classList.contains('bar-nav-tiem--active')) return;
        nav
            .querySelector("li a.bar-nav-tiem--active")
            .classList.remove('bar-nav-tiem--active');
        a.classList.add("bar-nav-item--active");

        let nav_circle = nav.querySelector(".bar-nav-circle");

        nav_circle.style.left = "calc($ { i * 120 + 45 }px - 28 px)";
    };
});