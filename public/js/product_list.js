var productList = function productList(containerId, options) {
	var productsContainerId = 'products_' + options.title;
	var html = '\
<div class="row wow fadeInUp">\
<div class="text-center"><h3 class="title">' + options.title + '</h3></div>\
	<div class="col-lg-12">\
	  <div class="carousel slide" id="portfolio-carousel">\
	    <div class="carousel-inner">\
	        <div class="item  active">\
	          <div id="' + productsContainerId + '" class="row">\
	          </div>\
	        </div><!--/ Item end -->\
	    </div><!-- Carousel inner end -->\
	    <div class="dart-carousel-controller">\
	      <a data-slide="prev" href="#portfolio-carousel" class="left"><i class="fa fa-chevron-left"></i></a>\
	      <a data-slide="next" href="#portfolio-carousel" class="right"><i class="fa fa-chevron-right"></i></a>\
	    </div><!-- Controller end -->\
	  </div><!-- Carousel end -->\
	</div><!-- Main Col end -->\
</div><!--/ Main row end -->';

	var container = $('#' + containerId);
	var list = $(html);
	container.append(list);

	options.products.forEach(function(item) {
        productCard(productsContainerId, item);
    });

}