var dropdownBtn = document.querySelector(".dropbtn");

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function selectItem(item) {
    dropdownBtn.innerText = item;
    toggleDropdown();
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// SEARCH ICON MOVE INTO SEARCH BAR
function focusSearchInput() {
    var searchInput = document.getElementById("searchInput");
    searchInput.focus();
}

var dropdownBtn = document.querySelector(".dropbtn");
var searchInput = document.querySelector(".search-input");

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function selectItem(item) {
    dropdownBtn.innerText = item;
    toggleDropdown();
    searchInput.focus();
}

// SIDE NAVBAR OPEN OR CLOSE
const openNavButton = document.getElementById('open-nav-sidebar');
const sideMenu = document.getElementById('side-menu');
const closeMenuButton = document.getElementById('close-menu-button');

openNavButton.addEventListener('click', () => {
    sideMenu.style.left = '0';
});

closeMenuButton.addEventListener('click', () => {
    sideMenu.style.left = '-300px';
});


const echoAlexaLink = document.getElementById('echo-alexa-link');
const echoAlexaSubmenu = document.getElementById('echo-alexa-submenu');
const mainMenuLink = document.getElementById('main-menu-link');

echoAlexaLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (echoAlexaSubmenu.style.display === 'block') {
        echoAlexaSubmenu.style.display = 'none';
    } else {
        echoAlexaSubmenu.style.display = 'block';
    }
});
mainMenuLink.addEventListener('click', function (event) {
    event.preventDefault();

    echoAlexaSubmenu.style.display = 'none';
});

const fireTvLink = document.getElementById('fire-tv-link');
const fireTvSubmenu = document.getElementById('fire-tv-submenu');
const mainMenuLink2 = document.getElementById('main-menu-link2');

fireTvLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (fireTvSubmenu.style.display === 'block') {
        fireTvSubmenu.style.display = 'none';
    } else {
        fireTvSubmenu.style.display = 'block';
    }
});
mainMenuLink2.addEventListener('click', function (event) {
    event.preventDefault();

    fireTvSubmenu.style.display = 'none';
});

const kindleLink = document.getElementById('kindle-link');
const kindleSubmenu = document.getElementById('kindle-submenu');
const mainMenuLink3 = document.getElementById('main-menu-link3');

kindleLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (kindleSubmenu.style.display === 'block') {
        kindleSubmenu.style.display = 'none';
    } else {
        kindleSubmenu.style.display = 'block';
    }
});
mainMenuLink3.addEventListener('click', function (event) {
    event.preventDefault();

    kindleSubmenu.style.display = 'none';
});

const mobileLink = document.getElementById('mobile-link');
const mobileSubmenu = document.getElementById('mobile-submenu');
const mainMenuLink4 = document.getElementById('main-menu-link4');

mobileLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (mobileSubmenu.style.display === 'block') {
        mobileSubmenu.style.display = 'none';
    } else {
        mobileSubmenu.style.display = 'block';
    }
});
mainMenuLink4.addEventListener('click', function (event) {
    event.preventDefault();

    mobileSubmenu.style.display = 'none';
});

const menLink = document.getElementById('men-link');
const menSubmenu = document.getElementById('men-submenu');
const mainMenuLink5 = document.getElementById('main-menu-link5');

menLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (menSubmenu.style.display === 'block') {
        menSubmenu.style.display = 'none';
    } else {
        menSubmenu.style.display = 'block';
    }
});
mainMenuLink5.addEventListener('click', function (event) {
    event.preventDefault();

    menSubmenu.style.display = 'none';
});

const womenLink = document.getElementById('women-link');
const womenSubmenu = document.getElementById('women-submenu');
const mainMenuLink6 = document.getElementById('main-menu-link6');

womenLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (womenSubmenu.style.display === 'block') {
        womenSubmenu.style.display = 'none';
    } else {
        womenSubmenu.style.display = 'block';
    }
});
mainMenuLink6.addEventListener('click', function (event) {
    event.preventDefault();

    womenSubmenu.style.display = 'none';
});
// HEADER FOOTER END HERE


// MAIN CONTENT
let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")


console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100  // 700

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}
//render automatic
function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 4000);


// ITEMS SLIDER COLUMN// Function to initialize a carousel container
function initializeCarousel(containerClass) {
    const container = document.querySelector(`.${containerClass}`);
    const carousel = container.querySelector('.carousel');
    const prevButton = container.querySelector('.prev-button');
    const nextButton = container.querySelector('.next-button');

    // Adjust the scroll position when the next button is clicked
    nextButton.addEventListener('click', () => {
        const scrollAmount = container.offsetWidth;
        carousel.scrollLeft += scrollAmount;

        // Check if we have reached the end
        if (carousel.scrollLeft + container.offsetWidth >= carousel.scrollWidth) {
            // Stop further scrolling
            carousel.scrollLeft = carousel.scrollWidth - container.offsetWidth;
        }
    });

    // Adjust the scroll position when the prev button is clicked
    prevButton.addEventListener('click', () => {
        const scrollAmount = container.offsetWidth;
        carousel.scrollLeft -= scrollAmount;

        // Check if we have reached the beginning
        if (carousel.scrollLeft <= 0) {
            // Stop further scrolling
            carousel.scrollLeft = 0;
        }
    });
}

// Initialize both carousel containers
initializeCarousel('today-deals-container');
initializeCarousel('computer-accessories-container');
