function setTabs() {
    document.querySelectorAll(".tab-button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabContainer = sideBar.parentElement;
            const tabNums = button.dataset.forTab;
            const tabActive = tabContainer.querySelector(`.tab-content[data-tab="${tabNums}"]`);
            
            sideBar.querySelectorAll(".tab-button").forEach(button => {
                button.classList.remove("tab-button--active");
            });

            tabContainer.querySelectorAll(".tab-content").forEach(tab => {
                tab.classList.remove("tab-content--active");
            });

            button.classList.add("tab-button--active");
            tabActive.classList.add("tab-content--active");
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setTabs();
    
    document.querySelectorAll(".tabs").forEach(tabContainer => {
        tabContainer.querySelector(".tab-sidebar .tab-button").click();
    });
});