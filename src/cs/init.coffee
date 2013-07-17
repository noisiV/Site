## initialize app ##

app.views = {}

app.views.home = new app.Home()
app.views.about = new app.About()
app.views.services = new app.Services()
app.views.computers = new app.Computers()
app.views.contact = new app.Contact()

app.router = new app.Router()
Backbone.history.start()

