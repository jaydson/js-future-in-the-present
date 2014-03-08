(function () {
	window.addEventListener('load', function () {
		var myTextArea = document.querySelector('#code');
		var myCodeMirror = CodeMirror(function(elt) {
			myTextArea.parentNode.replaceChild(elt, myTextArea);
		},
		{
			value: myTextArea.value,
			mode:  "javascript",
			lineNumbers : true,
			readOnly : true,
			maxHighlightLength : 200,
			viewportMargin : 200
		});
	});
}());