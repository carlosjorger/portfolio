export class Caption {
    constructor(public states: CaptionState[], public transition: Transition[] = []) {

    }

}
export class Transition {
    constructor(public second: number) { }
}
export class CaptionState {
    constructor(public text: string) { }
}

