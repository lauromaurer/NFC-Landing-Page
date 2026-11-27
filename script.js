// Show the share button only where the Web Share API exists (mostly phones).
const shareButton = document.getElementById("share");

if (shareButton && navigator.share) {
  shareButton.hidden = false;
  shareButton.addEventListener("click", () => {
    navigator
      .share({ title: "Lauro Romeo Maurer", url: "https://lauromaurer.com/" })
      .catch(() => {}); // user closed the share sheet
  });
}

// Privacy-friendly visit count via GoatCounter (no cookies, no third-party
// script). Uses the image pixel endpoint so the CSP only needs to allow one image host.
if (location.hostname === "lauromaurer.com") {
  const params = new URLSearchParams({
    p: location.pathname,
    r: document.referrer,
    s: `${screen.width},${screen.height},${window.devicePixelRatio || 1}`,
    rnd: Math.random().toString(36).slice(2),
  });
  new Image().src = `https://lauromaurer.goatcounter.com/count?${params}`;
}
