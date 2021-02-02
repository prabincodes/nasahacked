if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('kaam chalau'))
    .catch(err => console.log('bey kaame', err));
}
