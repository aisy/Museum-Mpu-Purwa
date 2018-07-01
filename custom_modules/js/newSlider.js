
// handle click images in slider
function clicked1(i) {
    return function () {
        // console.log('function : '+i);
        defaultImage = $(this).attr('src');
        console.log(defaultImage);
        $('#slideMain-' + i).attr('src', defaultImage);
        // console.log("1 klik")
    }
}

$('.dropdown-submenu > a').on("click", function (e) {
    var submenu = $(this);
    $('.dropdown-submenu .dropdown-menu').removeClass('show');
    submenu.next('.dropdown-menu').addClass('show');
    e.stopPropagation();
});

$('.dropdown').on("hidden.bs.dropdown", function () {
    // hide any open menus when parent closes
    $('.dropdown-menu.show').removeClass('show');
});

// handle load title
function title(value) {
    if (value == "arca") {
        $(".title").html('<img src="http://museummpupurwa.com/images/sub%20judul/koleksi%20arca.png" class="in" alt="" srcset="" height="150px"><img src="http://museummpupurwa.com/images/sub%20judul/koleksi%20arca%201.png" class="en" alt="" srcset="" height="150px" style="display:none">');
    } else if (value == "topeng") {
        $(".title").html('<img src="http://museummpupurwa.com/images/sub%20judul/topeng%20malang.png" class="in" alt="" srcset="" height="150px"><img src="http://museummpupurwa.com/images/sub%20judul/topeng%20malang%201.png" class="en" alt="" srcset="" height="150px" style="display:none">');
    } else if (value == "senjata") {
        $(".title").html('<img src="http://museummpupurwa.com/images/sub%20judul/keris%20dan%20senjata%20tjm.png" class="in" alt="" srcset="" height="150px"><img src="http://museummpupurwa.com/images/sub%20judul/keris%20dan%20senjata%20tjm%201.png" class="en" alt="" srcset="" height="150px" style="display:none">');
    }
}

// handle language
function pilihBahasaIndo() {
    $(".in").show();
    $(".en").hide();
}
function pilihBahasaEng() {
    $(".en").show();
    $(".in").hide();
}
function defaultLang() {
    $(".en").hide();
    $(".in").show();
}

// handle fab
$("#main").click(function () {
    $("#mini-fab").toggleClass('hidden');
});

// handle search button
$('#searchSubmit').click(function () {
    var search_val = $('#searchInput').val();
    window.location.href = 'http://museummpupurwa.com/search.html?search='+search_val;
});


/**
 * Document READY
 */
$(document).ready(function () {

    // get url name
    var url_string = window.location.href;
    var url = new URL(url_string);

    // place url name in variable
    var value = url.searchParams.get("name");
    $('[data-toggle="tooltip"]').tooltip();

    // set content from url get name
    defaultLang();
    title(value);

    // init fullPage.js
    initFullpage();
    // initFullpageKunjungi();

    // get data
    $.ajax({
        dataType: 'json',
        url: './data/data.json',
        success: function (data) {
            $.each(data[value], function (key, val) {
                $('#result-all').append('<div class="col-md-4"><a href="'+val.link+'"><div class="card remove-border"><img class="card-img-top" src="' + val.img + '" alt=""><div class="card-body"><h4 class= "card-title text-center text-uppercase">' + val.nama + '</h4></div ></div></a></div>');
            });
        }
    })

    // set image slide
    var imageSlider = $('.slide').length;
    console.log(imageSlider);

    for (var i = 0; i <= imageSlider; i++) {

        $('#img-slideMain').attr('id', 'slideMain-' + i);
        $('#img-slide1').attr('id', 'img-s-1-' + i);
        $('#img-slide2').attr('id', 'img-s-2-' + i);
        $('#img-slide3').attr('id', 'img-s-3-' + i);

        // button change image
        $('#img-s-1-' + i).click(clicked1(i));
        $('#img-s-2-' + i).click(clicked1(i));
        $('#img-s-3-' + i).click(clicked1(i));
    }

    function initFullpage() {
        // set fullpagejs
        $('#fullpage').fullpage({
            anchors: ['content', 'list'],
            scrollOverflow: true,
            responsiveWidth: true,
            responsiveSlides: true
        });
    }

    function initFullpageKunjungi(){
        $('#fullpageKunjungi').fullpage({
            anchors: ['Facility', 'Denah-1', 'Denah-2', 'maps'],
            scrollOverflow: true,
            responsiveWidth: 1400,
            responsiveSlides: true
        })
    }

});