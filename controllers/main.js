Ti.include('../Redux/redux.js');
include('../views/main/main.js');

var MainController = Controller.extend({
    init: function(win) {
        this._super(win);

        this.view = new MainView(win, this);
    }
});

(function() {
    var win = Titanium.UI.currentWindow;

    new MainController(win);
})();

