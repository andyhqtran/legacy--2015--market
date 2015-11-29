Template.headerNav.helpers({
  items: function () {
    return navItems;
  },

  isActive: function () {
    if (this.name === Session.get('active')) {
      return 'active';
    } else {
      return '';
    }
  },

  isCart: function () {
    if (this.name === 'Cart') {
      return true;
    }
  },

  isRegister: function () {
    if (this.name === 'Sign Up') {
      return true;
    }
  },

  isLogin: function () {
    if (this.name === 'Sign In') {
      return true;
    }
  }
});