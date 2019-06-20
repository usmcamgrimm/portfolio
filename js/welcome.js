$(window).on("load", function()
{
	$(".overlay, .modal").addClass("active");
});

$(".close, .overlay").on("click", function()
{
	$(".overlay, .modal").removeClass("active");
});

$(document).keyup(function(e)
{
	//detect escape key
	if (e.keyCode === 27)
	{
		$(".overlay, .modal").removeClass("active");
	}
});