import { animate, keyframes, state, style, transition, trigger, AnimationEvent } from "@angular/animations";
import { CaptionState, Transition } from "../utils/caption-position/caption-model";

export let getAnimationParameters =
  function (firstState: CaptionState,FirstPositionFontSize:number,
    secondState: CaptionState,SecondPositionFontSize:number, 
    transition: Transition) {
    return {
      FirstPosition: firstState,
      FirstPositionTop: firstState?.captionStyle?.top,
      FirstPositionLeft: firstState?.captionStyle?.left,
      FirstPositionTransform: firstState?.captionStyle?.transform,
      FirstPositionFontSize: FirstPositionFontSize
      , FirstPositionFontWeight: firstState?.captionStyle?.fontweight
      , SecondPositionTop: secondState?.captionStyle?.top
      , SecondPositionLeft: secondState?.captionStyle?.left
      , SecondPositionTransform: secondState?.captionStyle?.transform
      , SecondPositionFontSize: SecondPositionFontSize
      , SecondPositionFontWeight: secondState?.captionStyle?.fontweight
      , Seconds: transition.second
    };
  };
export let showIntro = trigger('showIntro', [
  // ...

  state('*',
    style({
      backgroundSize: '0% 100%',
      fontWeight: '{{FirstPositionFontWeight}}',
      top: '{{FirstPositionTop}}',
      left: '{{FirstPositionLeft}}',
      fontSize: '{{FirstPositionFontSize}}vw',
    }),
    {
      params: {
        FirstPositionFontWeight: 500,
        FirstPositionTop: '30%',
        FirstPositionLeft: '5%',
        FirstPositionFontSize: '3',
      }
    }
  ),
  transition('*=>*', [
    animate('{{Seconds}}s {{Delay}}s cubic-bezier(0.3,0.8,0.8,0.3)', keyframes([
      style({
        color: 'transparent',
        backgroundPosition: '0% 0%',
        backgroundSize: '0% 100%',
        offset: 0,
        top: '{{FirstPositionTop}}',
        left: '{{FirstPositionLeft}}',
        fontSize: '{{FirstPositionFontSize}}vw',
        fontWeight: '{{FirstPositionFontWeight}}'
      }),
      style({
        backgroundSize: '100% 100%',
        offset: 0.5
      }),
      style({
        backgroundPosition: '100% 100%',
        color: 'black',
        offset: 0.6
      }),
      style({
        backgroundSize: '0% 100%',
        offset: 1,
        top: '{{SecondPositionTop}}',
        left: '{{SecondPositionLeft}}',
        fontSize: '{{SecondPositionFontSize}}vw',
        fontWeight: '{{SecondPositionFontWeight}}'
      })
    ]))
  ], {
    params: {
      Seconds: '0.8',
      Delay: '0',
      FirstPositionTop: '30%',
      FirstPositionLeft: '5%',
      FirstPositionFontSize: '3',
      FirstPositionFontWeight: 500,
      SecondPositionTop: '30%',
      SecondPositionLeft: '5%',
      SecondPositionFontSize: '3',
      SecondPositionFontWeight: 500
    }
  }),
]);

export let showContacts=trigger('showContacts', [
  state('void',
  style({ opacity: 0, backgroundColor:'red' })),
  transition(':enter', [
    animate('2s',keyframes([
      style({
        opacity: 0, backgroundColor:'red',
        offset: 0
      }),
      style({
        opacity: 1, backgroundColor:'blue',
        offset: 1
      })])),
  ])
]);