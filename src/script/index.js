import  "../css/index.css";
import  "../css/lessBox.less";
import  "../css/sass.scss";

import Layer from "../components/layer/layer.js";
const App = function(){
	var dom=document.querySelector('#app');
	var layer = new Layer();
	dom.innerHTML = layer.tpl;
}
new App();