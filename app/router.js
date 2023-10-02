import EmberRouter from '@ember/routing/router';
import config from 'my-ember-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tasks', function () {
    this.route('new');
  });
  this.route('about');
  this.route('contack');
  this.route('scientists');
  this.route('HomeBanner');
  this.route('rental', {path: '/:id'});   // route r nam rental path holo url
});

// * ekkhane jei params diye route banabo route.js e shei nam ei params pabo (jamon id dile params.id lekhle pabo id k)

// localhost/rental/rentals/id
// ai id r jaygay dynamic bhabe jake padhabo/click korbo tar jonnoi ai route toryi hoye jabe shei nam/id diye

// let response = await fetch(`/api/rentals/${params.rental_id}.json`);
// fetch(`/api/rentals/id(atai dynamic).json

// route alada jinish route na dile localhost r url toyi hobe na
// ekhane toyri kore rakhbo link e click korle shei same route nam diye jabo tahole jeye ai nam ei peye jabe
