// We do this at the top of all of our files to include redux:
Ti.include('Redux/redux.js');

// Include MVC pattern
includeGlobal('/include/inheritance.js', '/include/db.js', '/common/view.js', '/common/controller.js');

// Include our RJSS
includeRJSSGlobal('rjss/common.rjss');

// Tell the compiler which modules we are going to use; note there are no () on these!
var used = [Ti.UI.createWindow];

//This is the main window of the application
var main = new Window({
    url: "controllers/main.js"
});

main.open();