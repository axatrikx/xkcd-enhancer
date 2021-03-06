$(".comicNav").append("<li><a id='explainLink' class='js-open-modal href='#' data-modal-id='popup'>Explain this Comic</a></li>");

$("html").prepend('<div id="popup" class="modal-box">  <header><a href="#" class="js-modal-close close">×</a></header><div class="modal-body"><iframe id="xpiFrame" src="" width="100%" height="650px"></iframe>></div><footer id="footer">xkcd-enhancer</footer</div>');

$(function(){
var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");
// On click of explain button, shows the iframe.
$('#explainLink').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
	var comicID = parseInt($('a[rel="prev"]').attr('href').replace(/\//g, ''))+1;
    $("#xpiFrame").attr("src", 'https://www.explainxkcd.com/wiki/index.php/'+comicID); 
    $(".modal-overlay").fadeTo(900, 0.7);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
//close iframe
$(".js-modal-close, .modal-overlay").click(function() {
  $(".modal-box, .modal-overlay").fadeOut(900, function() {
    $(".modal-overlay").remove();
  });
});
});
//position the iframe to the center of window
document.getElementById("popup").style.left = window.innerWidth*0.05 + '!important';


// Display Alt text
$("#comic").append('<div><ul>'+$('#comic>img').attr('title')+'</ul></div>');
