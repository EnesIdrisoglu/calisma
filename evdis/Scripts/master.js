


    function idAl(id,kendisi)
    {
        

        var li=document.getElementsByName("tabs");
        for(i=0;i<li.length;i++){
            li[i].classList.remove('active');
        }
        kendisi.classList.add('active');

        var tabs=document.getElementsByClassName("Tablar");
        for(j=0;j<tabs.length;j++)
        {
            tabs[j].style.display = "none";
        }
        var geldi=document.getElementById(id).style.display="block";
    }
    function aktif(bu){
        var li=document.getElementsByName("menuLi");
        for(i=0;i<li.length;i++){
            li[i].classList.remove('active');
        }
        bu.classList.add('active');
    }









$("#yorumlar").unslider({
    autoplay: false,
    nav: false,
    arrows: false,
    speed: 800
});
var nav = $('#yorumNav li');
$(nav).first().addClass('yorumNavActive');
$('#yorumNav li').mouseenter(function() {
    $('#yorumlar').unslider('animate:' + $(this).index());
    nav.removeClass('yorumNavActive');
    nav.eq(($(this).index())).addClass('yorumNavActive');
})
$('#yorumlar').on('unslider.change', function(event, index, slide) {
    var tutNav = $('#yorumlar>#yorumNav>li').eq(index)
    var kaldir=$('#yorumlar>#yorumNav>li')
    kaldir.removeClass('yorumNavActive');
    tutNav.addClass('yorumNavActive');
});