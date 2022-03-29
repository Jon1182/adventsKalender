import { Template } from 'meteor/templating';
import {ReactiveDict} from 'meteor/reactive-dict';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'



import '../style/cover.css'
import '../style/custom.css'
import '../style/signin.css'

import { AutoFormThemeBootstrap4 } from 'meteor/communitypackages:autoform-bootstrap4/dynamic'
import 'meteor/aldeed:autoform/dynamic'

const autoFormLoaded = new ReactiveVar()


async function init () {
  await AutoForm.load()
  await AutoFormThemeBootstrap4.load()
  // theme is imported, you can now make the form available
  // you could use a reactive var that resolves to true here
  // or any other mechanism you like to use to reactively activate the form
  AutoForm.setDefaultTemplate('bootstrap4')
}

(function () {
  init()
    .catch(e => console.error('[autoForm]: init failed - ', e))
    .then(() => {
      console.info('[autoForm]: initialized')
      autoFormLoaded.set(true)
    })
})()

import '../startup/routes.js';
import './main.html';
import './login.html';
import './login.js';
import './header.html';
import './header.js';
import './home.html';
import './home.js';
import './footer.html';
import './calendarTextField.js';
import './calendarView.js';
import './calendarLayout.html';
import './calendarOverView.js';
import './newCalendar.js';
import './calendarEdit.js';
import './calendarName.js';


Meteor.startup(function() {
  $('body').addClass("d-flex h-100 text-center text-white bg-dark");

});