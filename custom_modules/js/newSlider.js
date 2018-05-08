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

            // set empty variable to handle data
            var dataCollection = [];

            // foreach to show data
            // var i=0;

            initFullpage();

            $.each(data[value], function (key, val) {

                // console.log(val.nama);
                // dataCollection.push('<div class="slide" data-anchor="slide1"><div class= "content"><h1 id="title"></h1></div ><div class="container"><div class="row"><div class="col-md-8"><img id="img-slideMain" class="img-thumbnail" alt="" style="width:100%; height:630px"></div><div class="col-md-4"><div class="row"><div class="col-md-12" style="margin-bottom: 15px"><img src="'+val.img1+'" id="img-slide1" class="img-thumbnail" alt="" style="width:200px; height:200px"></div><div class="col-md-12" style="margin-bottom: 15px"><img src="'+val.img2+'" id="img-slide2" class="img-thumbnail" alt="" style="width:200px; height:200px"></div><div class="col-md-12" style="margin-bottom: 15px"><img src="'+val.img3+'" id="img-slide3" class="img-thumbnail" alt="" style="width:200px; height:200px"></div></div></div><div class="col-md-12"><div class="text-center"><h1>'+val.nama+'</h1></div><div class="text-center description"><ul class="list-unstyled"><li>Nama Benda : '+val.nama+'</li><li>Bahan : '+val.bahan+'</li><li>Ukuran : '+val.ukuran+'</li><li>Asal : '+val.asal+'</li></ul></div></div></br>div class="col-md-12" style="margin-bottom: 160px"><p class="description">'+val.deskripsi+'</p></div></div></div></div>');
                // $('#content').html('<div class="slide" data-anchor="'+val.id+'"><div class= "content'+i+'"><h1 id="title"></h1></div ><div class="container"><div class="row"><div class="col-md-8"><img id="img-slideMain" class="img-thumbnail" alt="" style="width:100%; height:630px"></div><div class="col-md-4"><div class="row"><div class="col-md-12" style="margin-bottom: 15px"><img src="' + val.img1 + '" id="img-slide1" class="img-thumbnail" alt="" style="width:200px; height:200px"></div><div class="col-md-12" style="margin-bottom: 15px"><img src="' + val.img2 + '" id="img-slide2" class="img-thumbnail" alt="" style="width:200px; height:200px"></div><div class="col-md-12" style="margin-bottom: 15px"><img src="' + val.img3 + '" id="img-slide3" class="img-thumbnail" alt="" style="width:200px; height:200px"></div></div></div><div class="col-md-12"><div class="text-center"><h1>' + val.nama + '</h1></div><div class="text-center description"><ul class="list-unstyled"><li>Nama Benda : ' + val.nama + '</li><li>Bahan : ' + val.bahan + '</li><li>Ukuran : ' + val.ukuran + '</li><li>Asal : ' + val.asal + '</li></ul></div></div></br>div class="col-md-12" style="margin-bottom: 160px"><p class="description">' + val.deskripsi + '</p></div></div></div></div>');
                $('#con-col').html('<div class="slider" data-anchor="slide' + val.nama + '" style="height: 544px;">Yolo</div >');
                $('#con-col').html('<div class="slider" data-anchor="slide' + val.nama + '" style="height: 544px;">Yolo</div >');
                // $.fn.fullpage.destroy();
                $('#result-all').append('<div class="col-md-4"><div class="card remove-border"><img class="card-img-top" src="' + val.img1 + '" alt=""><div class="card-body"><h4 class= "card-title text-center text-uppercase">' + val.nama + '</h4></div ></div></div>');
                // i++;
            });
            // $.fn.fullpage.reBuild();

        }
    })

    // set image slide
    var defaultImage = $('#img-slide1').attr('src');
    $('#img-slideMain').attr('src', defaultImage);

    // button change image
    $('#img-slide1').click(function () {
        defaultImage = $('#img-slide1').attr('src');
        $('#img-slideMain').attr('src', defaultImage);
        console.log("1 klik");
    });
    $('#img-slide2').click(function () {
        defaultImage = $('#img-slide2').attr('src');
        $('#img-slideMain').attr('src', defaultImage);
        console.log("2 klik")
    });
    $('#img-slide3').click(function () {
        defaultImage = $('#img-slide3').attr('src');
        $('#img-slideMain').attr('src', defaultImage);
        console.log("3 klik");
    });

    function initFullpage() {
        // set fullpagejs
        $('#fullpage').fullpage({
            anchors: ['content', 'list'],
            scrollOverflow: true,
            responsiveWidth: 900,
            responsiveSlides: true
        });
    }

});