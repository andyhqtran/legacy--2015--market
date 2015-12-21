Template.navbar.helpers({
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

  isRight: function() {
    if (this.name !== 'Home' && this.name === 'Cart' || this.name !== 'Home' && this.name === 'Sign Up' || this.name !== 'Home' && this.name === 'Sign In' || this.name !== 'Home' && this.name === 'Sign Out') {
      return true;
    }
  },

  isLeft: function() {
    if (this.name !== 'Home' && this.name !== 'Cart' && this.name !== 'Sign Up' && this.name !== 'Sign In' && this.name !== 'Sign Out') {
      return true;
    }
  },
});

Template.navbar.events({
  "submit #addProductModal": function (e) {

    console.log(this);

    // Prevent default browser form submit
    e.preventDefault();

    // Get value from form element
    var title = e.target.title.value;
    var price = e.target.price.value;
    var image = e.target.image.value;
    var description = e.target.description.value;

    // Insert a task into the collection
    Products.insert({
      title: title,
      thumbnail: image,
      price: price,
      description: description,
      date: new Date() // current time
    });

    // Clear form
    e.target.title.value = "";
    e.target.price.value = "";
    e.target.image.value = "";
    e.target.description.value = "";

    $('#addProductModal').modal('hide');
  }
});

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
          }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, {
        fieldName: 'country',
        fieldLabel: 'Country',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your country of residence',
        data: [{
            id: 1,
            label: 'United States',
            value: 'us'
          }, {
            id: 2,
            label: 'Spain',
            value: 'es',
        }],
        visible: true
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});