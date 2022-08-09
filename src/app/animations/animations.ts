import { animate, keyframes, state, style, transition, trigger, AnimationEvent, query, animateChild, group } from "@angular/animations";

import { CaptionState, Transition } from "../core/caption/caption-model";

export let getAnimationParameters =
  function (firstState: CaptionState, FirstPositionFontSize: number, FirstPositionTop: Number,
    secondState: CaptionState, SecondPositionFontSize: number, SecondPositionTop: Number,
    transition: Transition) {
    return {
      FirstPosition: firstState,
      FirstPositionTop: FirstPositionTop,
      FirstPositionFontSize: FirstPositionFontSize
      , FirstPositionFontWeight: firstState?.captionStyle?.fontweight
      , SecondPositionTop: SecondPositionTop
      , SecondPositionFontSize: SecondPositionFontSize
      , SecondPositionFontWeight: secondState?.captionStyle?.fontweight
      , Seconds: transition.second
    };
  };
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
    }),
    {
      params: {
        FirstPositionFontWeight: 500,
        FirstPositionTop: 30,
        FirstPositionFontSize: '3',
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
            fontWeight: '{{FirstPositionFontWeight}}'
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
            fontWeight: '{{SecondPositionFontWeight}}'
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
      SecondPositionTop: 30,
      SecondPositionFontSize: '3',
      SecondPositionFontWeight: 500
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
                  fontWeight: '{{FirstPositionFontWeight}}'
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
                  fontWeight: '{{SecondPositionFontWeight}}'
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
        SecondPositionTop: 30,
        SecondPositionFontSize: '3',
        SecondPositionFontWeight: 500
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
          delay:'0'
        }
      }
    )
  ]);