// js hamburger-menu
const btnMenu = document.querySelector("header .btn-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuMb = document.querySelector(".menu-mb");
const menuMbItems = document.querySelectorAll(".menu-mb nav ul li a");
menuMbItems.forEach(function (item) {
    item.addEventListener("click", function () {
        menuMb.classList.remove("show-menu-mobile");
        hamburgerMenu.classList.remove("clicked");
        document.body.style.overflow = "initial";
    });
});

btnMenu.addEventListener("click", () => {
    if (menuMb.classList.contains("show-menu-mobile")) {
        hamburgerMenu.classList.remove("clicked");
        menuMb.classList.remove("show-menu-mobile");
        document.body.style.overflow = "initial";
    } else {
        hamburgerMenu.classList.add("clicked");
        menuMb.classList.add("show-menu-mobile");
        document.body.style.overflow = "hidden";
    }
});
window.addEventListener("resize", () => {
    let windowWidth = window.innerWidth;
    // console.log(windowWidth);
    if (windowWidth > 991) {
        hamburgerMenu.classList.remove("clicked");
        menuMb.classList.remove("show-menu-mobile");
        document.body.style.overflow = "initial";
    }
});

// language
let langCurrent = document.querySelector(".lang__current");
let langOpt = document.querySelector(".lang__option");
let langItems = document.querySelectorAll(".lang__option-item");
let langSpan = document.querySelector(".lang__current-item span");

langCurrent.addEventListener("click", function (e) {
    e.stopPropagation();
    langOpt.classList.toggle("active-lang");
});

langItems.forEach((item) => {
    item.addEventListener("click", () => {
        let textItem = item.textContent;
        let textTemp = langSpan.textContent;
        langSpan.innerHTML = textItem;
        item.textContent = textTemp;
    });
});

document.addEventListener("click", function () {
    langOpt.classList.remove("active-lang");
});

// change backgound header
let header = document.querySelector("header");
let slider = document.querySelector(".slider");
let heightHeader = header.clientHeight;
let heightSlider = slider.clientHeight;

function changeBgHeader() {
    let scrollY = window.pageYOffset;

    if (scrollY > heightSlider - heightHeader) {
        header.classList.add("bg-header");
    } else {
        header.classList.remove("bg-header");
    }
}

//backtotop
let backtotop = document.querySelector(".back-to-top");
let footer = document.querySelector("footer");
let Heightfooter = footer.clientHeight;
let getHeightWindow = window.innerHeight;
let bodyHeight = document.body;

function showBackToTop() {
    let scrollY = window.pageYOffset;
    console.log(scrollY);
    // let isFooter = $(window).scrollTop() + $(window).height() < $(document).height() - $("footer").height();
    let isFooter =
        scrollY + getHeightWindow < bodyHeight.clientHeight - Heightfooter;
    if (scrollY <= heightSlider || !isFooter) {
        backtotop.classList.remove("active");
    } else {
        backtotop.classList.add("active");
    }
}

backtotop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
    });
});

// call function when scroll page
document.addEventListener("scroll", function () {
    changeBgHeader();
    showBackToTop();
});

//active link when click menu item header to section
let menus = document.querySelectorAll(".menu-desk a");
let sections = [];

function removeActiveMenu(classActive) {
    menus.forEach(function (menuItem) {
        menuItem.classList.remove(classActive);
    });
}

menus.forEach(function (item, index) {
    let classNameItem = item.getAttribute("href").replace("#", "");
    let sectionItem = document.querySelector(`.${classNameItem}`);
    console.log(sectionItem);
    sections.push(sectionItem);

    item.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: sectionItem.offsetTop - heightHeader + 1,
        });
        removeActiveMenu("active-menu-desk");
        item.classList.add("active-menu-desk");
    });
});

//active link when scroll menu item header to section
window.addEventListener("scroll", function (e) {
    let scrollY = window.pageYOffset;
    sections.forEach(function (section, index) {
        if (
            scrollY > section.offsetTop - heightHeader &&
            scrollY < section.offsetTop + section.offsetHeight
        ) {
            removeActiveMenu("active-menu-desk");
            menus[index].classList.add("active-menu-desk");
        } else {
            menus[index].classList.remove("active-menu-desk");
        }
    });
});

//slider

// let listItemSlider = document.querySelectorAll(".slider__item");
// let currentSlider = 0;
// let nextBtn = document.querySelector(".--next");
// let prevBtn = document.querySelector(".--prev");
// let numberSlider = document.querySelector(".slider__bottom .paging__number");
// let dotLi = document.querySelectorAll(".paging__dotted ul li");

// listItemSlider.forEach((itemSlider, indexSlider) => {
//   if (itemSlider.classList.contains("active")) {
//     currentSlider = indexSlider;
//   }
// });

// function showNumberSlider(index) {
//   numberSlider.innerHTML = index.toString().padStart(2, "0");
// }

// //default active slider
// showNumberSlider(currentSlider + 1);
// dotLi[currentSlider].classList.add("active");

// nextBtn.addEventListener("click", () => {
//   if (currentSlider < listItemSlider.length - 1) {
//     goTo(currentSlider + 1);

//     // listItemSlider[currentSlider].classList.remove("active");
//     // listItemSlider[currentSlider + 1].classList.add("active");
//     // currentSlider++;
//   } else {
//     goTo(0);

//     // listItemSlider[currentSlider].classList.remove("active");
//     // listItemSlider[0].classList.add("active");
//     // currentSlider = 0;
//   }
// });

// prevBtn.addEventListener("click", function () {
//   if (currentSlider > 0) {
//     goTo(currentSlider - 1);

//     // listItemSlider[currentSlider].classList.remove("active");
//     // listItemSlider[currentSlider - 1].classList.add("active");
//     // currentSlider--;
//   } else {
//     goTo(listItemSlider.length - 1);

//     // listItemSlider[currentSlider].classList.remove("active");
//     // listItemSlider[listItemSlider.length - 1].classList.add("active");
//     // currentSlider = listItemSlider.length - 1;
//   }
// });

// function goTo(index) {
//   listItemSlider[currentSlider].classList.remove("active");
//   listItemSlider[index].classList.add("active");
//   dotLi[currentSlider].classList.remove("active");
//   dotLi[index].classList.add("active");
//   currentSlider = index;
//   showNumberSlider(currentSlider + 1);
// }

// dotLi.forEach(function (liItem, index) {
//   liItem.addEventListener("click", function () {
//     goTo(index);
//   });
// });

//popup video
let btnVideos = document.querySelectorAll(".videos__item-img");
let popupBtn = document.querySelector(".popup-video");
let closePopupBtn = document.querySelector(".popup-video .close");
let iframe = document.querySelector(".popup-video iframe");
let imgThumb = document.querySelector(".popup-video .img-video");

btnVideos.forEach(function (btnVideo) {
    btnVideo.addEventListener("click", function () {
        let videoId = btnVideo.getAttribute("data-video-id");
        let imgThumbID = `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

        iframe.setAttribute(
            "src",
            `https://www.youtube.com/embed/${videoId}?autoplay=1`
        );
        popupBtn.style.display = "flex";
        document.body.style.overflow = "hidden";

        imgThumb.setAttribute("src", imgThumbID);
        imgThumb.style.display = "block";
        imgThumb.style.opacity = 0.9;
        setTimeout(function () {
            imgThumb.style.opacity = 0.4;
            imgThumb.style.display = "none";
        }, 2000);
    });
});
closePopupBtn.addEventListener("click", function () {
    iframe.setAttribute("src", ``);
    popupBtn.style.display = "none";
    document.body.style.overflow = "initial";
});

popupBtn.addEventListener("click", function () {
    iframe.setAttribute("src", ``);
    imgThumb.setAttribute("src", ``);
    popupBtn.style.display = "none";
    document.body.style.overflow = "initial";
});

//tabs news

let titleTabs = document.querySelectorAll(".news__title-wrap h3");
let contentTabs = document.querySelectorAll(".news__wrap");

titleTabs.forEach((titleTab, index) => {
    titleTab.addEventListener("click", function () {
        let tagID = index + 1;
        titleTabs.forEach((title) => {
            title.classList.remove("active");
        });
        contentTabs.forEach((contentTab) => {
            contentTab.classList.remove("active");
        });
        titleTab.classList.add("active");
        document.querySelector(`.news__list-${tagID}`).classList.add("active");
    });
});

//According Tabs

let accordions = document.querySelectorAll(".btn-acc");

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
        for (let j = 0; j < accordions.length; j++) {
            if (i !== j) {
                accordions[j].nextElementSibling.style.maxHeight = null;
                accordions[j].classList.remove("active");
            }
        }

        accordions[i].classList.toggle("active");
        let panel = accordions[i].nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//Slider
$(window).resize(function () {
    location.reload();
});

let $carousel = $(".slider__item-wrap");
$carousel.flickity({
    //options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    preveNextButtons: false,
    on: {
        ready: function () {
            let dotted = $(".flickity-page-dots");
            paging = $(".slider__bottom .paging .paging__dotted");
            dotted.appendTo(paging);
        },
        change: function (index) {
            {
                let number = $(".slider__bottom .paging__number");
                let indexPage = index + 1;
                number.text(indexPage.toString().padStart(2, 0));
            }
        },
    },
});

//Photos
let $carouselPhoto = $(".photos__wrap");
$carouselPhoto.flickity({
    //options
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    fullscreen: true,
    lazyLoad: 2,
});

//previous
$(".controls .--prev").on("click", function () {
    $carousel.flickity("previous");
});

//next
$(".controls .--next").on("click", function () {
    $carousel.flickity("next");
});

//PhotoSwipe
var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute("data-size").split("x");
            item = {
                src: linkEl.getAttribute("href"),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute("src");
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return el.tagName && el.tagName.toUpperCase() === "FIGURE";
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split("&");
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split("=");
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (
        index,
        galleryElement,
        disableAnimation,
        fromURL
    ) {
        var pswpElement = document.querySelectorAll(".pswp")[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute("data-pswp-uid"),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
                    pageYScroll =
                        window.pageYOffset ||
                        document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width,
                };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(
            pswpElement,
            PhotoSwipeUI_Default,
            items,
            options
        );
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute("data-pswp-uid", i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(
            hashData.pid,
            galleryElements[hashData.gid - 1],
            true,
            true
        );
    }
};
initPhotoSwipeFromDOM(".carousel-img");
