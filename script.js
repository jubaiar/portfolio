// if (!navigator.userAgent.includes("ArtisBrowser")) {
//     window.location.replace("http://www.youtube.com");
// }

var whitelist = ["87.*.*.*", "10.0.*.*"];

// Get the user's IP address
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    var userIP = data.ip;

    // Check if the user's IP address matches any of the allowed patterns
    var isAllowed = whitelist.some(function(ipPattern) {
      var patternParts = ipPattern.split('.');
      var userParts = userIP.split('.');

      for (var i = 0; i < patternParts.length; i++) {
        if (patternParts[i] === '*') {
          continue;
        }
        if (patternParts[i] !== userParts[i]) {
          return false;
        }
      }
      return true;
    });

    if (!isAllowed) {
      window.location.replace("http://example.com"); // redirect to another URL
    }
  });

var swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
        allowTouchMove: true,
        slidesPerView: 'auto',
        grabCursor: true,
        preventClicks: true,
        spaceBetween: 30,
        keyboardControl: true,
        speed: 1000,
        pagination: {
            el: null
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: true
        },
        mousewheel: {
            enable: true
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            767: {
                scrollbar: {
                    hide: true
                },
                spaceBetween: 0,
                autoHeight: true,
                centeredSlides: false,
                slidesOffsetAfter: 85
            }
        },
        on: {
            resize: function () {
                var windowWidth = $(window).width();
                if(windowWidth <= 767){
                        swiperBottomScrollbarFull.direction('vertical');
                        swiperBottomScrollbarFull.detachEvents();
                }else{
                        swiperBottomScrollbarFull.direction('horizontal');
                        swiperBottomScrollbarFull.attachEvents();
                }
                swiperBottomScrollbarFull.update();
            }
        }
    });
