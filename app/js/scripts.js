var tabs = document.querySelectorAll('nav a');
contentPara = document.querySelector('.content');

function makeActive(event) {
  if (!event.target.matches('a')) return;
  makeInactive();
  event.target.classList.add('active');
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'));
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
}

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'cuisines';
    document.querySelector('[href="#cuisines"]').classList.add('active');
  } else {
    document
      .querySelector(`[href="${window.location.hash}]"`)
      .classList.add('active');
  }
  setContentAccordingToHash();
}

document.addEventListener('click', makeActive);
window.addEventListener('hashchange', setContentAccordingToHash);

initializePage();
