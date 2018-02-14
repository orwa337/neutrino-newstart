import $ from 'jquery';
import './style.css';
import navbarTemplate from './templates/navbar.html';

const root = $('#root');

$(() => {
  root.append(navbarTemplate);
  root.append('<div class="container-fluid" id="container"><h1>Welcome to Neutrino</h1></div>');
  $('#container').append(`<form id="searchform">
  <div class="form-group">
    <label for="InputFilm">Film Name</label>
    <input type="text" class="form-control" id="InputFilm" aria-describedby="filmHelp" placeholder="Enter Film Name">
    <small id="filmHelp" class="form-text text-muted">Search and enjoy.</small>
  </div>
  <button type="submit" class="btn btn-primary">Search</button>
</form>`);

  $('#searchform').on('submit', ((e) => {
    const ourfilm = $('#InputFilm').val();
    e.preventDefault();
    console.log(ourfilm);
    const flickerAPI = `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${ourfilm}&callback=?`;
    $.getJSON(flickerAPI, {
    })
      .done((data) => {
        console.log('success', data);
        data.results.forEach((result) => {
          const filmyname = result.original_title;
          $('#container').append(`<div class="container-fluid"><h1>${filmyname}</h1></div>`);
          const myimage = result.poster_path;
          $('#container').append(`<img class="img-fluid" src=http://image.tmdb.org/t/p/w500/${myimage}>`);
        });
      })
      .fail((xhr) => {
        console.log('error', xhr);
      });
  }));
});


// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
