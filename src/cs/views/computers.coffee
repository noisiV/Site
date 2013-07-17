## Computers view ##

class app.Computers extends app.CoreView
  render: (t) ->
    this.$el.empty()
    this.$el.html(tmpl["computers/#{t}"]())
    @