document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('talks-map');
  if (!el) return;

  const url = el.dataset.url || '/talks.json';
  console.log('[talks-map] fetch:', url);

  fetch(url)
    .then(r => { console.log('[talks-map] status:', r.status); return r.json(); })
    .then(items => {
      console.log('[talks-map] items:', items.length);

      // init map
      const map = L.map('talks-map', { zoomControl: true });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      const markers = [];
      items.forEach(d => {
        const lat = Number(d.lat), lng = Number(d.lng);
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
          console.warn('[talks-map] skip invalid coords:', d);
          return;
        }
        const m = L.marker([lat, lng]).addTo(map);
        const popup = [
          d.title && `<strong>${d.title}</strong>`,
          d.where,
          d.url && `<a href="${d.url}">Talk page</a>`
        ].filter(Boolean).join('<br>');
        if (popup) m.bindPopup(popup);
        markers.push(m);
      });

      if (markers.length) {
        map.fitBounds(L.featureGroup(markers).getBounds().pad(0.2));
      } else {
        map.setView([20, 0], 2);
        // visible test so you know the map rendered
        L.circleMarker([0, 0], { radius: 8 }).addTo(map).bindPopup('Test marker (0,0)');
        console.warn('[talks-map] no markers plotted');
      }
    })
    .catch(err => console.error('[talks-map] error:', err));
});
