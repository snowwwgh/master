var isConsoleOpen = false;
function runPageBugger(){
	console.clear();
	debugger;
	setTimeout(function(){
		runPageBugger();
	},500);
}
function killPageConsoleOpen(){
	document.write('Close developer tools to use our service.');
}
devtoolsDetector.addListener(function (isOpen, detail) {
	if (isOpen) {
		killPageConsoleOpen();
		isConsoleOpen = true;
		runPageBugger();
		}else{
			location.reload(true);
		}
});
devtoolsDetector.launch();