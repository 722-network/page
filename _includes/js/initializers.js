$(document).ready(function(){
  $('time.comment_timestamp').each(function () {
    var epoch = $(this).attr('datetime');
    $(this).html(moment.unix(epoch).format("MMMM Do YYYY, h:mm:ss a"));
  });

	//add Remote Post Fetcher
	window.remotePostFetcher = function(url, cb) {
		$.ajax(url).done(cb)
	}
});
