class AlertComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<h1>${this.message}<\h1> <button type="button">Далее</button>`;
        let button = this.querySelector('button');
        console.log(button);
        button.classList.add('button');
        button.addEventListener('click', (e) => {
            this.style.display = "none";
        });
    }

    disconnectedCallback() {}

    static get observedAttributes() {
        return ['type', 'message'];
    }

    attributeChangedCallback(name, prevVal, currVal) {
        console.log(currVal);
        if (name == 'message') {
            this.message = currVal;
        } else if (name == 'type') {
            if (currVal == 'error') {
                this.style.color = '#721c24'
                this.style.backgroundColor = '#f8d7da';
            } else if (currVal == 'info') {
                this.style.color = '#856404';
                this.style.backgroundColor = '#fff3cd';
            } else if (currVal == 'success') {
                this.style.color = '#155724';
                this.style.backgroundColor = '#d4edda';
            }
        }
    }
}

customElements.define('alert-component', AlertComponent);