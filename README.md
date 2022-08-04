# Kibana Google Analytics plugin

## Install

`./bin/kibana-plugin install https://github.com/jmcarp/kibana-ga/releases/download/v0.1.0/kibana-ga-v0.1.0.tar.gz`

## Configure kibana.yml

```yaml
ga.enabled: true
ga.name: myTracker
ga.tracker: UA-XXXXX-xx
ga.fields:
  cookieName: gaCookie
  cookieExpires: 86400
ga.set:
  forceSSL: true
  anonymizeIp: true
```
