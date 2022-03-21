import { Template } from 'meteor/templating';
import {ReactiveDict} from 'meteor/reactive-dict';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
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
import './calendarInput.html';
import './calendarInput.js';

