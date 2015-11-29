Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading'
});

navItems = [{
  'id': 0,
  'name': 'Home',
  'template': 'home',
  'path': '/'
}, {
  'id': 1,
  'name': 'About',
  'template': 'about',
  'path': '/about'
}];

for (var i in navItems) {
  Router.route(navItems[i].path, {
    name: navItems[i].name,
    template: navItems[i].template
  });
}

Router.onAfterAction(function () {
  return Session.set('active', this.route.getName());
});