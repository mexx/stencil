
/**
 * Externs are used so these properties are not
 * mistakenly renamed. When two JS files are compiled at different
 * times, there are cerain properties that need to NOT be renamed so
 * each JS file can communicate against the known property names.
 *
 * https://developers.google.com/closure/compiler/docs/api-tutorial3
 */


/**
 * Global window.PROJECT
 * Each binding can provide it's own values to window.Ionic
 */
function components(){};
function ConfigCtrl(){};
function defineComponents(){};
function dom(){};
function DomCtrl(){};
function eventNameFn(){};
function flush(){};
function load(){};
function loadController(){};
function QueueCtrl(){};
function raf(){};
function read(){};
function write(){};
function Animation(){};
function ns(){};


/**
 * Injected Ionic
 * Passed into user's closure so it's globally available
 * to all of the user's code.
 */
function Ionic(){};
function config(){};
function controllers(){};
function create(){};
function dismiss(){};
function emit(){};
function listen(){};
function modal(){};
function overlay(){};
function present(){};
function theme(){};


/**
 * Config API
 * Each binding provides its own Config
 */
function get(){};
function getBoolean(){};
function getNumber(){};


/**
 * Proxy Element
 * Properties set on the proxy element
 */
function $el(){};
function $emit(){};
function $instance(){};
function listeners(){};
function $meta(){};
function $(){};


/**
 * Component Instance
 * Methods set on the user's component
 */
function componentWillLoad(){};
function componentDidLoad(){};
function componentWillUpdate(){};
function componentDidUpdate(){};
function componentDidUnload(){};
function hostData(){};
function render(){};


/**
 * Renderer data properties
 * Properties used by the renderer and user's hyperscript
 */
function attrs(){};
function on(){};
function props(){};


/**
 * Compiled hyperscript props
 * Already short, just don't rename them
 */
function e(){};
function t(){};
function h(){};
function c(){};
function p(){};
function a(){};
function o(){};
function s(){};
function k(){};
function m(){};
function n(){};
function l(){};


/**
 * Web Standards
 * Window and document stuff closure doesn't know not to rename yet
 */
function attachShadow(){};
function attributeChangedCallback(){};
function composed(){};
function connectedCallback(){};
function customElements(){};
function define(){};
function didTimeout(){};
function disconnectedCallback(){};
function host(){};
function observedAttributes(){};
function passive(){};
function requestIdleCallback(){};
function shadowRoot(){};
function timeRemaining(){};
