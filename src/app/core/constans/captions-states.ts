import { Caption, CaptionState, CaptionStateStyle } from "src/app/utils/caption-position/caption-position";

const titleFirstPosition = new CaptionStateStyle('30%', '50%', 'translateX(-50%)', '80px');
const titleSecondPosition = new CaptionStateStyle('30%', '5%', 'translateX(0%)', '50px');

const descriptionFirstPosition = new CaptionStateStyle('45%', '50%', 'translateX(-50%)', '60px');
const descriptionSecondPosition = new CaptionStateStyle('42%', '5%', 'translateX(0%)', '30px');

const name:string='Carlos Jorge';
const about:string="About";
const profetion:string='FullStack Engineer';
const profetionPlus:string='FullStack Engineer - Computer Scientific'
export const title =new Caption([
    new CaptionState(name,
        titleFirstPosition),
    new CaptionState(name,
        titleSecondPosition),
    new CaptionState('Some Works',
            titleSecondPosition),
    new CaptionState(about,
        titleSecondPosition),
],1.5,0);
export const description = new Caption([
    new CaptionState(profetion,
        descriptionFirstPosition),
    new CaptionState(profetion,
        descriptionSecondPosition),
    new CaptionState('Some Projects',
            descriptionSecondPosition),
    new CaptionState('My contacs',
        descriptionSecondPosition),

],1.5,0.5);