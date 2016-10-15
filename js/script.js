(function($) {

    var x = null;
    $(function() {

            x = $('#scoreboard').carousel3d({
                perspective: 1000,
                width: 900,
                progress: false,
                controller: false
            });
        
    });

    function test(){
        x.carousel3d('next');
        // $.get( "https://sheets.googleapis.com/v4/spreadsheets/186KgJ7b2o61Wo6adPfj9cSrExHOKjxsifAMuWtxySEE/values/B1:B4?key=AIzaSyAcjG3QTAh3CXSrhCEdT_M2YtFHsiDDPWk", function( data ) {
        //     $("#test1").html(data.values[0]);
        //     $("#test2").html(data.values[1]);
        //     $("#test3").html(data.values[2]);
        //     $("#test4").html(data.values[3]);
        //
        // });
    }


    setInterval(test, 3000);
}(jQuery));