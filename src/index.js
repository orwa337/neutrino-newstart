import $ from 'jquery';
import './style.css';
import navbarTemplate from './templates/navbar.html';

const root = $('#root');

$(() => {
  root.append(navbarTemplate);
  root.append('<div class="container-fluid" id="container"><h1>Welcome to Neutrino</h1></div>');
  $('#container').append('<img class="img-fluid" src="https://raw.githubusercontent.com/mozilla-neutrino/neutrino-dev/master/docs/assets/logo.png">');
});

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
