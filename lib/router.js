Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/about', {
  name: 'about',
  template: 'about'
});

Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading'
});