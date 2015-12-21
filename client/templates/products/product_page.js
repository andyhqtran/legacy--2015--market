Template.productsPage.events({
  "submit .comments": function (e) {

    // Prevent default browser form submit
    e.preventDefault();

    // Get value from form element
    var name = e.target.name.value;
    var email = e.target.email.value;
    var comment = e.target.comment.value;

    // Insert a task into the collection
    Comments.insert({
      productId: this.product._id,
      name: name,
      email: email,
      comment: comment,
      date: new Date() // current time
    });

    // Clear form
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.comment.value = "";
  }
});