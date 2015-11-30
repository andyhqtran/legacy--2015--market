Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: '404',
  loadingTemplate: 'loading'
});

navItems = [{
  'id': 0,
  'name': 'Home',
  'template': 'home',
  'path': '/'
}, {
  'id': 1,
  'name': 'ElegantThemes',
  'template': '',
  'path': 'https://elegantthemes.com/'
}, {
  'id': 2,
  'name': 'Join Us',
  'template': 'join',
  'path': '/join'
}, {
  'id': 3,
  'name': 'Community',
  'template': 'forums',
  'path': '/forums'
}, {
  'id': 4,
  'name': 'Affiliates',
  'template': 'affiliate',
  'path': '/affiliate'
}, {
  'id': 5,
  'name': 'Help',
  'template': 'help',
  'path': '/help'
}, {
  'id': 6,
  'name': 'Sign Up',
  'template': 'sign_up',
  'path': '/sign_up'
}, {
  'id': 7,
  'name': 'Cart',
  'template': 'cart',
  'path': '/cart'
}, {
  'id': 8,
  'name': 'Sign In',
  'template': 'sign_in',
  'path': '/sign_in'
}, {
  'id': 9,
  'name': 'Sign Out',
  'template': 'sign_out',
  'path': '/sign_out'
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