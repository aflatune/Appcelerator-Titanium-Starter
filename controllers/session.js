Ti.include('../Redux/redux.js');

var SessionController = Controller.extend({
    init: function(win) {
        this._super(win);
    }
});

(function() {
    var win = Titanium.UI.currentWindow;

    new SessionController(win);
})();

