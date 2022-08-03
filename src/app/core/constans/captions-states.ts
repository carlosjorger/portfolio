import { Caption, CaptionState, CaptionStateStyle, Transition } from "src/app/utils/caption-position/caption-model";

const titleFirstPosition = new CaptionStateStyle('30%', '50%', 'translateX(-50%)', '6', 600);
const titleSecondPosition = new CaptionStateStyle('30%', '5%', 'translateX(0%)', '3', 600);

const subTitleFirstPosition = new CaptionStateStyle('44%', '50%', 'translateX(-50%)', '5', 400);
const subTitleSecondPosition = new CaptionStateStyle('45%', '5%', 'translateX(0%)', '1.5', 500);


const descriptionFirstPosition = new CaptionStateStyle('50%', '50%', 'translateX(-50%)', '4', 400);
const descriptionSecondPosition = new CaptionStateStyle('50%', '5%', 'translateX(0%)', '1.5');

const name: string = 'Carlos Jorge';
const about: string = "About";
const profetion: string = 'FullStack Engineer';
const profetionPlus: string = 'FullStack Engineer - Computer Scientific'
export const title = new Caption(
    [
        new CaptionState(name,
            titleFirstPosition),
        new CaptionState(name,
            titleSecondPosition),
        new CaptionState('Projects',
            titleSecondPosition),
        new CaptionState(about,
            titleSecondPosition),
    ],
    [
        new Transition(1.2, 0),
        new Transition(1.5, 0),
        new Transition(1.5, 0),
    ]);


export const subtitle = new Caption([
    new CaptionState(profetion,
        subTitleFirstPosition),
    new CaptionState(profetion,
        subTitleSecondPosition),
    new CaptionState('Identity Server',
        subTitleSecondPosition),
    new CaptionState('My contacs',
        subTitleSecondPosition),

],
[
    new Transition(1.2, 0),
    new Transition(1.5, 0.3),
    new Transition(1.5, 0.3),
]);
export const description = new Caption([
    new CaptionState("I'm a software engineer and bachelor \n of Computer Science \n  of the University of Havana.",
        descriptionFirstPosition),
    new CaptionState("I'm a software engineer and bachelor \n of Computer Science \n  of the University of Havana.",
        descriptionSecondPosition),
    new CaptionState('A .netcore middleware that use indentityserver4',
        descriptionSecondPosition),
    new CaptionState('',
        descriptionSecondPosition),

],
[
    new Transition(1.2, 0),
    new Transition(1.5, 0.6),
    new Transition(1.5, 0.6),
]);