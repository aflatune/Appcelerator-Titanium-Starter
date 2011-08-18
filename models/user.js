
var User = Model.extend({
    table_name: "user",
    _fields: {id: Number },

    find: function(id) {
        var model = new User(this.db, this._find(id));
        return model;
    },

    item_from: function(row) {
        var model = new User(this.db, this._item_from(row));
        return model;
    }
});
