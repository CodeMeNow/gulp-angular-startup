# Startup
### Requirements
- node.js (latest)
- gulp (npm i -g gulp)
- bower (npm i -g bower)

### Install dependencies
- npm i
- bower i

### update dependencies
- npm update
- bower update

### run locally
- gulp serve

### unit tests
- gulp test
- gulp test:auto (watch)

### build
- gulp --env="development|staging|production"

### Local setup
you need to create a file here:
`/src/app/common/local-constants.json`
and copy in it the node `development` located here:
`/src/app/common/ng-constants.json`

For share new constants with other developers you have to update `ng-constants.json` with your personal `local-constants.json` variables

### Translations
translation must use namespace for logically group words eg:

```
{
  "COMMON": {
    "COMMON_STRING": "translation here"
  }
  "SIDEBAR": {
    "MENU_ONE": "translation here"
  }
}
```

Examples of translate attribute directive and filter:
```
<span translate="NAMESPACE.STRING_NAME"></span>
<a href translate="NAMESPACE.A_TAG" alt="{{'NAMESPACE.ALT_TAG' | translate}}">
```
NB translate attribute works only if it finds only a translation string inside tag eg:

this isn't working
```
<a href translate="NAMESPACE.A">
  <i class="fa fa-angle-down" aria-hidden="true"></i>
</a>
```

this is fine
```
<a href>
  <span translate="NAMESPACE.A"></span>
  <i class="fa fa-angle-down" aria-hidden="true"></i>
</a>
```
