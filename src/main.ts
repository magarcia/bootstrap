import App from "./App.svelte";

if ("serviceWorker" in navigator) {
  /* If you want your app to work offline and load faster, you can uncomment
   * the line below. Note this comes with some pitfalls.
   */
  // navigator.serviceWorker.register(new URL('./sw.ts', import.meta.url));
}

const target = document.getElementById("app") ?? document.body;

export default new App({
  target,
});

// Fixes HMR on development mode
module.hot?.dispose(function () {
  target.innerHTML = "";
});

module.hot?.accept(function () {
  const links = document.getElementsByTagName("link");
  
  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    if (link.rel === "stylesheet") {
      link.href += "";
    }
  }
});
