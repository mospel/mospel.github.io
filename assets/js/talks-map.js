document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('talks-map');
  if (!el) return;

  const url = el.dataset.url;
  console.log('[talks-map] fetch:', url);

  fetch(url)
    .then(r => { console.log('[talks-map] status:', r.status); return r.json(); })
    .then(items => {
      console.log('[talks-map] items:', items.length, items);

      // make sure the container has height
      el.style.minHeight = el.style.minHeight || '360px';

      const map = L.map('talks-map', { zoomControl: true }).setView([20, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      const markers = [];
      items.forEach
