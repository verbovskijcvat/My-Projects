// Burger menu
const burger = document.querySelector("#burger")
// Set burger menu to always uncheked after refreshing the page
burger.checked = false

let isNavOpen = false
const navItems = document.querySelector(".nav-items")

burger.addEventListener("click", () => {
    isNavOpen = !isNavOpen
    if (isNavOpen) {
        navItems.classList.add("active")
    } else {
        navItems.classList.remove("active")
    }
})

// ...
// ...
// ...

// Carousel code
let currentIndex = 0

const items = document.querySelector(".carousel-items")
const itemElements = document.querySelectorAll(".carousel-item")

// Initialize the first item as active
if (itemElements.length > 0) {
    itemElements[0].classList.add("active")
}

document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        changeItem(currentIndex - 1)
    } else {
        changeItem(itemElements.length - 1)
    }
})

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < itemElements.length - 1) {
        changeItem(currentIndex + 1)
    } else {
        changeItem(0)
    }
})

function changeItem(nextIndex) {
    // Remove 'active' class from current item and add to next item
    itemElements[currentIndex].classList.remove("active")
    itemElements[nextIndex].classList.add("active")
    currentIndex = nextIndex // Update the current index to the next item's index
}
