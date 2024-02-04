export const windowConf = {
  theme: window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light',
  ratio: window.innerWidth / window.innerHeight,
};

window.addEventListener('resize', () => {
  windowConf.ratio = window.innerWidth / window.innerHeight;
});

document.body.setAttribute('theme', windowConf.theme);

export const toggle = () => {
  document.body.setAttribute('theme', document.body.getAttribute('theme') === 'dark' ? 'light' : 'dark');
  windowConf.theme = document.body.getAttribute('theme');
};
