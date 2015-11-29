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
}, {
  'id': 2,
  'name': 'Forums',
  'template': 'forums',
  'path': '/forums'
}, {
  'id': 3,
  'name': 'Help',
  'template': 'help',
  'path': '/help'
}, {
  'id': 4,
  'name': 'Sign Up',
  'template': 'sign_up',
  'path': '/sign_up'
}, {
  'id': 5,
  'name': 'Cart',
  'template': 'cart',
  'path': '/cart'
}, {
  'id': 6,
  'name': 'Sign In',
  'template': 'sign_in',
  'path': '/sign_in'
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