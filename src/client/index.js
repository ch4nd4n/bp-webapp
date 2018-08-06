import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

render(
  <App />,
  document.getElementById('root')
);

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/dist/sw.js');
}

// if ('geolocation' in navigator) {
//   /* geolocation is available */
//   navigator.geolocation.getCurrentPosition((position) => {
//     postLocation(position.coords.latitude, position.coords.longitude);
//   });
// } else {
//   /* geolocation IS NOT available */
// }


// function postLocation(lat, lng) {
//   fetch('/api/users/geolocation?lat=' + lat + '&lng=' + lng);
// }