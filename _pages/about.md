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

<script>
document.addEventListener('DOMContentLoaded', function () {
  const map = L.map('talks-map', { worldCopyJump: true }); // no initial setView

  {% raw %}
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  {% endraw %}

  const talksUrl = '{{ "/talks.json" | relative_url }}';

  fetch(talksUrl)
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then(data => {
      const bounds = L.latLngBounds();

      data.forEach(t => {
        L.marker([t.lat, t.lng])
          .addTo(map)
          .bindPopup(
            `<strong>${t.title}</strong>` +
            (t.venue ? `<br>${t.venue}` : '') +
            (t.where ? `<br>${t.where}` : '') +
            (t.date ? `<br>${t.date}` : '') +
            (t.url ? `<br><a href="${t.url}">Details</a>` : '')
          );
        bounds.extend([t.lat, t.lng]);
      });

      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, { padding: [20, 20], maxZoom: 2 }); // fit to markers
        map.setZoom(map.getZoom() - 1); // back off one level (~80% fit)
      } else {
        map.fitWorld();
        map.setZoom(map.getZoom() - 1);
      }
    })
    .catch(err => console.error('Failed to load talks.json:', err));
});
</script>
