var render = function render() {
    var productsContainer = 'productsContainer';

    $.get('js/structure.json', function(structure) {
    	// Rendering videos
    	video('videoContainer', structure.videoList);

    	// Rendering product Lists
        structure.productLists.forEach(function(item) {
            productList(productsContainer, item);
        });
    });
}