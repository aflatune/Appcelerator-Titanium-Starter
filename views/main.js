Ti.include("../include/inheritance.js");
Ti.include("../include/db.js");
Ti.include("../common/view.js");

var MainView = View.extend({
    init: function(win, controller) {
        this._super(win, controller);

        this.layout();
    },

    layout: function() {
      var label = Ti.UI.createLabel({text: "Welcome to your brand new app!", color: "#fff"});
      this.win.add(label);  
    }

});
