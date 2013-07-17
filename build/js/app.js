(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app = {};

  app.dropdown = $('.pull-menu');

  app.CoreView = (function(_super) {
    __extends(CoreView, _super);

    function CoreView() {
      _ref = CoreView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CoreView.prototype.el = $('#core');

    CoreView.prototype.hackNav = function() {
      if (document.width < 980) {
        return app.dropdown.trigger('click');
      }
    };

    return CoreView;

  })(Backbone.View);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.About = (function(_super) {
    __extends(About, _super);

    function About() {
      _ref = About.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    About.prototype.render = function() {
      this.$el.empty();
      this.$el.html(tmpl.about());
      this.hackNav();
      return this;
    };

    return About;

  })(app.CoreView);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.Computers = (function(_super) {
    __extends(Computers, _super);

    function Computers() {
      _ref = Computers.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Computers.prototype.render = function(t) {
      this.$el.empty();
      this.$el.html(tmpl["computers/" + t]());
      this.hackNav();
      return this;
    };

    return Computers;

  })(app.CoreView);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.Contact = (function(_super) {
    __extends(Contact, _super);

    function Contact() {
      _ref = Contact.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Contact.prototype.render = function() {
      this.$el.empty();
      this.$el.html(tmpl.contact());
      this.hackNav();
      return this;
    };

    return Contact;

  })(app.CoreView);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.Home = (function(_super) {
    __extends(Home, _super);

    function Home() {
      _ref = Home.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Home.prototype.render = function() {
      this.$el.empty();
      this.$el.html(tmpl.home());
      this.hackNav();
      return this;
    };

    return Home;

  })(app.CoreView);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.Services = (function(_super) {
    __extends(Services, _super);

    function Services() {
      _ref = Services.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Services.prototype.render = function(t) {
      this.$el.empty();
      this.$el.html(tmpl["services/" + t]());
      this.hackNav();
      return this;
    };

    return Services;

  })(app.CoreView);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      _ref = Router.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Router.prototype.routes = {
      "": "home",
      "about": "about",
      "contact": "contact",
      "services/:type": "services",
      "computers/:type": "computers"
    };

    Router.prototype.home = function() {
      return app.views.home.render();
    };

    Router.prototype.about = function() {
      return app.views.about.render();
    };

    Router.prototype.contact = function() {
      return app.views.contact.render();
    };

    Router.prototype.services = function(t) {
      return app.views.services.render(t);
    };

    Router.prototype.computers = function(t) {
      return app.views.computers.render(t);
    };

    return Router;

  })(Backbone.Router);

}).call(this);

(function() {
  app.views = {};

  app.views.home = new app.Home();

  app.views.about = new app.About();

  app.views.services = new app.Services();

  app.views.computers = new app.Computers();

  app.views.contact = new app.Contact();

  app.router = new app.Router();

  Backbone.history.start();

}).call(this);
