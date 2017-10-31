var productCard = function productCard(containerId, options) {
    var html = '\
    <div class="col-xs-6 col-sm-3 col-md-3">\
        <div class="thumbnail">\
            <div class="caption">\
              <div class="caption-content">\
                  <h3>' + options.title + '</h3>\
                  <p>' + options.text + '</p>\
              </div>\
            </div>\
            <img src="' + options.image + '" alt="portfolio">\
        </div>\
    </div>';

    var element = $(html);
    var container = $('#' + containerId);
    container.append(element);
}