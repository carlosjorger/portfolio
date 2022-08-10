import { animate, keyframes, state, style, transition, trigger, AnimationEvent, query, animateChild, group } from "@angular/animations";

import { CaptionState, Transition } from "../core/caption/caption-model";
import { ResponsiveState } from "../core/caption/responsive-state";
export class AnimationPatameter {
  public FirstPositionTop: number;
  public FirstPositionFontSize: number;
  public FirstPositionFontWeight: number;
  public FirstMaxWidth: number;
  public SecondPositionTop: number;
  public SecondPositionFontSize: number;
  public SecondPositionFontWeight: number;
  public SecondMaxWidth: number;
  public Seconds: number;
  constructor(firstState: CaptionState, secondState: CaptionState,
    responsiveState: ResponsiveState,
    transition: Transition) {
    this.FirstPositionTop = responsiveState.top;
    this.FirstPositionFontSize = responsiveState.fontSize;
    this.FirstPositionFontWeight = firstState?.captionStyle?.fontweight;
    this.FirstMaxWidth = responsiveState.maxWidth;
    this.SecondPositionTop = responsiveState.top;
    this.SecondPositionFontSize = responsiveState.fontSize;
    this.SecondPositionFontWeight = secondState?.captionStyle?.fontweight
    this.SecondMaxWidth = responsiveState.maxWidth;
    this.Seconds = transition.second
  }
  toPlainObj(): {
      FirstPositionTop: number
    , FirstPositionFontSize: number
    , FirstPositionFontWeight: number
    , FirstMaxWidth: number
    , SecondPositionTop: number
    , SecondPositionFontSize: number
    , SecondPositionFontWeight: number
    , SecondMaxWidth: number
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
      top: '{{FirstPositionTop}}%',
      fontSize: '{{FirstPositionFontSize}}vw',
      fontWeight: '{{FirstPositionFontWeight}}'
    }),
    {
      params: {
        FirstPositionFontWeight: 500,
        FirstPositionTop: 30,
        FirstPositionFontSize: '3',
      }
    }
  ),
  state('*',
    style({
      backgroundSize: '0% 100%',
      fontWeight: '{{FirstPositionFontWeight}}',
      top: '{{FirstPositionTop}}%',
      fontSize: '{{FirstPositionFontSize}}vw',
      maxWidth: '{{FirstMaxWidth}}%'
    }),
    {
      params: {
        FirstPositionFontWeight: 500,
        FirstPositionTop: 30,
        FirstPositionFontSize: '3',
        FirstMaxWidth: 50,

      }
    }
  ),
  transition('*=>void', [
    animate('{{Seconds}}s {{Delay}}s cubic-bezier(0.3,0.8,0.8,0.3)',
      keyframes(
        [
          style({
            color: '#ac4bf6',
            backgroundPosition: '0% 0%',
            backgroundSize: '0% 100%',
            offset: 0,
            top: '{{FirstPositionTop}}%',
            fontSize: '{{FirstPositionFontSize}}vw',
            fontWeight: '{{FirstPositionFontWeight}}',
            maxWidth: '{{FirstMaxWidth}}%'
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
            top: '{{SecondPositionTop}}%',
            fontSize: '{{SecondPositionFontSize}}vw',
            fontWeight: '{{SecondPositionFontWeight}}',
            maxWidth: '{{SecondMaxWidth}}%'

          })
        ]
      )
    )
  ], {
    params: {
      Seconds: '0.3',
      Delay: '0',
      FirstPositionTop: 30,
      FirstPositionFontSize: '3',
      FirstPositionFontWeight: 500,
      FirstMaxWidth: 50,
      SecondPositionTop: 30,
      SecondPositionFontSize: '3',
      SecondPositionFontWeight: 500,
      SecondMaxWidth: 50,

    }
  }),
  transition('*=>*',
    [
      group(
        [
          query("@*", [animateChild()], { optional: true }),
          animate('{{Seconds}}s {{Delay}}s cubic-bezier(0.3,0.8,0.8,0.3)',
            keyframes(
              [
                style({
                  color: 'transparent',
                  backgroundPosition: '0% 0%',
                  backgroundSize: '0% 100%',
                  offset: 0,
                  top: '{{FirstPositionTop}}%',
                  fontSize: '{{FirstPositionFontSize}}vw',
                  fontWeight: '{{FirstPositionFontWeight}}',
                  maxWidth: '{{FirstMaxWidth}}%'
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
                  top: '{{SecondPositionTop}}%',
                  fontSize: '{{SecondPositionFontSize}}vw',
                  fontWeight: '{{SecondPositionFontWeight}}',
                  maxWidth: '{{SecondMaxWidth}}%'
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
        FirstPositionTop: 30,
        FirstPositionFontSize: '3',
        FirstPositionFontWeight: 500,
        FirstMaxWidth: 50,
        SecondPositionTop: 30,
        SecondPositionFontSize: '3',
        SecondPositionFontWeight: 500,
        SecondMaxWidth: 50,
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