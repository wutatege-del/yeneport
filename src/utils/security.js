/**
 * Security utilities to protect the portfolio website
 * - Disables right-click
 * - Disables text selection
 * - Disables inspect element (F12, DevTools shortcuts)
 */

export const enableSecurity = () => {
  // Disable right-click
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable text selection via mouse drag
  document.addEventListener('mousedown', (e) => {
    if (e.detail > 1) {
      e.preventDefault();
      return false;
    }
  });

  // Disable text selection via keyboard
  document.addEventListener('keydown', (e) => {
    // Disable Ctrl+A (Select All)
    if (e.ctrlKey && e.key === 'a') {
      e.preventDefault();
      return false;
    }
    // Disable Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      return false;
    }
    // Disable Ctrl+X (Cut)
    if (e.ctrlKey && e.key === 'x') {
      e.preventDefault();
      return false;
    }
    // Disable Ctrl+V (Paste) - optional, you may want to remove this
    // if (e.ctrlKey && e.key === 'v') {
    //   e.preventDefault();
    //   return false;
    // }
  });

  // Disable inspect element shortcuts
  document.addEventListener('keydown', (e) => {
    // Disable F12
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    // Disable Ctrl+Shift+I (Chrome DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }
    // Disable Ctrl+Shift+J (Chrome Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }
    // Disable Ctrl+Shift+C (Chrome Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return false;
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }
  });

  // Disable inspect element via right-click menu (additional protection)
  document.addEventListener('keydown', (e) => {
    // Disable Ctrl+Shift+K (Firefox Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
      e.preventDefault();
      return false;
    }
  });

  // CSS to disable text selection globally
  const style = document.createElement('style');
  style.textContent = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
    }
    
    input, textarea, select {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
    
    a, button {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }
  `;
  document.head.appendChild(style);

  // Prevent opening DevTools by detecting when it's opened
  let devtools = { open: false };
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function() {
      devtools.open = true;
    }
  });

  // Check periodically if DevTools is open
  setInterval(() => {
    devtools.open = false;
    console.clear();
    console.log(element);
    console.clear();
    console.log('%c', element);
    if (devtools.open) {
      // Redirect or show alert when DevTools is detected
      alert('Developer tools are not allowed on this page.');
      // Optionally redirect: window.location.href = 'about:blank';
    }
  }, 1000);

  // Disable console methods
  const noop = () => {};
  const methods = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];
  methods.forEach(method => {
    window.console[method] = noop;
  });
};

