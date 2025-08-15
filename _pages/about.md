---
permalink: /
title: "Inverse Problems, Numerical Methods & Signal Processing in Acoustics"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I’m a researcher exploring inverse problems, numerical methods, and signal processing in acoustics. Here you’ll find my contact information, publications, and talks.

<h2>Recent activities</h2>
<div id="talks-map" style="height:360px;margin:1.25rem 0;"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
{% raw %}
<script>
document.addEventListener('DOMContentLoaded', function () {
  const el = document.getElementById('talks-map');
  const url = '{{ "/talks.json" | relative_url }}';
  fetch(url).then(r => r.json()).then(items => {
    const map = L.map('talks-map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(map);
    const ms = [];
    items.forEach(d => {
      const lat = Number(d.lat), lng = Number(d.lng);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
      const m = L.marker([lat, lng]).addTo(map);
      const html = [
        d.title && `<strong>${d.title}</strong>`,
        d.where,
        d.url && `<a href="${d.url}">Talk page</a>`
      ].filter(Boolean).join('<br>');
      if (html) m.bindPopup(html);
      ms.push(m);
    });
    if (ms.length) map.fitBounds(L.featureGroup(ms).getBounds().pad(0.2));
    else map.setView([20,0], 2);
  }).catch(err => console.error('talks map error:', err));
});
</script>
{% endraw %}
