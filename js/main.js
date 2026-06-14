const subButtons = document.querySelectorAll('.sub-link');
const subpages = document.querySelectorAll('.subpage');

function showSubPage(group, subpageId) {
  subpages.forEach((subpage) => {
    if (subpage.dataset.group === group) {
      subpage.classList.toggle('active', subpage.id === subpageId);
    }
  });

  subButtons.forEach((button) => {
    if (button.dataset.group === group) {
      button.classList.toggle('active', button.dataset.subpage === subpageId);
    }
  });

  history.replaceState(null, '', `#${subpageId}`);
}

subButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showSubPage(button.dataset.group, button.dataset.subpage);
  });
});

function openSubPageFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  const target = document.getElementById(hash);
  if (!target || !target.classList.contains('subpage')) return;

  showSubPage(target.dataset.group, hash);
}

openSubPageFromHash();
window.addEventListener('hashchange', openSubPageFromHash);
