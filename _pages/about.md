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
  const map = L.map('talks-map').setView([20, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(map);
  L.marker([37.7749, -122.4194]).addTo(map).bindPopup('Test marker: SF');
});
</script>
{% endraw %}
