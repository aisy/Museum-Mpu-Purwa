$(document).ready(function () {

    // get url name
    var url_string = window.location.href;
    var url = new URL(url_string);

    // place url name in variable
    var value = url.searchParams.get("name");

    // set content from url get name
    if (value == "arca") {
        $("#title").html("Arca");
    } else if (value == "topeng") {
        $("#title").html("Topeng");
    } else if (value == "senjata") {
        $("#title").html("Keris & Senjata");
    }

    // get data
    $.ajax({
        dataType: 'json',
        url: './data/data.json',
        success: function (data) {

            // foreach to show data
            var i = 0;
            $.each(data[value], function (key, val) {
                handleSlider();
                contentSlider();
                
                // $('#result-all').append('<div class="col-md-4"><div class="card remove-border"><img class="card-img-top" src="' + val.img1 + '" alt=""><div class="card-body"><h4 class= "card-title text-center text-uppercase">' + val.nama + '</h4></div ></div></div>');
                
                if (key == 0) {
                    // $('#container').html('<div class="section box current"> <div class="slide" data-anchor="slide1"> <div class="container"> <div class="row"> <div class="col-md-8"> <img id="img-slideMain" class="img-thumbnail" alt="" style="width:100%; height:630px"> </div> <div class="col-md-4"> <div class="row"> <div class="col-md-12" style="margin-bottom: 15px"> <img src="' + val.img1 + '" id="img-slide1" class="img-thumbnail" alt="" style="width:200px; height:200px"> </div> <div class="col-md-12" style="margin-bottom: 15px"> <img src="' + val.img2 + '" id="img-slide2" class="img-thumbnail" alt="" style="width:200px; height:200px"> </div> <div class="col-md-12" style="margin-bottom: 15px"> <img src="' + val.img3 + '" id="img-slide3" class="img-thumbnail" alt="" style="width:200px; height:200px"> </div> </div> </div> <div class="col-md-12"> <div class="text-center"> <h2>' + val.nama + '</h2> </div> <div class="text-center description"> <ul class="list-unstyled"> <li>Nama Benda : ' + val.nama + '</li> <li>Bahan : ' + val.bahan + '</li> <li>Ukuran : ' + val.ukuran + '</li> <li>Asal : ' + val.asal + '</li> </ul> </div> </div> </br> <div class="col-md-12" style="margin-bottom: 160px"> <p class="description"> ' + val.deskripsi + ' </p> </div> </div> </div> </div></div>');
                    $('#container').append('<div class="section box current">'+val.nama+'</div>');
                }
                // $('#container').append('<div class="section box">' + val.nama + '</div>');
                $('#container').append('<div class="section box"> <div class="slide" data-anchor="slide1"> <div class="container"> <div class="row"> <div class="col-md-8"> <img id="img-slideMain" class="img-thumbnail" alt="" style="width:100%; height:630px"> </div> <div class="col-md-4"> <div class="row"> <div class="col-md-12" style="margin-bottom: 15px"> <img src="' + val.img1 + '" id="img-slide1" class="img-thumbnail" alt="" style="width:200px; height:200px"> </div> <div class="col-md-12" style="margin-bottom: 15px"> <img src="' + val.img2 + '" id="img-slide2" class="img-thumbnail" alt="" style="width:200px; height:200px"> </div> <div class="col-md-12" style="margin-bottom: 15px"> <img src="' + val.img3 + '" id="img-slide3" class="img-thumbnail" alt="" style="width:200px; height:200px"> </div> </div> </div> <div class="col-md-12"> <div class="text-center"> <h2>' + val.nama + '</h2> </div> <div class="text-center description"> <ul class="list-unstyled"> <li>Nama Benda : ' + val.nama + '</li> <li>Bahan : ' + val.bahan + '</li> <li>Ukuran : ' + val.ukuran + '</li> <li>Asal : ' + val.asal + '</li> </ul> </div> </div> </br> <div class="col-md-12" style="margin-bottom: 160px"> <p class="description"> ' + val.deskripsi + ' </p> </div> </div> </div> </div></div>')
                i++;
            });

        }
    })

    function handleSlider() {
        // set var to handle slider
        $prev = $('#prev');
        $next = $('#next');
        update_links();

        // set navigator slider
        $('#navigator a').click(function (e) {
            var $current = $('.current');
            var left = this.id === "next" ? "-250%" : "150%";
            var $element_to_animate = this.id === "next" ? $current.next() : $current.prev();

            $current.stop().animate({
                left: left
            }, 500).removeClass('current');

            $element_to_animate.stop().animate({
                left: '25%'
            }, 500).addClass('current');

            update_links();
            e.preventDefault();
        });
    }
    
    // create function link
    function update_links() {
        var $current = $('.current');
        var show_or_hide_prev = $current.prev().length > 0;
        var show_or_hide_next = $current.next().length > 0;

        $prev.toggle(show_or_hide_prev);
        $next.toggle(show_or_hide_next);
    }

    function contentSlider(params) {
        var defaultImage = $('#img-slide1').attr('src');
        $('#img-slideMain').attr('src', defaultImage);

        // button change image
        $('#img-slide1').click(function () {
            defaultImage = $('#img-slide1').attr('src');
            $('#img-slideMain').attr('src', defaultImage);
        });
        $('#img-slide2').click(function () {
            defaultImage = $('#img-slide2').attr('src');
            $('#img-slideMain').attr('src', defaultImage);
        });
        $('#img-slide3').click(function () {
            defaultImage = $('#img-slide3').attr('src');
            $('#img-slideMain').attr('src', defaultImage);
        });
    }

});