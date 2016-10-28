/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react'
import ClickButton from './clickButton/ClickButton';

export default class Amount extends React.Component {
    constructor() {
        super();
        this.state = {numberOfClicks: 0};
        
         
        this._PlusClick = this._PlusClick.bind(this);
        this._MinusClick = this._MinusClick.bind(this);
    }
    
    _PlusClick() {
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        });
    }

    _MinusClick() {
        if (this.state.numberOfClicks >= 1) {
            this.setState({
                numberOfClicks: this.state.numberOfClicks - 1
            })
        }
        else {
            console.log('oops')
        }
    }
        
render() {
    return (
       <Amount>
           <div>
               <ClickButton handleClick={this._PlusClick}>  
                   Dodaj
               </ClickButton>
           </div>
           <h1>{this.state.numberOfClicks}</h1>
           <div>                     
               <ClickButton handleClick={this._MinusClick}> 
                   Usuń
               </ClickButton>
           </div>
       </Amount>
    )}
}
