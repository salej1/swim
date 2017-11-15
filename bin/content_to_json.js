// usage: node content_to_json.js ../assets/

var fs = require('fs');
var path = require('path');

var logPath = './run_' + Date.now().toString() + '.log';
var assetsPath = process.argv[2];

var log = function log(msj) {
	msj = Date.now().toString() + ': ' + msj;
	console.log(msj)
	//fs.appendFile(logPath, msj, 'utf-8');
}

var run = function run() {
	log('Content to json Start');
	var structure = {};

	// Import Products
	var productLists = [];
	var productsPath = path.join(__dirname, assetsPath, 'content', 'product');

	structure.productLists = productLists;
	log('Reading from ' + productsPath);

	var dirList = fs.readdirSync(productsPath);
	// each dir is a product list
	dirList.forEach(function(dir) {
		log('Adding ' + dir);
		var list = {title: dir, products: []};
		productLists.push(list);

		// eash file is a product
		var fileList = fs.readdirSync(path.join(productsPath, dir));
		fileList.forEach(function(file){
			log('Adding ' + dir + '/' + file);

			var product = {};
			list.products.push(product);

			var productData = fs.readFileSync(path.join(productsPath, dir, file), 'utf-8')
				.split('\n');

			product.title = productData[0];
			product.image = path.join('images', 'product', file.split('.')[0] + '.png');
			product.text = productData[1];
		});
	});

	// Import Videos
	var videoList = [];
	var videosPath = path.join(__dirname, assetsPath, 'content', 'video');
	var fileList = fs.readdirSync(videosPath);
	fileList.forEach(function(file) {
		log('Adding video ' + file);
		videoList.push({
			src: 'videos/' + file
		});
	});

	structure.videoList = videoList;

	log('Finished. Posting results');

	fs.writeFileSync(path.join('..', 'public', 'js', 'structure.json'), JSON.stringify(structure), 'utf8');
}

run();