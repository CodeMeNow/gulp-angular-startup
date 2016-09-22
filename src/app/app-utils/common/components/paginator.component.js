class EcPaginatorController {
  constructor($log) {
    'ngInject';
    this.$log = $log;
    console.log(this);
  }

  $onInit() {}

  onChangePage() {
    this.onChange();
  }

  $onChanges() {}
}

export const EcPaginatorComponent = {
  bindings: {
    list: '<',
    filters: '<',
    onChange: '&'
  },
  templateUrl: 'app/app-utils/common/components/paginator.component.html',
  controller: EcPaginatorController,
  controllerAs: 'paginator'
};
