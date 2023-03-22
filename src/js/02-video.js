import throttle from 'lodash.throttle';
import VimeoPlayer from '@vimeo/player';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const playerRef = document.getElementById('vimeo-player');
const player = new VimeoPlayer(playerRef);

loadPlayTime();

player.on('timeupdate', throttle(onSavePlaytime, 1000));

function onSavePlaytime({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

function loadPlayTime() {
  const seconds = localStorage.getItem(LOCALSTORAGE_KEY);

  if (seconds === null) {
    return;
  }

  player.setCurrentTime(seconds).then(function(seconds) {
  }).catch(function(error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
}