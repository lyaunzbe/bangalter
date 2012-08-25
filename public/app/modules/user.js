define([

  "app",

  "backbone"

],
function(app, Backbone){
  var User = app.module();
  
  User.Model = Backbone.Model.extend({
    url: function(){
      //Figure out how to load dynamic users.
      return "/v/user/1"
    },
    initialize: function(handle){
      this.set({'handle':handle});
    }

    //isAuthor: function(){
      //return this.get('author');
    //},

    //isContrib: function(){
      //return this.get('contrib');
    //}
    
  });

  User.Views.Profile = Backbone.View.extend({
    template: "user/profile",

    tagName: "div",

    serialize: function(){
      return { model: this.model };
    },

    events: {
      click: "expandInfo"
    },

    expandInfo: function(ev){
      var model = this.model;
      console.log("Expand info event fired",model, ev);
    },
    intialize: function(){
      this.model.on("change", this.render, this);
    }
  });

  return User;
})
