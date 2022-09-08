import { Injectable } from "@angular/core";
import { Caption, CaptionState, Transition } from "src/app/core/models/caption-model";
import { PageState, PageStates, PageTransition } from "src/app/core/models/page-state"
@Injectable({
    providedIn: 'root'
})
export class CaptionStates {
    aboutMe: string = 'About me';
    contact: string = "Contact";
    profetion: string = 'FullStack Engineer - Computer Scientific';


    title: Caption = new Caption([], []);
    subtitle: Caption = new Caption([], []);;
    description: Caption = new Caption([], []);;

    get ContactPos(): number {
        return this.title.states.
                        findIndex((state)=>state.text==this.contact)
    };

    constructor() {
        let pageStates = new PageStates(
            [
                new PageState(
                    new CaptionState(this.aboutMe),
                    new CaptionState(this.profetion),
                    new CaptionState("I'm a software engineer and bachelor of Computer Science\
                        of the University of Havana.\n\
                        My main focus is grown as a profesional in challenging projects,\
                        I don't like to stay in the comfort zone.\
                        I support good practices and healthy work enviroment")
                ),
                new PageState(
                    new CaptionState(this.aboutMe),
                    new CaptionState(this.profetion),
                    new CaptionState("Here are a few technologies I've been working with recently:\n\
                    &nbsp; .<strong>net core</strong>\n\
                    &nbsp; .<strong>angular</strong>\n\
                    &nbsp; .<strong>html</strong>\n\
                    &nbsp; .<strong>css</strong>")
                ),
                new PageState(
                    new CaptionState('Projects'),
                    new CaptionState('Identity Server'),
                    new CaptionState('A .netcore middleware that use indentityserver4')
                ),
                new PageState(
                    new CaptionState(this.contact),
                    new CaptionState('Find an issue with this page?'),
                    new CaptionState(''),
                ),
            ],
            [
                new PageTransition(
                    new Transition(.7),
                    new Transition(.7),
                    new Transition(.7),

                ),
                new PageTransition(
                    new Transition(.7),
                    new Transition(.7),
                    new Transition(.7),

                ),
                new PageTransition(
                    new Transition(.7),
                    new Transition(.7),
                    new Transition(.7),

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

