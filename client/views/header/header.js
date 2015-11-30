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

  isHome: function () {
    if (this.name === 'Home') {
      return true;
    }
  },

  isElegantThemes: function () {
    if (this.name === 'ElegantThemes') {
      return true;
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
  },

  isLogout: function () {
    if (this.name === 'Sign Out') {
      return true;
    }
  }
});

categoryItems = [{
  'name': 'All Items',
  'path': '/'
}, {
  'name': 'Child Themes',
  'path': '/'
}, {
  'name': 'Plugins',
  'path': '/'
}, {
  'name': 'Books',
  'path': '/'
}, {
  'name': 'Courses',
  'path': '/'
}];

Template.headerCategories.helpers({
  categories: function () {
    return categoryItems;
  },
});