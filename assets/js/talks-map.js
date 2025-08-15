document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('talks-map');
  if (!el) return;

  const url = el.dataset.url || '/talks.json';
  console.log('[talks-map] fetch:', url);

  fetch(url)
    .then(r => { 
      console.log('[talks-map] status:', r.status); 
      return r.json(); 
    })
    .then(items => {
      console.log('[talks-map] items:', items.length);

      // --- sort by date desc, then keep latest 10 ---
      const toTime = (d) => {
        const s = d.date || d.datetime || d.start || d.start_date;
        const t = Date.parse(s);
        return Number.isFinite(t) ? t : -Infinity;
      };
      items.sort((a, b) => toTime(b) - toTime(a));
      items = items.slice(0, 10);
      console.log('[talks-map] showing latest:', items.length);

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

        // build popup
        const lines = [
          '<em>Talk / Lecture:</em>',
          d.title && `<strong>${d.title}</strong>`
        ];

        if (d.event || d.location || d.date) {
          if (d.event)    lines.push(d.event);
          if (d.location) lines.push(d.location);
          if (d.date)     lines.push(d.date);
        } else if (d.where) {
          // fallback if your JSON has "where" as a combined field
          lines.push(String(d.where).replace(/\n/g, '<br>'));
        }

        // keep for later but don't display now:
        // if (d.url) lines.push(`<a href="${d.url}">Details</a>`);

        const popup = lines.filter(Boolean).join('<br>');
        if (popup) m.bindPopup(popup);

        markers.push(m);
      });

      if (markers.length) {
        map.fitBounds(L.featureGroup(markers).getBounds().pad(0.2));
      } else {
        map.setView([20, 0], 2);
        L.circleMarker([0, 0], { radius: 8 }).addTo(map).bindPopup('Test marker (0,0)');
        console.warn('[talks-map] no markers plotted');
      }
    })
    .catch(err => console.error('[talks-map] error:', err));
});
