$(function () {
    //prevent a link
    $("a").click(function (e) {
        e.preventDefault();
    });

    //🎈 link prevent end

    //header
    //show depth02 menu when menu is mouseentered

    let menu01 = $(".header .gnb .depth01");
    let header = $(".header");

    menu01.mouseenter(function () {
        if ($(this).find("ul").hasClass("depth02") === true) {
            menu01.find("div").removeClass("on");
            $(this).find("div").addClass("on");
            header.addClass("on");
        } else {
            header.removeClass("on");
        }
        //underline of menu when it's hover
        $(this).addClass("active");
    });
    menu01.mouseleave(function () {
        $(this).find("div").removeClass("on");
        header.removeClass("on");
        menu01.removeClass("active");
    });

    //header-mobile
    //change the background of header when it's scrolling
    let mainVisual = $(".main__visual figure");
    let mainVisualTop = mainVisual.height();

    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        if (scrollBar > mainVisualTop) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    });

    // remove event banner when scrolling
    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        if (scrollBar > 0) {
            
            header.css("top", "0");
        } else{
            
            header.css('top', '43px');
        }
    });

    //🎈header end

    //mainvisual
    //change imgs each slides in mobile
    let mainVisualPcImg = $(".main__visual .swiper-slide");
    if ($(window).width() < 900) {
        mainVisualPcImg.each(function (item) {
            let i = item + 1;
            mainVisualPcImg
                .eq(item)
                .find("img")
                .attr("src", "img/mainvisual0" + i + "-mobile.png");
        });
    }

    //🎈mainvisual end

    //cont01
    //change the contents when category is clicked
    let cont01Menu = $(".cont01 .item ul li");
    let cont01Contents = $(".cont01 .item");

    cont01Menu.click(function () {
        cont01Contents.removeClass("on");
        cont01Contents.eq($(this).index()).addClass("on");
    });

    //🎈cont01 end

    //cont02
    //scrolling X축으로
    let cont02 = document.querySelector(".cont02");
    let cont02List = cont02.querySelector(".list");
    let cont02ListBox = cont02List.querySelector(".list__box");
    let cont02BoxItem = cont02ListBox.querySelectorAll(".item");
    let boxNumber = cont02BoxItem.length;
    let widthWrap = 508 * boxNumber;

    cont02ListBox.style.width = widthWrap + "px";
    cont02ListBox.style.height = widthWrap + "px";
    cont02List.style.width = widthWrap + 508 + "px";

    cont02.addEventListener("wheel", function () {
        var scr = cont02List.scrollTop;
        cont02ListBox.style.left = -scr + "px";
    });

    //mobile일때
    if ($(window).width() < 1025) {
        cont02List.style.width = "auto";
        cont02ListBox.style.height = "auto";
        function removeDefaultEvent(event) {
            event.preventDefault();
        }
        cont02ListBox.addEventListener("wheel", removeDefaultEvent, {
            passive: false,
        });
    }

    //🎈cont02 end

    //cont04
    //tap menu
    let tapMenu = document.querySelectorAll(".cont04 .category__btn li button");
    let cont04List = document.querySelectorAll(".cont04 .category__list");
    for (let i = 0; i < tapMenu.length; i++) {
        tapMenu[i].addEventListener("click", () => {
            cont04List.forEach((item) => {
                item.classList.remove("on");
            });
            tapMenu.forEach((item) => {
                item.classList.remove("on");
            });
            cont04List[i].classList.add("on");
            tapMenu[i].classList.add("on");
        });
    }

    //🎈cont04 end

    //footer
    //toggle down for the time information
    let centerToggle = $(".footer__info__center > a");
    let showroomToggle = $(".footer__info__showroom > a");

    centerToggle.click(function () {
        centerToggle.nextAll().toggleClass("on");
    });
    showroomToggle.click(function () {
        showroomToggle.nextAll().toggleClass("on");
    });

    //🎈 footer end

    //top-btn
    //scroll to top when it's clicked
    let topBtn = $(".top-btn");
    topBtn.click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            800
        );
    });
    //🎈top-btn end

}); //script end
