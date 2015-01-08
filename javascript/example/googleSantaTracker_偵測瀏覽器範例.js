
<!DOCTYPE html>
<html lang="zh-TW" itemscope="itemscope" itemtype="http://schema.org/WebPage">
<head prefix="og: http://ogp.me/ns# article: http://ogp.me/ns/article#">
  <meta charset="utf-8">
  <base href="//maps.gstatic.com/mapfiles/santatracker/80/">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">

  <title>Google Santa Tracker</title>
  <meta property="og:title" itemprop="name" content="Google Santa Tracker">
  <meta property="og:url" content="https://santatracker.google.com/">
  <meta property="og:type" content="website">
  <meta property="og:image" itemprop="image" name="thumbnail" content="https://santatracker.google.com/images/og.png">
  <meta property="og:description" itemprop="description" name="description" content="Use Google Santa Tracker to follow Santa Claus on Google Maps as he makes his journey around the world.">

  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:100,300,400,600,700,800|Lobster">
  <link rel="stylesheet" href="sass/santatracker.css">

  <!-- app manifest-->
  <link rel="manifest" href="manifest.json">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="mobile-web-app-capable" content="yes"> <!-- fallback -->

  <!-- app status bar themes -->
  <meta name="apple-mobile-web-app-status-bar-style" content="#e51c23">
  <meta name="theme-color" content="#e51c23">
  <meta name="msapplication-TileColor" content="#e51c23">

  <meta name="msapplication-tap-highlight" content="no">

  <!-- icons -->
  <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="images/apple-touch-icon-57x57-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/apple-touch-icon-72x72-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/apple-touch-icon-114x114-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/apple-touch-icon-144x144-precomposed.png">
  <link rel="shortcut icon" href="images/favicon.ico">

  <!-- Analytics -->
  <script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
  <script>
    

    window.ga_ = new gweb.analytics.AutoTrack({
      'profile': location.hostname == 'santatracker.google.com' ? 'UA-37048309-1' : 'UA-37048309-2',
      'trackClicks': false,
      'disableTrackPageview': true
    });

    /**
     * @param {string} param URL parameter to look for.
     * @return {string|undefined} undefined if the URL parameter does not exist.
     */
    function getUrlParameter(param) {
      if (!window.location.search) {
        return;
      }
      var m = new RegExp(param + '=([^&]*)').exec(
          window.location.search.substring(1));
      if (!m) {
        return;
      }
      return decodeURIComponent(m[1]);
    }

    if (getUrlParameter('api_client')) {
      ga_.pushCommand(['_setCampSourceKey', 'api_client']);
      ga_.pushCommand(['_setCampMediumKey', 'api_client']);
    }

    // Check if browser is supported by web component/Polymer polyfills.
    // Feature detection isn't sufficient; webcomponentsjs attempts to polyfill
    // missing features, but some browsers are known to not work under it.
    // https://www.polymer-project.org/resources/compatibility.html
    var ignoreCheck = getUrlParameter('ignore_browser_check') == 'true';
    var supported =  ignoreCheck || (function sniff() {
      var uaString = navigator.userAgent;
      // no IE < 10
      var msie = /MSIE +([\d\.]+)/.exec(uaString);
      if (msie && msie[1]) {
        if (msie[1] === '7.0') {
          var tridentVersion = /Trident\/(\d.\d)/.exec(uaString);
          if (tridentVersion && tridentVersion[1]) {
            return parseInt(tridentVersion[1], 10) >= 6;
          } else {
            return false;
          }
        } else {
          return parseInt(msie[1], 10) >= 10;
        }
      }
      // no older Android browser
      if (uaString.indexOf('Chrome') === -1 && uaString.indexOf('Android') !== -1) {
        return !/^Google/.test(navigator.vendor);
      }
      // no Opera < 15
      if (uaString.indexOf('Opera') !== -1) {
        return false;
      }
      // everyone else goes through.
      return true;
    })();

    if (!supported) {
      // If unsupported, run pageview before redirecting to update page.
      ga_.pushCommand(['_trackPageview', '/']);
      ga_.pushCommand(['_trackEvent', 'Polymer', 'unsupported-browser']);
      // redirect after analytics has been processed
      _gaq.push(function() {
        window.location = 'https://santatracker.google.com' +
            location.pathname.replace(/[^\/]*$/, '') + 'upgrade.html';
      });
    }

    // Track and log any errors to analytics
    window.onerror = function(message, file, lineNumber) {
      // We don't want to trigger any errors inside window.onerror otherwise
      // things will get real bad, real quick.
      try {
        window.ga_.pushCommand(['_trackEvent', 'error', file + ':' + lineNumber,
            '' + message]);
      } catch (e){}
    };
  </script>

  <script src="components/webcomponentsjs/webcomponents.min.js"></script>
  <link rel="import" href="elements/elements_zh-TW.html">
</head>
<body unresolved fullbleed>

<santa-app id="santaApp"></santa-app>

<div id="timer" role="timer" aria-live="assertive" aria-atomic="false" aria-relevant="additions"></div>

<div id="preload_placeholder"></div>

<script>
(function() {

var inEmbed = self != top;
if (inEmbed) {
  if (getUrlParameter('site')) {
    ga_.pushCommand(['_setReferrerOverride', getUrlParameter('site')]);
  }
  ga_.pushCommand(['_trackEvent', 'Embed', getUrlParameter('site')]);
}

window.santaApp = document.querySelector('santa-app');
var POLYMER_ANALYTICS_TIMEOUT_ = 60 * 1000;

// log some polymer startup performance numbers
function perfAnalyticsEvent(eventName, categoryName) {
  // performance.now() is sadly disabled even in some very recent browsers
  // TODO(bckenny): for now, only do polymer perf analytics in browsers with it
  if (window.performance && window.performance.now) {
    document.addEventListener(eventName, function() {
      var now = window.performance.now();
      var variable = eventName;
      if (now > POLYMER_ANALYTICS_TIMEOUT_) {
        variable += ' - outliers';
      }
      window.ga_.pushCommand(['_trackTiming', categoryName, variable, now]);
    });
  }
}
perfAnalyticsEvent('HTMLImportsLoaded', 'Polymer');
perfAnalyticsEvent('polymer-ready', 'Polymer');

if (window.DEV) {
  // Polyfill needs I18nMsg to exist before setting the lang. Timing is fine for native :(
  // Set locale for entire site (e.g. i18n-msg elements).
  document.addEventListener('HTMLImportsLoaded', function() {
    I18nMsg.lang = document.documentElement.lang || 'en';
  });
}

// Try to only do screen reader stuff on desktop.
if (window.matchMedia && window.matchMedia('(min-width: 1000px)').matches) {
  var timer = document.querySelector('#timer');

  document.addEventListener('countdown-timer-tick', function(e) {
    var currentTime = e.detail.currentTime;

    if (currentTime.diff <= 60 * 1000) {
      timer.textContent = e.detail.msg;
    } else if (currentTime.seconds % 10 == 0) { // Only update DOM (and therefore speak text) every 10 seconds.
      timer.textContent = e.detail.msg;
    }
  });
}
})();
</script>
</body>
</html>
