/*������ �� ����*/

var top_show = 150; // � ����� ��������� ������ ��������� �������� ����� ������ "������"
var delay = 1000; // �������� ���������
$(document).ready(function () {
    $(window).scroll(function () { // ��� ��������� �������� � ��� �������
        /* � ����������� �� ��������� ������ ��������� � �������� top_show, �������� ��� ��������� ������ "������" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // ��� ����� �� ������ "������" �������� � ��� �������
        /* ������� ��������� ������ */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

/* ����� ������ �� ����*/


/*������� �������� �� ������*/

$(document).ready(function () {
   /* var $video = $('#bgvid');
    $('*').click(function () {
        $video[0].play();
    });
    $video.on('canplaythrough', function() {
	   this.play();
	});*/

    $("#navbar").on("click", "a", function (event) {
        //�������� ����������� ��������� ������� �� ������
        event.preventDefault();

        //�������� ������������� ���� � �������� href
        var id = $(this).attr('href'),

		//������ ������ �� ������ �������� �� ����� �� ������� ��������� �����
			top = $(id).offset().top - 147;

        //��������� ������� �� ���������� - top �� 1500 ��
        $('body,html').stop().animate({ scrollTop: top }, 1000);
    });

    $(".nav").on("click", "a", function (event) {
        //�������� ����������� ��������� ������� �� ������
        event.preventDefault();

        //�������� ������������� ���� � �������� href
        var id = $(this).attr('href'),

		//������ ������ �� ������ �������� �� ����� �� ������� ��������� �����
			top = $(id).offset().top - 147;

        //��������� ������� �� ���������� - top �� 1500 ��
        //$('body,html').animate({scrollTop: top}, 1000);
    });

/*����� ������� �������� �� ������*/


/*menu*/

    $(".dropdown a").on('mouseenter', function () {
        $(this).children("span").toggleClass("glyphicon-menu-up glyphicon-menu-down")
    });
    $(".dropdown a").on('mouseleave', function () {
        $(this).children("span").toggleClass("glyphicon-menu-up glyphicon-menu-down")
    });

    /*end menu*/

    /* Tab */

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
    $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
    $('#myTabs a:first').tab('show') // Select first tab
    $('#myTabs a:last').tab('show') // Select last tab
    $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
        
    /* end Tab */
    $(window).stellar();
	

});

	
 