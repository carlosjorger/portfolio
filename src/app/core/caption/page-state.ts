import { CaptionState, Transition } from "./caption-model";
export class PageStates {
    constructor(public pageStates:PageState[], public pageTransition:PageTransition[]) {
        
    }
}
export class PageState {
    constructor(public title:CaptionState,public subTitle:CaptionState,public description:CaptionState) {
        
    }
}
export class PageTransition{
    constructor(public titleTransition:Transition, public subTitleTransition:Transition, public descriptionTransition:Transition) {
        
    }
}