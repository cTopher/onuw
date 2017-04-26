import {IDirective, ITranscludeFunction, IScope, IAttributes, IController} from 'angular'

import './card.scss'

export default function cardDirective(): IDirective {
  return {
    restrict: 'E',
    transclude: true,
    link: (scope: IScope, element: JQuery, attrs: IAttributes, controller: IController, transcludeFn: ITranscludeFunction) => {
      element.addClass('md-whiteframe-3dp')
      transcludeFn((clone) => element.append(clone))
    },
  }

}
