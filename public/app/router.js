define([
  //Application
  "app",

  "modules/user"
  
  //Modules
],
function(app, User){
  var Router = Backbone.Router.extend({
    routes: {
      "u/:username":"index"
    },
    index: function(username){
      console.log();
      this.user = new User.Model();
      this.user.fetch();
      app.layout.setViews({
        ".user": new User.Views.Profile({
          model: this.user
        })
      })
      app.useLayout("main").render();
    },
    initialize: function() {
      app.useLayout("main");
    }
  });
  return Router;
});
