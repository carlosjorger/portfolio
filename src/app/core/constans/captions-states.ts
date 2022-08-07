import { Caption, CaptionState, CaptionStateStyle, Transition } from "src/app/utils/caption-position/caption-model";

const titlePosition = new CaptionStateStyle(30, 4, 600);

const subTitlePosition = new CaptionStateStyle(45, 1.5, 500);

const descriptionPosition = new CaptionStateStyle(52, 1.5);

const name: string = 'About me';
const contact: string = "Contact";
const profetion: string = 'FullStack Engineer - Computer Scientific';
export const title = new Caption(
    [
       
        new CaptionState(name,
            titlePosition),
        new CaptionState('Projects',
            titlePosition),
        new CaptionState(contact,
            titlePosition),
    ],
    [
        new Transition(1.2, 0),
        new Transition(1.2, 0),
    ]);


export const subtitle = new Caption([
    new CaptionState(profetion,
        subTitlePosition),
    new CaptionState('Identity Server',
        subTitlePosition),
    new CaptionState('Find an issue with this page?',
        subTitlePosition),

],
[
    new Transition(1.2, .3),
    new Transition(1.2, .3),
]);
export const description = new Caption([
 
    new CaptionState("I'm a software engineer and bachelor \n of Computer Science \n  of the University of Havana.",
        descriptionPosition),
    new CaptionState('A .netcore middleware that use indentityserver4',
        descriptionPosition),
    new CaptionState('',
        descriptionPosition),

],
[
    new Transition(1.2, .6),
    new Transition(1.2, .6),
]);