export function runBlock($rootScope, $translate) {
  'ngInject';

  let handler = $rootScope.$on('$translatePartialLoaderStructureChanged', () => {
    $translate.refresh();
  });

  $rootScope.$on('$destroy', () => {
    handler();
  });
}
