// Vendor Modules
import $ from 'jquery';
import _ from 'underscore';

// CSS
import './css/foundation.css';
import './css/style.css';

import Song from './models/song';
import SongList from './collections/song_list';

// console.log('it loaded!');

const songData = [
    {
        title: "I'm too sexy",
        year: 1991,
        artist: "Right Said Fred"
    }, {
        title: "Macarena",
        year: 1993,
        artist: "Los Del Rio"
    }, {
        title: "Tainted Love",
        year: 1982,
        artist: "Soft Cell"
    }, {
        title: "Take on Me",
        year: 1985,
        artist: "A-ha"
    }
  ];

const songList = new SongList(songData);

let songTemplate;

const render = function render(songList) {
  const $songList = $('#song-list');

  songList.forEach((song) => {
    $songList.append(songTemplate(song.attributes));
  });
};

$(document).ready( () => {
  songTemplate = _.template($('#song-template').html());
  render(songList);
});
