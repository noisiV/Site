## Services view ##

class app.Services extends app.CoreView
  render: (t) ->
    this.$el.empty()
    this.$el.html(tmpl["services/#{t}"]())
    @
      
    