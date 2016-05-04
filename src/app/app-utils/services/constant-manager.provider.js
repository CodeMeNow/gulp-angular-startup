export class ConstantManager {
  constructor(APP_CONSTANTS, $injector) {
    'ngInject';
    this.APP_CONSTANTS = APP_CONSTANTS;
    this.$injector = $injector;
  }

  getConstant(constantName) {
    if (this[constantName]) {
      //this is a server override and this take precedence
      return this[constantName];
    } else if (this.APP_CONSTANTS[constantName]) {
      //Return APP APP_CONSTANTS
      return this.APP_CONSTANTS[constantName];
    } else {
      //Search on ENV constant
      let envConst;
      try {
        envConst = this.$injector.get(constantName);
      } catch (e) {
        console.error(`Constant ${constantName} not found`, e);
      }
      if (envConst) {
        return envConst;
      } else {
        return null;
      }
    }
  }

  $get() {
    return {
      get: this.getConstant.bind(this)
    };
  }
}
