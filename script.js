function showScreen(name) {
  document.querySelectorAll('[id$="-screen"]').forEach(el => el.classList.add('hidden'));
  const target = document.getElementById(name + '-screen');
  if (target) target.classList.remove('hidden');
  if (name === 'main') {
    document.getElementById('main-screen').classList.remove('hidden');
  }
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function () {
  const search = document.getElementById('search');
  if (search) {
    search.addEventListener('input', function (e) {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('#settings-list .settings-row').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  const airplane = document.getElementById('airplane');
  if (airplane) {
    airplane.addEventListener('change', function () {
      const wifi = document.getElementById('wifi-status');
      if (wifi) {
        wifi.textContent = this.checked ? 'Off' : 'EclipseNet';
      }
    });
  }

  const wifiToggle = document.getElementById('wifi-toggle');
  if (wifiToggle) {
    wifiToggle.addEventListener('change', function () {
      const content = document.getElementById('wifi-content');
      const offMsg = document.getElementById('wifi-off-message');
      const status = document.getElementById('wifi-status');
      if (this.checked) {
        if (content) content.classList.remove('hidden');
        if (offMsg) offMsg.classList.add('hidden');
        if (status) status.textContent = 'EclipseNet';
      } else {
        if (content) content.classList.add('hidden');
        if (offMsg) offMsg.classList.remove('hidden');
        if (status) status.textContent = 'Off';
      }
    });
  }

  showScreen('main');
});
