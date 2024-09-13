import '../patientsCard/patientsCard.js'
    
class TaskList extends HTMLElement {

    constructor (){
        super();
        this.attachShadow({mode: 'open'});
        this.task = [];
    }

    connectedCallback(){
        this.render();
    }


    render(){
        this.shadowRoot.innerHTML=`
        <h2>Añadir pacientes:</h2>

        <form>
            <h3>Nombre</h3>
            <input type = "text" class= "input-name" required>
            <h3>Especie</h3>
            <input type = "text" class= "input-especie" required>
            <h3>Fecha de ingreso</h3>
            <input type = "date" class= "input-date" required>
            <h3>Síntomas</h3>
            <input type = "text" class= "input-sintomas" required>
            <button>Agregar tarea</button>
            <ul class="tasks-container"></ul>
        </form>

        <h2>Pacientes pendientes:</h2>
        `
        
        const name = this.shadowRoot.querySelector('.input-name')
        const type = this.shadowRoot.querySelector('.input-especie')
        const date = this.shadowRoot.querySelector('.input-date')
        const syntoms = this.shadowRoot.querySelector('.input-sintomas')

        this.task.forEach(tasks => this.addTask(tasks))}

        addTask({ name, type, date, state }) {
        
            const tasksContainer = this.shadowRoot.querySelector('.tasks-container')
            tasksContainer.innerHTML += `
            <task-item name="${name}" type="${type}" date="${date}" state="${state}"></task-item>
            `
        }
        
    }

customElements.define('task-list',TaskList);
export default TaskList; 