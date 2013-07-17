## About page view ##

class app.About extends app.CoreView
  render: ->
    this.$el.empty()
    this.$el.html tmpl.about()
    @