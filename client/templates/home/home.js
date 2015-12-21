Template.home.helpers({
  products: function() {
    return Products.find();
  },

  shortTitle: function() {
    return this.title.substr(0, 16);
  },

  excerpt: function() {
    return this.description.substr(0, 100);
  }
});