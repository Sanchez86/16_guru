   /*circle progressbar*/


    $(document).ready(function () {


        $('#demo-pie-1').pieChart({
            barColor: '#00aff0',
            trackColor: '#eae9ea',
            lineCap: 'butt',
            lineWidth: 12,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });

        $('#demo-pie-2').pieChart({
            barColor: '#00aff0',
            trackColor: '#eae9ea',
            lineCap: 'butt',
            lineWidth: 12,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });

        $('#demo-pie-3').pieChart({
            barColor: '#00aff0',
            trackColor: '#eae9ea',
            lineCap: 'butt',
            lineWidth: 12,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });

        $('#demo-pie-4').pieChart({

            barColor: '#00aff0',
            trackColor: '#eae9ea',
            lineCap: 'butt',
            lineWidth: 12,
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });


    });
    /* end circle progressbar*/