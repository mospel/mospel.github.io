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

<h2>Recent talks</h2>
<div id="talks-map" style="height:420px;margin:1.5rem 0;"></div>

<div id="talks-map" style="height:420px;margin:1.5rem 0;"></div>
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script>
fetch('{{ "/talks.json" | relative_url }}')
  .then(r => r.json())
  .then(items => {
    var map = L.map('talks-map').setView([20,0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18}).addTo(map);
    items.forEach(d => {
      var m = L.marker([d.lat, d.lng]).addTo(map);
      var lines = [
        '<strong>'+d.title+'</strong>',
        [d.venue, d.where].filter(Boolean).join(' — '),
        '<a href="'+d.url+'">Talk page</a>' + (d.ext ? ' · <a href="'+d.ext+'" target="_blank" rel="noopener">Event site</a>' : '')
      ].filter(Boolean).join('<br>');
      m.bindPopup(lines);
    });
  });
</script>

