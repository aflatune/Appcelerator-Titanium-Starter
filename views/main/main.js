Ti.include('../../Redux/redux.js');

// Tell the compiler which modules we are going to use; note there are no () on these!
var used = [Ti.UI.createLabel];

var MainView = View.extend({
    init: function(win, controller) {
        this._super(win, controller);

        this.layout();
    },

    layout: function() {
      var label = new Label({text: "Welcome to your brand new app!", color: "#fff"});
      this.win.add(label);  
    }

});
