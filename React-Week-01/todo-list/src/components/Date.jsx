import React, {Component} from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        return (
            <div>

                <h1>{Moment().format('dddd')}</h1>
                <p>{Moment().format('LL')}</p>

               {/*  <h1>Sunday</h1>
                <p>Oct 28, 2018</p> */}
                
            </div>
        );
    }
}

export default Date;




