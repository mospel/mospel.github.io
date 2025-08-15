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
<div id="talks-map"
     data-url="{{ '/talks.json' | relative_url }}?v={{ site.time | date: '%s' }}"
     style="height:360px;margin:1.25rem 0;"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

{% raw %}
<script>
document.addEventListener('DOMContentLoaded', function () {
  const el = document.getElementById('talks-map');
  const url = el.dataset.url;

  // Init map FIRST so something shows even if fetch fails
  const map = L.map('talks-map').setView([20, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18, attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  console.log('[talks-map] fetching', url);
  fetch(url)
    .then(r => {
      console.log('[talks-map] status', r.status);
      return r.json();
    })
    .then(items => {
      console.log('[talks-map] items', items.length, items.slice(0,3));
      const markers = [];

      items.forEach(d => {
        const lat = Number(d.lat), lng = Number(d.lng);
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
          console.warn('[talks-map] skip invalid coords', d);
          return;
        }
        const m = L.marker([lat, lng]).addTo(map);
        const popup = [
          d.title ? `<strong>${d.title}</strong>` : null,
          d.where,
          d.url ? `<a href="${d.url}">Talk page</a>` : null
        ].filter(Boolean).join('<br>');
        if (popup) m.bindPopup(popup);
        markers.push(m);
      });

      if (markers.length) {
        map.fitBounds(L.featureGroup(markers).getBounds().pad(0.2));
      } else {
        // Make it obvious the map rendered but no talks plotted
        L.circleMarker([0, 0], { radius: 8 }).addTo(map).bindPopup('No talks with coords yet');
        console.warn('[talks-map] no markers plotted');
      }
    })
    .catch(err => {
      console.error('[talks-map] fetch/parse error', err);
      // Keep a visible marker so you know the map rendered
      L.circleMarker([0, 0], { radius: 8 }).addTo(map).bindPopup('Error loading talks.json');
    });
});
</script>
{% endraw %}

