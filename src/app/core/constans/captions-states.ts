import { Injectable } from "@angular/core";
import { Caption, CaptionState, CaptionStateStyle, StateStyle, Transition } from "src/app/core/models/caption-model";
import { PageState, PageStates, PageTransition } from "src/app/core/models/page-state"
@Injectable({
    providedIn: 'root'
})
export class CaptionStates {
    aboutMe: string = 'About me';
    contact: string = "Contact";
    profetion: string = 'FullStack Engineer - Computer Scientific';

    titleStyle = new CaptionStateStyle(600,
        {
            fontSize: new StateStyle("4vw", 2,true),
            top: new StateStyle("30%", 1,false),
            maxWidth: new StateStyle("40%", 2,true),
        });
    subTitleStyle = new CaptionStateStyle(500,
        {
            fontSize: new StateStyle("1.5vw", 2.8,true),
            top: new StateStyle("45%", 0.9,false),
            maxWidth: new StateStyle("40%", 2,true),
        });
    descriptionStyle = new CaptionStateStyle(400,
        {
            fontSize: new StateStyle("1.5vw", 2.5,true),
            top: new StateStyle("50%", 0.95,false),
            maxWidth: new StateStyle("40%", 2,true),
        });

    title: Caption = new Caption([], []);
    subtitle: Caption = new Caption([], []);;
    description: Caption = new Caption([], []);;

    get ContactPos(): number {
        for (let index = 0; index < this.title.states.length; index++) {
            const element = this.title.states[index];
            if (element.text == this.contact) {
                return index;
            }
        }
        return 0;
    };

    constructor() {
        let pageStates = new PageStates(
            [
                new PageState(
                    new CaptionState(this.aboutMe,
                        this.titleStyle),
                    new CaptionState(this.profetion,
                        this.subTitleStyle),
                    new CaptionState("I'm a software engineer and bachelor of Computer Science\
                        of the University of Havana.\n\
                        My main focus is grown as a profesional in challenging projects,\
                        I don't like to stay in the comfort zone.\
                        I support good practices and healthy work enviroment",
                        this.descriptionStyle)
                ),
                new PageState(
                    new CaptionState(this.aboutMe,
                        this.titleStyle),
                    new CaptionState(this.profetion,
                        this.subTitleStyle),
                    new CaptionState("Here are a few technologies I've been working with recently:\n\
                    &nbsp; .<strong>net core</strong>\n\
                    &nbsp; .<strong>angular</strong>\n\
                    &nbsp; .<strong>html</strong>\n\
                    &nbsp; .<strong>css</strong>",
                        this.descriptionStyle)
                ),
                new PageState(
                    new CaptionState('Projects',
                        this.titleStyle),
                    new CaptionState('Identity Server',
                        this.subTitleStyle),
                    new CaptionState('A .netcore middleware that use indentityserver4',
                        this.descriptionStyle)
                ),
                new PageState(
                    new CaptionState(this.contact,
                        this.titleStyle),
                    new CaptionState('Find an issue with this page?',
                        this.subTitleStyle),
                    new CaptionState('',
                        this.descriptionStyle),
                ),
            ],
            [
                new PageTransition(
                    new Transition(1, 0),
                    new Transition(1, .3),
                    new Transition(1, .6),

                ),
                new PageTransition(
                    new Transition(1, 0),
                    new Transition(1, .3),
                    new Transition(1, .6),

                ),
                new PageTransition(
                    new Transition(1, 0),
                    new Transition(1, .3),
                    new Transition(1, .6),

                )

            ])
        this.MappingToCaptions(pageStates);

    }
    private MappingToCaptions(pageStates: PageStates) {
        this.title = new Caption(
            [
                ...pageStates.pageStates.flatMap(v => v.title)
            ],
            [
                ...pageStates.pageTransition.flatMap(t => t.titleTransition)
            ]);
        this.subtitle = new Caption(
            [
                ...pageStates.pageStates.flatMap(v => v.subTitle)
            ],
            [
                ...pageStates.pageTransition.flatMap(t => t.subTitleTransition)
            ]);
        this.description = new Caption(
            [
                ...pageStates.pageStates.flatMap(v => v.description)
            ],
            [
                ...pageStates.pageTransition.flatMap(t => t.descriptionTransition)
            ]);
    }
}

