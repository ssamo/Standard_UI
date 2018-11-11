var guide = {
	include : function(value){
		if (value == 'core'){
			document.write('<!-- Core -->');
			document.write('<link href="../../common/css/ui.css" rel="stylesheet" />');
			document.write('<link href="../../common/css/animate.css" rel="stylesheet" />');
			document.write('<script src="../../common/js/libs/jquery-3.3.1.min.js"></script>');
			document.write('<script src="../../common/js/libs/jquery.browser.check.js"></script>');
			document.write('<script src="../../common/js/plugins.js"></script>');
			document.write('<script src="../../common/js/ui.libs.1.0.js"></script>');
			document.write('<script src="../../common/js/ui.js"></script>');
		}
		if (value == 'guide'){
			document.write('<!-- Guide -->');
			document.write('<link href="../common/css/guide.css" rel="stylesheet" />');
			document.write('<link href="../codeview/styles/shCoreDefaultWhite.css" rel="stylesheet" />');
			document.write('<script src="../codeview/scripts/shcore.js?cb=undefined"></script>');
			document.write('<script src="../codeview/scripts/shautoloader.js?cb=undefined"></script>');
			document.write('<script src="../codeview/scripts/shbrushjscript.js?cb=undefined"></script>');
			document.write('<script src="../codeview/scripts/shbrushxml.js?cb=undefined"></script>');
			document.write('<script src="../codeview/scripts/shbrushcss.js?cb=undefined"></script>');
			document.write('<script>SyntaxHighlighter.all();</script>');
			document.write('<script src="../common/js/guide.js"></script>');
		}
	}
}