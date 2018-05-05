import tpl from './layer.html';
import './layer.less';

function layer() {
    return{
        name: 'layer',
        tpl: tpl,
        dom: '.js-tab'
    }
}

export default layer;