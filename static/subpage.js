{
    const showSubpage = (subPageButtonId, contentId) => {
        const subPageButton = document.getElementById(subPageButtonId);
        const content = document.getElementById(contentId);

        subPageButton.addEventListener("click", () => {
            content.classList.toggle("main__toggleVisible");
        })
    }

    showSubpage("subPageButton", "article");


}