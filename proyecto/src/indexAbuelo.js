import * as components from "./components/indexPadre.js"

class appContainer extends HTMLElement {

    constructor(){
        super ();
        this.attachShadow({mode: "open"});
    }

    connectedCallback (){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        
        <h1>AnimalVet</h1>
        <task-item></task-item>
        <task-list></task-list>
        `;
    }
    
};


customElements.define('app-container', appContainer);