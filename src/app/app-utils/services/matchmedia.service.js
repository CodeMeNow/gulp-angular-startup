export class MatchmediaService {
  constructor(matchmedia) {
    'ngInject';
    this.isPhone = false;
    this.matchmedia = matchmedia;

    matchmedia.onPhone((mediaQueryList) => {
      this.isPhone = mediaQueryList.matches;
    });

    matchmedia.onPortrait((response) => {
      this.isPortrait = response.matches;
      this.isLandscape = !response.matches;
    });
  }

  onPortrait(cb) {
    return this.matchmedia.onPortrait((response) => {
      if (response.matches) {
        cb();
      }
    });
  }

  onLandscape(cb){
    return this.matchmedia.onLandscape((response) => {
      if (response.matches) {
        cb();
      }
    });
  }
}
