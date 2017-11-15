var video = function video(containerId, options) {
	var html = '<video width="600" autoplay>\
<source src="' + options[Math.round(Math.random() * options.length-1)].src + '" type="video/mp4">\
</video>';

	var container = $('#' + containerId);
	var video = $(html);
	container.append(video);
}
