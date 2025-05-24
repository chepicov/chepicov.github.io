// pwa-install.js — переиспользуемый для всех лендингов
(function () {
  const source = document.currentScript.dataset.source || 'unknown-landing';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }

  function getClidId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('clid') || 'unknown';
  }

  function generateUUID() {
    return crypto.randomUUID?.() || ([1e7]+-1e3+-4e3+-8e3+-1e11)
      .replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
  }

  const checkIfAppInstalled = async () => {
    const relatedApps = await navigator.getInstalledRelatedApps();
    const isInstalled = relatedApps.some(app => app.platform === 'webapp' && app.url.includes('hide-vpn.com'));

    return isInstalled
  };


  const init = async () => {
    if (!localStorage.getItem('pwaId')) {
      const clid = getClidId();
      const pwaId = generateUUID();
      localStorage.setItem('clid', clid);
      localStorage.setItem('pwaId', pwaId);
    }

    const isInstalled = await checkIfAppInstalled();

    if (isInstalled) {
      installBtn?.classList.add('hidden');
      openLink?.classList.remove('hidden');
    } else {
      installBtn?.classList.remove('hidden');
      installBtn.innerText = 'Установить';
      openLink?.classList.add('hidden');
    }
  }

  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('install-btn');
    if (btn) {
      btn.classList.add('visible');
    }
  });
  
  window.installApp = function () {
    if (!deferredPrompt) return;

    installBtn.innerText = 'Загрузка...';
    installBtn.disabled = true;

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(async (choice) => {
      if (choice.outcome === 'accepted') {
          try {
            const url = `https://wurvent.com/event?event=installclick&clid=${clid}&pwaID=${pwaId}`;
            await fetch(url)
          } catch (e) {
             console.log(e);
          }
      }
      deferredPrompt = null;
 
    });
  };

  setInterval(() => {
    init();
  }, 2000);
  
  init();
})();