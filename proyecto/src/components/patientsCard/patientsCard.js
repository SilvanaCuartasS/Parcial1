class Item extends HTMLElement {
    constructor() {
      super();
        this.attachShadow({ mode: "open" });
        this.state = false;
    }

    static get observedAttributes() {
        return ["name", "type", "date", "syntoms", "state"];
      }
  
      attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
          this[propName] = propName === "state"? newValue === "true" : newValue ; 
          this.render();
        }
      }

    connectedCallback() {
      this.render();
    }

    stateValue() {
      this.state = !this.state;
      this.render();
  }

    render() {
     
        this.shadowRoot.innerHTML = `
      
        <p>${this.name}</p>
        <p>${this.type}</p>
        <p>${this.date}</p>
        <p>${this.syntoms}</p>
        <p>${!this.state ? 'Pendiente' : 'Atendido'}</p>
        <input type="checkbox" ${this.state ? "checked" : ""} class="task-checkbox"> 
       
      `;
      this.shadowRoot.querySelector('.task-checkbox').addEventListener('change', () => this.stateValue());
    }
    
  }
  
  customElements.define("task-item", Item);
  export default Item; 