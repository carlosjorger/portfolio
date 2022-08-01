import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export let showIntro=trigger('showIntro', [
    // ...
    state('void',
      style({
        backgroundSize: '100% 0%',
        color:'transparent',
      })
    ),
    transition(':enter', [
      animate('1s cubic-bezier(0.3,0.8,0.8,0.3)',keyframes([
        style({
           color:'transparent',
           backgroundSize: '100% 0%',
           offset: 0
        }),
        style({
          backgroundSize: '100% 100%',
          offset: 0.5
       }),
        style({
           backgroundPosition: '100% 100%',
           color:'black',
           offset: 0.6
        }),
        style({
          backgroundSize: '100% 0%',
          offset: 1
       })
      ]))
    ]),
    transition('*=>*', [
      animate('{{Seconds}}s cubic-bezier(0.3,0.8,0.8,0.3)',keyframes([
        style({
          color:'transparent',
           backgroundPosition: '0% 0%',
           backgroundSize: '0% 100%',
           offset: 0
        }),
        style({
          backgroundSize: '100% 100%',
          offset: 0.5
        }),
        style({
          backgroundPosition: '100% 100%',
          color:'black',
          offset: 0.6
        }),
        style({
          backgroundSize: '0% 100%',
          offset: 1
        })
      ]))
    ],{
      params:{
        Seconds:'1.5'
      }
    })
  ]);

export let changeIntroPosition=trigger('changeIntroPosition', [
  // ...
  state('false',
    style({
      top:'{{FirstPositionTop}}',
      left: '{{FirstPositionLeft}}',
      transform: '{{FirstPositionTransform}}',
      fontSize:'{{FirstPositionFontSize}}'
    }),{
      params:{
        FirstPositionTop:'30%',
        FirstPositionLeft:'50%',
        FirstPositionTransform:'translateX(-50%)',
        FirstPositionFontSize:'60px'
      }
    }
  ),
  state('true',
    style({
      top:'{{SecondPositionTop}}',
      left: '{{SecondPositionLeft}}',
      transform: '{{SecondPositionTransform}}',
      fontSize:'{{SecondPositionFontSize}}'
    }),{
      params:{
        SecondPositionTop:'30%',
        SecondPositionLeft:'50%',
        SecondPositionTransform:'translateX(-50%)',
        SecondPositionFontSize:'60px'

      }
    }
  ),
  transition('false<=>true', [
    animate('{{Seconds}}s {{Delay}}s')
  ],{
    params:{
      Delay:'0',
      Seconds:'1'
    }
  }),
 
]);
