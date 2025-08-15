document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('talks-map');
  if (!el) return;
  var url = el.dataset.url;

  fetch(url)
    .then(r => r.json())
    .then(items => {
      var map = L.map('talks-map').setView([20, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      items.forEach(d => {
        if (d.lat == null || d.lng == null) return;
        var m = L.marker([d.lat, d.lng]).addTo(map);
        var lines = [
          '<strong>' + d.title + '</strong>',
          [d.venue, d.where].filter(Boolean).join(' — '),
          (d.url ? '<a href="' + d.url + '">Talk page</a>' : '') +
          (d.ext ? ' · <a href="' + d.ext + '" target="_blank" rel="noopener">Event site</a>' : '')
        ].filter(Boolean).join('<br>');
        m.bindPopup(lines);
      });
    })
    .catch(console.error);
});
