import 'angular-google-analytics';
import { uiModules } from 'ui/modules';
import chrome from 'ui/chrome';

var module = uiModules.get('kibana', ['angular-google-analytics']);
var config = chrome.getInjected('gaConfig', {});

module.config(function(AnalyticsProvider) {
    AnalyticsProvider.setAccount(config)
      .readFromRoute(true)
      .setDomainName('none');
  }).run(['Analytics', function(Analytics) { }]);
