import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '@/screen/Home';
import Html_view from '@/screen/Html_view';
import Css_view from '@/screen/Css_view';
import Js_view from '@/screen/Js_view';
import Http_view from '@/screen/Http_view';
import Ts_view from '@/screen/Ts_view';
import Frame_view from '@/screen/Frame_view';
import Java_view from '@/screen/Java_view';
import Mobile_view from '@/screen/Mobile_view';
import Extend_view from '@/screen/Extend/Extend_view';
import Extend_art1 from '@/screen/Extend/Extend_art1';
import Range_view from '@/screen/Range/Range_view';
import Sprogram_view from '@/screen/Sprogram_view';
import Sort_view from '@/screen/Sort_view';
import Css_Why_art from '@/screen/Css_Why_art';
import Range_art1 from '@/screen/Range/Range_art1';
import Range_art2 from '@/screen/Range/Range_art2';
import Range_art3 from '@/screen/Range/Range_art3';
import Range_art4 from '@/screen/Range/Range_art4';
import Range_art5 from '@/screen/Range/Range_art5';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Route exact={true} path='/' render={()=><Redirect to='/Home' />}/>
                <Route path='/Home' component={Home}/>
                <Route path='/Html_view' component={Html_view}/>
                <Route path='/Css_view' component={Css_view}/>
                <Route path='/Js_view' component={Js_view}/>
                <Route path='/Http_view' component={Http_view}/>
                <Route path='/Ts_view' component={Ts_view}/>
                <Route path='/Frame_view' component={Frame_view}/>
                <Route path='/Java_view' component={Java_view}/>
                <Route path='/Mobile_view' component={Mobile_view}/>
                <Route path='/Extend_view' component={Extend_view}/>
                <Route path='/Extend_art1' component={Extend_art1}/>
                <Route path='/Range_view' component={Range_view}/>
                <Route path='/Sprogram_view' component={Sprogram_view}/>
                <Route path='/Sort_view' component={Sort_view}/>
                <Route path='/Css_Why_art' component={Css_Why_art}/>
                <Route path='/Range_art1' component={Range_art1}/>
                <Route path='/Range_art2' component={Range_art2}/>
                <Route path='/Range_art3' component={Range_art3}/>
                <Route path='/Range_art4' component={Range_art4}/>
                <Route path='/Range_art5' component={Range_art5}/>
            </div>
        )
    }
}