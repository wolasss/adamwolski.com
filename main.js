eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3 2=8.7(".5");6(3 1=0,4=2.10;1<4;1++){2[1].11("9","5:14@12.13")}',10,15,'|i|mailLink|var|len|mailto|for|querySelectorAll|document|href|length|setAttribute|adamwolski|com|kontakt'.split('|'),0,{}));
var _0xc66b=["\x64\x61\x74\x61\x2D\x74\x69\x70","\x6B\x6F\x6E\x74\x61\x6B\x74\x40\x61\x64\x61\x6D\x77\x6F\x6C\x73\x6B\x69\x2E\x63\x6F\x6D","\x61\x74\x74\x72","\x5B\x64\x61\x74\x61\x2D\x65\x6D\x61\x69\x6C\x5D"];$(_0xc66b[3])[_0xc66b[2]](_0xc66b[0],_0xc66b[1]);
/* dont ya worry, the code above just prevents bots from getting my e-mail address */

$(function(){
	var $icon = $('.arrow i');

	$('.typed').typer();
	$('.arrow button').on('click', function() {
		if(!$(window).scrollTop()) {
			$.smoothScroll({offset: $('header').outerHeight()});
		} else {
			$.smoothScroll({offset: 0});
		}
	});

	$(document).scroll(function() {
		if($(document).scrollTop()>0) {
			$icon.removeClass('icon-down').addClass('icon-up');
		} else {
			$icon.removeClass('icon-up').addClass('icon-down');
		}
	});
	$('[data-tip]').tipr({mode: 'top'});
});