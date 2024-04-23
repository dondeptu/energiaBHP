{
    // const navLinks = document.querySelectorAll(".js-navLink");

    const toggleMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener("click", () => {
                nav.classList.toggle("nav__navigationList--showMenu");
                toggle.classList.toggle("bx-x");
            });
        };
        document.onclick = (e) => {
            if (!toggle.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove("nav__navigationList--showMenu");
                toggle.classList.remove("bx-x");
            }
        };

        //     navLinks.forEach(n => n.addEventListener("click", () => {
        //         nav.classList.remove("nav__navigationList--showMenu");
        //         toggle.classList.remove("bx-x");
        //     }));
    }

    toggleMenu("menu-toggle", "menu");

    // const linkAction = (e) => {
    //     navLinks.forEach(n => n.classList.remove("navigation__linkActive"));

    //     e.target.classList.add("navigation__linkActive");
    // }

    // navLinks.forEach(n => n.addEventListener("click", linkAction));



    const scrollCarousel = (prevId, nexId, itemsId, itemId) => {
        const prev = document.getElementById(prevId);
        const next = document.getElementById(nexId);
        const items = document.getElementById(itemsId);
        const firstItem = document.getElementById(itemId);

        prev.addEventListener("click", () => {
            const scrollAmount = firstItem.offsetWidth;
            const maxScroll = items.scrollWidth;
            
            if (items.scrollLeft == 0) {
                items.scrollLeft = maxScroll;
            } else {
                items.scrollLeft -= scrollAmount
            }
            
        });
        next.addEventListener("click", () => {
            const scrollAmount = firstItem.offsetWidth;
            const maxScroll = items.scrollWidth - items.offsetWidth;

            if (items.scrollLeft + scrollAmount >= maxScroll) {
                items.scrollLeft = 0;
            } else {
                items.scrollLeft += scrollAmount;
            }
        });
    }

    scrollCarousel("prev-button", "next-button", "carousel-items", "carousel-first");


   

}