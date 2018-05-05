import './css/common.css';
import Layer from './components/layer/layer.js';
import Tab from './components/layer/tab.js';
import $ from './components/lib/jquery-vendor.js'

const App = function () {
    let dom = document.getElementById('app');
    let layer = Layer();
    dom.innerHTML = layer.tpl;

    var tab = new Tab($(layer.dom).eq(0));
    var tab = new Tab($(layer.dom).eq(1));
}

new App();