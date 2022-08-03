import { Caption, CaptionState, CaptionStateStyle } from "src/app/utils/caption-position/caption-position";

const titleFirstPosition = new CaptionStateStyle('30%', '50%', 'translateX(-50%)', '90px',600);
const titleSecondPosition = new CaptionStateStyle('30%', '5%', 'translateX(0%)', '60px',600);

const subTitleFirstPosition = new CaptionStateStyle('45%', '50%', 'translateX(-50%)', '60px',400);
const subTitleSecondPosition = new CaptionStateStyle('45%', '5%', 'translateX(0%)', '20px',500);


const descriptionFirstPosition = new CaptionStateStyle('55%', '50%', 'translateX(-50%)', '40px',400);
const descriptionSecondPosition = new CaptionStateStyle('50%', '5%', 'translateX(0%)', '20px');

const name:string='Carlos Jorge';
const about:string="About";
const profetion:string='FullStack Engineer';
const profetionPlus:string='FullStack Engineer - Computer Scientific'
export const title =new Caption([
    new CaptionState(name,
        titleFirstPosition,
        1.2,0),
    new CaptionState(name,
        titleSecondPosition,
        1.2,0),
    new CaptionState('Projects',
            titleSecondPosition,1.5,0),
    new CaptionState(about,
        titleSecondPosition,1.5,0),
]);
export const subtitle = new Caption([
    new CaptionState(profetion,
        subTitleFirstPosition,
        1.2,0),
    new CaptionState(profetion,
        subTitleSecondPosition,
        1.2,0),
    new CaptionState('Identity Server',
            subTitleSecondPosition,
            1.5,0.3),
    new CaptionState('My contacs',
        subTitleSecondPosition,
        1.5,0.3),

]);
export const description = new Caption([
    new CaptionState("I'm a software engineer and bachelor \n of Computer Science \n  of the University of Havana.",
    descriptionFirstPosition,
    1.2,0),
    new CaptionState("I'm a software engineer and bachelor \n of Computer Science \n  of the University of Havana.",
    descriptionSecondPosition,
    1.2,0),
    new CaptionState('A .netcore middleware that use indentityserver4',
    descriptionSecondPosition,
    1.5,0.6),
    new CaptionState('',
    descriptionSecondPosition,
    1.5,0.6),

]);