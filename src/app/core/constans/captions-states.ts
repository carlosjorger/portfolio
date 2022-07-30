import { Caption, CaptionStyle } from "src/app/utils/caption-position/caption-position";

const titleFirstPosition = new CaptionStyle('30%', '50%', 'translateX(-50%)', '80px');
const titleSecondPosition = new CaptionStyle('30%', '5%', 'translateX(0%)', '50px');

const descriptionFirstPosition = new CaptionStyle('45%', '50%', 'translateX(-50%)', '60px');
const descriptionSecondPosition = new CaptionStyle('42%', '5%', 'translateX(0%)', '30px');

const name:string='Carlos Jorge';
const profetion:string='FullStack Engineer';
const profetionPlus:string='FullStack Engineer - Computer Scientific'
export const titleStates = [
    new Caption(name,
        titleFirstPosition),
    new Caption(name,
        titleSecondPosition),
    new Caption(name,
        titleSecondPosition),
];
export const descriptionStates = [
    new Caption(profetion,
        descriptionFirstPosition),
    new Caption(profetion,
        descriptionSecondPosition),
    new Caption(profetionPlus,
        descriptionSecondPosition),

];