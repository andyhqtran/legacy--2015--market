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
  'type': 'category',
  'parent': 'none',
  'name': 'All Items',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'category',
  'parent': 'none',
  'name': 'Child Themes',
  'path': '/',
  'subMenu': true,
}, {
  'type': 'sub-category',
  'parent': 'Child Themes',
  'name': 'Blog',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'sub-category',
  'parent': 'Child Themes',
  'name': 'Corporate',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'sub-category',
  'parent': 'Child Themes',
  'name': 'Creative',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'sub-category',
  'parent': 'Child Themes',
  'name': 'eCommerce',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'sub-category',
  'parent': 'Child Themes',
  'name': 'Nonprofit',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'sub-category',
  'parent': 'Child Themes',
  'name': 'Technology',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'sub-category',
  'parent': 'Child Themes',
  'name': 'Wedding',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'category',
  'parent': 'none',
  'name': 'Plugins',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'category',
  'parent': 'none',
  'name': 'Books',
  'path': '/',
  'subMenu': false,
}, {
  'type': 'category',
  'parent': 'none',
  'name': 'Courses',
  'path': '/',
  'subMenu': false,
}];

Template.headerCategories.helpers({
  categories: function () {
    return categoryItems;
  },

  subCategories: function () {
    return categoryItems;
  },

  isCategory: function () {
    if (this.type === 'category') {
      return true;
    }
  },

  hasSubMenu: function () {
    if (this.subMenu === true) {
      return true;
    }
  },
});

Template.headerCategories.events({
  'mouseenter .has-sub-menu': function (e) {
    $(e.target).children('.sub-menu').stop().fadeIn(300, 'swing');
  },
  'mouseleave .has-sub-menu': function (e) {
    $(e.target).children('.sub-menu').stop().fadeOut(300, 'swing');
  }
});