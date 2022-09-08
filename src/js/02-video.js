import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(stopTime, 1000));
function stopTime(timeupdate) {
  let pauseTime = timeupdate.seconds;
  console.log(pauseTime);
  localStorage.setItem(STORAGE_KEY, pauseTime);
}

const currentTime = localStorage.getItem(STORAGE_KEY);
player
  .setCurrentTime(currentTime)
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
