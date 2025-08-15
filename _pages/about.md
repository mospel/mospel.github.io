---
permalink: /
title: "Inverse Problems, Numerical Methods & Signal Processing in Acoustics"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I’m a researcher exploring inverse problems, numerical methods, and signal processing in acoustics. Here you’ll find my contact information, publications, and talks.

---

<h2>Recent activities</h2>
<div id="talks-map" style="height:360px; margin:1.25rem 0;"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

{% raw %}
<script>
fetch('{{ "/talks.json" | relative_url }}')
  .then(r => r.json())
  .then(items => {
    var map = L.map('talks-map', { scrollWheelZoom: false }).setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map);

    items.forEach(function(d){
      var dot = L.circleMarker([d.lat, d.lng], {
        radius: 5, color: '#0066cc', fillColor: '#0066cc', fillOpacity: 1, weight: 1
      }).addTo(map);

      L.circle([d.lat, d.lng], { radius: 120000, color: '#0066cc', weight: 1, fillOpacity: 0 }).addTo(map);
      L.circle([d.lat, d.lng], { radius: 240000, color: '#0066cc', weight: 1, fillOpacity: 0 }).addTo(map);

      var lines = [
        '<strong>' + d.title + '</strong>',
        [d.venue, d.where].filter(Boolean).join(' — '),
        '<a href="' + d.url + '">Talk page</a>' + (d.ext ? ' · <a href="' + d.ext + '" target="_blank" rel="noopener">Event site</a>' : '')
      ].filter(Boolean).join('<br>');

      dot.bindPopup(lines);
    });
  });
</script>
{% endraw %}
