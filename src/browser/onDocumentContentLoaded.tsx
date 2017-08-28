export function onDocumentContentLoaded() {
  return new Promise((resolve) => {
    if (isReady()) {
      resolve();
    } else {
      document.addEventListener('readystatechange', (event) => {
        if (isReady()) {
          resolve();
        }
      });
    }
  });
}

function isReady() {
  return document.readyState === 'interactive' || document.readyState === 'complete';
}
