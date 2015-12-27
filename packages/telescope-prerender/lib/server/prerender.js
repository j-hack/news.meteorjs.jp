if (Settings.get('prerenderIOToken')) {
  var prerender = Npm.require('prerender-node')
    .set('protocol', protocol)
    .set('host', siteUrl.replace('http://', '').replace('/', ''))
    .set('prerenderToken', Settings.get('prerenderIOToken'));

  Meteor.startup(function() {
    WebApp.rawConnectHandlers.use(prerender);
  });
}