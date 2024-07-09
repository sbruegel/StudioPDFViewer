// PDF Viewer Extension for Vuforia Studio by Simon Bruegel
// Based on Mozilla PDF.js
// Version 0.7

/*Fixed 0.3:
tml-widget bug (Black intial screen in preview) causes of PDF.css
File entities will now export just as PDF folder to design and runtime (in projects already build, you have to delete all related files in PROJECTNAME/extension to see the result)
Fix Problem with CSS active class in drag'n'drop mode
Uses already existing resources of pdf.js and pdf.worker.js from ves-ar-extensions to optimize data usage

*Fixed 0.4
Added initial Zoom property
fix problem when zoom and start page is set on the same time
fixed not working visible property

*Fixed 0.5
roll to new release of PDF.js and be independent of Studio release cycle

*Fixed 0.6
Remote resources coming from Thingworx repositories

*Fixed in 0.7
Fix for Studio 9.20 (Lit Support Design Time)

Known issues:
only a very few remote data works because they don't get trusted because of a compound src (CORS)
*/

var path = require('path');

exports = module.exports = function(common) {
	var projectExports = {
		extensionInfo: { extensionType: 'widget' }
	};

	projectExports.runtimeLibraries = function() {
		//, path.resolve(common.NODE_MODULE_DIR, "ves-ar-extension", "widgets", "twx-mobile-widgets-3d", "ide", "js", "ptc", "thingview", "pdfjs", "*")
	    var libs = [
				{files: [path.resolve(__dirname, 'runtime', 'sb-pdf', '*')], dest: 'sb-pdf'},
				{files: [path.resolve(__dirname, 'runtime', 'sb-pdf', 'js', '*')], dest: 'sb-pdf/js'},
				//{files: [path.resolve(__dirname, 'runtime', 'PDF', 'css', '*')], dest: 'PDF/css'},
				{files: [path.resolve(__dirname, 'runtime', 'sb-pdf', 'images', '*')], dest: 'sb-pdf/images'},
				{files: [path.resolve(__dirname, 'runtime', 'sb-pdf', 'cmaps', '*')], dest: 'sb-pdf/cmaps'},
				{files: [path.resolve(__dirname, 'runtime', 'sb-pdf', 'locale', '**', '*')], dest: 'sb-pdf/locale/**'}
			];
			return libs;
	};

	return projectExports
}
