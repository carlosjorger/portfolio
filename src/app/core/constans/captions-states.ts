import { Injectable } from "@angular/core";
import { Caption, CaptionState, CaptionStateStyle, Transition } from "src/app/utils/caption-position/caption-model";
@Injectable({
    providedIn: 'root'
  })
export class CaptionStates {
    aboutMe: string = 'About me';
    contact: string = "Contact";
    profetion: string = 'FullStack Engineer - Computer Scientific';

    titleStyle = new CaptionStateStyle(30, 4, 600);
    subTitleStyle = new CaptionStateStyle(45, 1.5, 500);
    descriptionStyle = new CaptionStateStyle(52, 1.5);

    title: Caption;
    subtitle: Caption;
    description: Caption;

    get ContactPos(): number {
        for (let index = 0; index < this.title.states.length; index++) {
            const element = this.title.states[index];
            if(element.text==this.contact){
                return index;
            }
        }
        return 0;
    };
    
    constructor() {
        this.title = new Caption(
            [

                new CaptionState(this.aboutMe,
                    this.titleStyle),
                new CaptionState('Projects',
                    this.titleStyle),
                new CaptionState(this.contact,
                    this.titleStyle),
            ],
            [
                new Transition(1, 0),
                new Transition(1, 0),
            ]);
        this.subtitle = new Caption(
            [
                new CaptionState(this.profetion,
                    this.subTitleStyle),
                new CaptionState('Identity Server',
                    this.subTitleStyle),
                new CaptionState('Find an issue with this page?',
                    this.subTitleStyle),

            ],
            [
                new Transition(1, .25),
                new Transition(1, .25),
            ]);
        this.description = new Caption(
            [

                new CaptionState("I'm a software engineer and bachelor \n of Computer Science \n  of the University of Havana.",
                    this.descriptionStyle),
                new CaptionState('A .netcore middleware that use indentityserver4',
                    this.descriptionStyle),
                new CaptionState('',
                    this.descriptionStyle),

            ],
            [
                new Transition(1, .5),
                new Transition(1, .5),
            ]);
    }
}

