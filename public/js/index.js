var render = function render() {
    var productsContainer = 'productsContainer';

    $.get('js/structure.json', function(structure) {
        structure.productLists.forEach(function(item) {
            productList(productsContainer, item);
        });
    });
}