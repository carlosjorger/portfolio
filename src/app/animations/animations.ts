import { animate, keyframes, state, style, transition, trigger, AnimationEvent, query, animateChild, group } from "@angular/animations";

import { CaptionState, Transition } from "../core/models/caption-model";
import { ResponsiveState } from "../core/models/responsive-state";
export class AnimationPatameter {
  public FirstPositionFontWeight: number;
  public SecondPositionFontWeight: number;
  public Seconds: number;
  constructor(firstState: CaptionState, secondState: CaptionState,
    transition: Transition) {
    this.FirstPositionFontWeight = firstState?.captionStyle?.fontweight;
    this.SecondPositionFontWeight = secondState?.captionStyle?.fontweight
    this.Seconds = transition.second+transition.delay
  }
  toPlainObj(): {
    FirstPositionFontWeight: number
    , SecondPositionFontWeight: number
    , Seconds: number
  } {
    return Object.assign({}, this);
  }
}
export let showIntro = trigger('showIntro', [
  // ...
  state('void',
    style({
      color: 'transparent',
      backgroundPosition: '0% 0%',
      backgroundSize: '0% 100%',
      offset: 0,
    })
  ),
  state('*',
    style({
      backgroundSize: '0% 100%',
      fontWeight: '{{FirstPositionFontWeight}}',
    }),
    {
      params: {
        FirstPositionFontWeight: 500,
      }
    }
  ),
  transition('*=>void', [
    animate('{{Seconds}}s {{Delay}}s cubic-bezier(0.2,0.9,0.9,0.2)',
      keyframes(
        [
          style({
            color: '#ac4bf6',
            backgroundPosition: '0% 0%',
            backgroundSize: '0% 100%',
            offset: 0,
            fontWeight: '{{FirstPositionFontWeight}}',
          }),
          style({
            backgroundSize: '100% 100%',
            offset: 0.5
          }),
          style({
            backgroundPosition: '100% 100%',
            color: 'transparent',
            offset: 0.6
          }),
          style({
            backgroundSize: '0% 100%',
            offset: 1,
            fontWeight: '{{SecondPositionFontWeight}}',

          })
        ]
      )
    )
  ], {
    params: {
      Seconds: '0.3',
      Delay: '0',
      FirstPositionFontWeight: 500,
      SecondPositionFontWeight: 500,
    }
  }),
  transition('*=>*',
    [
      group(
        [
          query("@*", [animateChild()], { optional: true }),
          animate('{{Seconds}}s cubic-bezier(0.4,0.7,0.7,0.4)',
            keyframes(
              [
                style({
                  color: 'transparent',
                  backgroundPosition: '0% 0%',
                  backgroundSize: '0% 100%',
                  offset: 0,
                  fontWeight: '{{FirstPositionFontWeight}}',
                }),
                style({
                  backgroundSize: '100% 100%',
                  offset: 0.5
                }),
                style({
                  backgroundPosition: '100% 100%',
                  color: '#ac4bf6',

                  offset: 0.6
                }),
                style({
                  backgroundSize: '0% 100%',
                  offset: 1,
                  fontWeight: '{{SecondPositionFontWeight}}',
                })
              ]
            )
          )
        ])
    ],
    {
      params: {
        Seconds: '0.8',
        Delay: '0',
        FirstPositionFontWeight: 500,
        SecondPositionFontWeight: 500,
      }
    }),
]);

export let showContacts = trigger('showContacts',
  [
    state('void',
      style({ opacity: 0 })),
    transition(':enter', [
      animate('2s ease-in', style({
        opacity: 1,
      })),
    ])
  ]);
export let showTittle = trigger('showTittle',
  [
    state('void',
      style({ opacity: 0, transform: 'translateY(50%)' })),
    transition(':enter',
      [
        animate('2s {{delay}}s ease-out',
          style(
            {
              opacity: 1, transform: 'translateY(0%)'
            }
          )
        ),
      ],
      {
        params: {
          delay: '0'
        }
      }
    )
  ]);