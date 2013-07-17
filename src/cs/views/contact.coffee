## Contact page view ##

class app.Contact extends app.CoreView
  render: ->
    this.$el.empty()
    this.$el.html(tmpl.contact())
    @hackNav()
    @