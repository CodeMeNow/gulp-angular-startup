export function runBlock($httpBackend) {
  'ngInject';
  $httpBackend.whenGET(passAppAssets).passThrough();
  function passAppAssets(path) {
    if (path.match(/^app\//)) {
      return true;
    }
    return false;
  }
}
