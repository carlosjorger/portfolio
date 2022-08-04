import { Caption, CaptionState, CaptionStateStyle, Transition } from "src/app/utils/caption-position/caption-model";

const titleSecondPosition = new CaptionStateStyle('30%', '5%', 'translateX(0%)', 4, 600);

const subTitleSecondPosition = new CaptionStateStyle('45%', '5%', 'translateX(0%)', 1.5, 500);

const descriptionSecondPosition = new CaptionStateStyle('50%', '5%', 'translateX(0%)', 1.5);

const name: string = 'About me';
const contact: string = "Contact";
const profetion: string = 'FullStack Engineer - Computer Scientific';
export const title = new Caption(
    [
       
        new CaptionState(name,
            titleSecondPosition),
        new CaptionState('Projects',
            titleSecondPosition),
        new CaptionState(contact,
            titleSecondPosition),
    ],
    [

        new Transition(1.2, 0),
        new Transition(1.2, 0),
    ]);


export const subtitle = new Caption([
    new CaptionState(profetion,
        subTitleSecondPosition),
    new CaptionState('Identity Server',
        subTitleSecondPosition),
    new CaptionState('Find an issue with this page?',
        subTitleSecondPosition),

],
[
    new Transition(1.2, .3),
    new Transition(1.2, .3),
]);
export const description = new Caption([
 
    new CaptionState("I'm a software engineer and bachelor \n of Computer Science \n  of the University of Havana.",
        descriptionSecondPosition),
    new CaptionState('A .netcore middleware that use indentityserver4',
        descriptionSecondPosition),
    new CaptionState('',
        descriptionSecondPosition),

],
[

    new Transition(1.2, .6),
    new Transition(1.2, .6),
]);