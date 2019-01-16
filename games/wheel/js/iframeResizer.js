// -----------------------------------------------------------
// Makes the iframe fill the screen, but leaves space for the header above the iframe.
// We do this becuase Safari and WebViews on iOS automatically resize the iframe height
// to capture the content of the iframe. This may be fine for some sites and incorrect fo others,
// this is done to make the behavior consitent across browsers and sites.
function hookupIframeResize() {
  var iframeElement = document.querySelector('.iframe');
  var headerElement = document.querySelector('.header');
  
  function updateIframeSize() {    
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var headerHeight = headerElement.offsetHeight;
    
    iframeElement.style.width = windowWidth + 'px';
    iframeElement.style.height = (windowHeight - headerHeight) + 'px';
  }

  // Listen for window resize, which is triggered on mobile rotate also.
  // NOTE: If you have access to lodash or underscore, I would wrap this listener in a debounce
  $(window).on('resize', function (event) {
    updateIframeSize();
  });

  // Call update iframe size initially to fill on mobile
  updateIframeSize();
}