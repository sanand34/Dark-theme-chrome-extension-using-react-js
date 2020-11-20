/* global chrome */

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  main();
});

function main() {
  // eslint-disable-next-line no-undef
  const extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  // eslint-disable-next-line no-restricted-globals
  if (!location.ancestorOrigins.contains(extensionOrigin)) {
    // Fetch the local React index.html page
    // eslint-disable-next-line no-undef
    fetch(chrome.runtime.getURL('index.html') /*, options */)
      .then((response) => response.text())
      .then((html) => {
        const styleStashHTML = html.replace(/\/static\//g, `${extensionOrigin}/static/`);
        // eslint-disable-next-line no-undef
        $(styleStashHTML).appendTo('body');
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

window.addEventListener("message", function(event) {
  if (event.source !== window) return;
  onDidReceiveMessage(event);
});

function onDidReceiveMessage(event) {
  if (event.data.type && (event.data.type === "GET_EXTENSION_ID")) {

    let paragraphs = document.getElementsByTagName('p');
       for (elt of paragraphs){
       elt.style['background-color']="black"
       elt.style['color']="white"}

       let spans = document.getElementsByTagName('span');
       for (elt of spans){
       elt.style['background-color']="black"
       elt.style['color']="white"}   

       let division = document.getElementsByTagName('div');
       for (elt of division){
       elt.style['background-color']="black"
       elt.style['color']="white"}   
    window.postMessage({ type: "EXTENSION_ID_RESULT", extensionId: 'Sanchit Anand' }, "*");
  }
}
