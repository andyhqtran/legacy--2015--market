Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: '404',
  loadingTemplate: 'loading',
  waitOn:function(){
    Accounts.loginServicesConfigured();
  }
});

navItems = [{
  'name': 'Home',
  'template': 'home',
  'path': '/'
}, {
  'name': 'Join Us',
  'template': 'join',
  'path': '/join'
}, {
  'name': 'Community',
  'template': 'forums',
  'path': '/forums'
}, {
  'name': 'Affiliates',
  'template': 'affiliate',
  'path': '/affiliate'
}, {
  'name': 'Support',
  'template': 'support',
  'path': '/support'
}];

for (var i in navItems) {
  Router.route(navItems[i].path, {
    name: navItems[i].name,
    template: navItems[i].template
  });
}

Router.route('/product/:_id', {
  name: 'productsPage',
  data: function() {
    return {
      product: Products.findOne({_id: this.params._id}),
      comments: Comments.find({productId: this.params._id})
    }
  }
});

Router.onAfterAction(function () {
  return Session.set('active', this.route.getName());
});