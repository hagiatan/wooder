$(document).ready(function () {
  //menu header
  let btnMenu = $("header .btn-menu");
  let hamburgerMenu = $(".hamburger-menu");
  let menuMb = $(".menu-mb");
  btnMenu.on("click", function () {
    hamburgerMenu.toggleClass("clicked");
    menuMb.toggleClass("show-menu-mobile");
  });

  $(window).on("resize", function () {
    let windowWidth = $(window).innerWidth();

    if (windowWidth > 991) {
      hamburgerMenu.removeClass("clicked");
      menuMb.removeClass("show-menu-mobile");
    }
  });

  //language
  let langCurrent = $(".lang__current");
  let langOpt = $(".lang__option");
  let langItems = $(".lang__option-item");
  let langSpan = $(".lang__current-item span");

  langCurrent.on("click", function (e) {
    e.stopPropagation();
    langOpt.toggleClass("active-lang");
  });

  langItems.on("click", function () {
    let textItem = $(this).text();
    let textTemp = langSpan.text();
    langSpan.html(textItem);
    $(this).text(textTemp);
  });
  $(document).on("click", function () {
    langOpt.removeClass("active-lang");
  });

  //change background header
  let header = $("header");
  let slider = $(".slider");
  let heightHeader = header.height();
  let heightSlider = slider.height();

  function changeBgHeader() {
    let scrollY = window.pageYOffset;
    if (scrollY > heightSlider - heightHeader) {
      header.addClass("bg-header");
    } else {
      header.removeClass("bg-header");
    }
  }

  //backtotop
  let backtotop = $(".back-to-top");
  let footer = $("footer");
  let Heightfooter = footer.height();
  let getHeightWindow = $(window).innerHeight();
  let bodyHeight = $("body").height();

  function showBackToTop() {
    let scrollY = window.pageYOffset;
    let isFooter = scrollY + getHeightWindow > bodyHeight - Heightfooter;
    if (scrollY >= heightSlider && !isFooter) {
      backtotop.addClass("active");
    } else {
      backtotop.removeClass("active");
    }
  }
  backtotop.on("click", function () {
    window.scrollTo({
      top: 0,
    });
  });

  // call function when scroll page
  $(document).on("scroll", function () {
    changeBgHeader();
    showBackToTop();
  });

  //active link when click menu item header to section
  let menus = $(".menu-desk a");
  let sections = $("main section");

  function removeActiveMenu(classActive) {
    menus.removeClass(classActive);
  }

  menus.on("click", function (e) {
    e.preventDefault();
    let classNameItem = $(this).attr("href").replace("#", "");
    let sectionItem = $(`.${classNameItem}`);
    let offsetSectionItem = sectionItem.offset();
    window.scrollTo({
      top: offsetSectionItem.top - heightHeader + 1,
    });
    removeActiveMenu("active-menu-desk");
    $(this).addClass("active-menu-desk");
  });

  //active link when scroll menu item header to section
  $(window).on("scroll", function (e) {
    let scrollY = window.pageYOffset;
    sections.each(function (index, section) {
      let offsetSection = $(section).offset();
      if (
        scrollY > offsetSection.top - heightHeader &&
        scrollY < offsetSection.top + section.offsetHeight
      ) {
        removeActiveMenu("active-menu-desk");
        $(menus[index]).addClass("active-menu-desk");
        // $('.menu-desk a[href="#' + $(section).attr('id') + '"]').addClass("active-menu-desk");
      } else {
        $(menus[index]).removeClass("active-menu-desk");
      }
    });
  });

  //slider

  let listItemSlider = $(".slider__item");
  let currentSlider = 0;
  let nextBtn = $(".--next");
  let prevBtn = $(".--prev");
  let numberSlider = $(".slider__bottom .paging__number");
  let dotLi = $(".paging__dotted ul li");

  listItemSlider.each((indexSlider, itemSlider) => {
    if ($(itemSlider).hasClass("active")) {
      currentSlider = indexSlider;
    }
    // console.log(itemSlider.hasClass("active"));
  });

  function showNumberSlider(index) {
    numberSlider.html(`0${index}`);
  }

  //default active slider
  showNumberSlider(currentSlider + 1);
  $(dotLi[currentSlider]).addClass("active");

  nextBtn.on("click", () => {
    if (currentSlider < listItemSlider.length - 1) {
      goTo(currentSlider + 1);

      // listItemSlider[currentSlider].classList.remove("active");
      // listItemSlider[currentSlider + 1].classList.add("active");
      // currentSlider++;
    } else {
      goTo(0);
      // listItemSlider[currentSlider].classList.remove("active");
      // listItemSlider[0].classList.add("active");
      // currentSlider = 0;
    }
  });

  prevBtn.on("click", function () {
    if (currentSlider > 0) {
      goTo(currentSlider - 1);
    } else {
      goTo(listItemSlider.length - 1);
    }
  });

  function goTo(index) {
    $(listItemSlider[currentSlider]).removeClass("active");
    $(listItemSlider[index]).addClass("active");
    $(dotLi[currentSlider]).removeClass("active");
    $(dotLi[index]).addClass("active");
    currentSlider = index;
    showNumberSlider(currentSlider + 1);
  }

  dotLi.each(function (index, liItem) {
    $(liItem).on("click", function () {
      goTo(index);
    });
  });

  //popup video
  let btnVideos = $(".videos__item .play-button");
  let popupBtn = $(".popup-video");
  let closePopupBtn = $(".popup-video .close");
  let iframe = $(".popup-video iframe");
  btnVideos.on("click", function (e) {
    e.stopPropagation();
    let videoId = $(this).attr("data-video-id"),
      iframe_src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.attr("src", iframe_src);
    popupBtn.addClass("active");
  });

  function hidePopup() {
    iframe.attr("src", "");
    popupBtn.removeClass("active");
  }

  closePopupBtn.click(function () {
    hidePopup();
  });
  iframe.click(function (e) {
    e.stopPropagation();
  });
  $(document).on("click", function () {
    hidePopup();
  });

  //Tabs
  let titleTabs = $(".news__title-wrap h3");
  let contentTabs = $(".news__wrap");
  titleTabs.click(function (item, index) {
    let tagID = index + 1;
    titleTabs.toggleClass("active");
    contentTabs.toggleClass("active");
    $("item").addClass("active");
    $("document")
      .click(".new__list-" + tagID)
      .addClass("active");
  });

  //faq
  let acc = $(".btn-acc");
  acc.on("click", function () {
    acc.next().slideUp(200);
    acc.removeClass("active");
    if ($(this).next().css("display") == "none") {
      $(this).addClass("active");
    }
    $(this).next().stop().slideToggle(200);
  });
});
