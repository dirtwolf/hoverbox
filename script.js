$(document).ready( function(){

	var boxnum = 16;

	createGrid(boxnum);
	hoverHandler();

	$(':button').click(function  () {
		$('.container').empty();
		boxnum = prompt('How many boxes wide?');
		createGrid(boxnum);
		hoverHandler();
	});
});

function createGrid (boxnum) {
	for (i=0;i<boxnum*boxnum;i++) {
		$('.container').append('<div class=box></div>');
	}
	var boxsize = 960 / boxnum;
	$('.box').css("width", boxsize).css("height", boxsize);
}

function hoverHandler () {
	$('.box').mouseover(function  () {
		$(this).addClass('black');
	});
}