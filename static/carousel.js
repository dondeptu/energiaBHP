const scrollCarousel = (prevId, nexId, itemsId, itemId) => {
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nexId);
    const items = document.getElementById(itemsId);
    const firstItem = document.getElementById(itemId);
    const scrollAmount = () => firstItem.offsetWidth;
    const maxScroll = () => items.scrollWidth;

    prev.addEventListener("click", () => {
        if (items.scrollLeft == 0) {
            items.scrollLeft = maxScroll();
        } else {
            items.scrollLeft -= scrollAmount()
        }
        
    });
    next.addEventListener("click", () => {
        if (items.scrollLeft + scrollAmount() >= maxScroll()) {
            items.scrollLeft = 0;
        } else {
            items.scrollLeft += scrollAmount();
        }
    });

    addEventListener("resize", () => {
        // Snap the carousel back to nearest snap point
        items.scrollLeft += 1;
    });
}

scrollCarousel("prev-button", "next-button", "carousel-items", "carousel-first");
