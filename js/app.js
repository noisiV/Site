var app = {};
app.views = {};

app.views.home = Backbone.View.extend({});
app.views.about = Backbone.View.extend({});
app.views.services = Backbone.View.extend({});
app.views.computers = Backbone.View.extend({});
app.views.contact = Backbone.View.extend({});

app.router = Backbone.Router.extend({
  routes: {
    " ": "home",
    "about": "about",
    "services/:type": "services",
    "computers/:type": "computers",
    "contact": "contact"
  },

  home: function() {},
  about: function() {},
  services: function() {},
  computers: function() {},
  contact: function() {}
});