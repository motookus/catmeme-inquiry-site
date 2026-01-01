// URLが #about だったら「about」のコンテンツを表示
// URLが #contact だったら「contact」のコンテンツを表示

window.addEventListener('hashchange', () => {
  const page = location.hash.slice(1); // "#about" → "about"
  // pageに応じてコンテンツを切り替え
});