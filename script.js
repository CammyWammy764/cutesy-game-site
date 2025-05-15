function generateSite() {
  const ids = ["fluffy", "sparkle", "bunny", "strawberry", "bubble", "kawaii"];
  const randomId = ids[Math.floor(Math.random() * ids.length)] + "-" + Math.floor(Math.random() * 1000);
  window.location.href = `page.html?id=${randomId}`;
}
