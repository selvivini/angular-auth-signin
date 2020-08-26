import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
 trigger('divstate',[
   state('normal',style({
     'background-color':'red',
     'transform': 'translateX(0)'
   })),
   state('highlighted',style({
    'background-color': 'blue' ,
    'transform': 'translateX(100px)'
   })),
   transition('normal <=> highlighted',animate(300)),
  //  transition('highlighted => normal',animate(800)),
  
 ]),
 trigger('wildstate',[
  state('normal',style({
    'background-color':'red',
    'transform': 'translateX(0) scale(1)'
  })),
  state('highlighted',style({
   'background-color': 'blue' ,
   'transform': 'translateX(100px) scale(1)'
  })),
  state('shrunken',style({
    'background-color': 'green' ,
    'transform': 'translateX(0) scale(0.5)'
   })),
  transition('normal => highlighted',animate(300)),
  transition('highlighted => normal',animate(800)),
  transition('shrunken <=> *',[
    style({
      'background-color': 'orange'
    }),
    animate(1000, style({
      borderRadius: '50px'
    })),
    animate(500)
  ] ) 
  ]),
  trigger('list1',[
    state('in',style({
      'opacity' : 1,
      'transform': 'translateX(0)'
    })),
    
    transition('void => *',[
      style({
      opacity: 0, transform: 'translateX(-100px)'
      }),
      animate(300)
    ]),
    transition('*=> void',[
      animate(1000,keyframes([
        style({
        transform : 'translateX(-100px)',
        opacity: 0
        }),
        style({
        transform: 'translateX(-50px)',
        opacity: 0
        }),
        style({
          transform: 'translateX(-20px)',
          opacity : 1
        })
      ]))
    ]),
    transition('*=> void',[
      animate(300, style({
        transform: 'translateX(100px)',
        opacity: 0
      }))
     ]),
   
  
   
  ]),
  

  ]
})
export class AppComponent {
  state ='normal';
  wildstate = 'normal'
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate(){
    this.state == 'normal' ? this.state ='highlighted' : this.state = 'normal';
    this.wildstate == 'normal' ? this.wildstate ='highlighted' : this.wildstate = 'normal';
  }
  onShrink(){
    this.wildstate ='shrunken';
  }

    onAdd(item) {
      this.list.push(item);
    }
}
