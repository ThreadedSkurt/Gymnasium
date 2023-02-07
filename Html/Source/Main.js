class Myheader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header>
        <div class="navicon">
          <a href=""><img src="" alt=""></a>
          <h1>Hello world</h1>
        </div>
        <nav>
          <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
          </ul>
        </nav>
      </header>`;
    }
}

customElements.define("my-header", Myheader);

class Myfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <h1>  Hello </h1>
        </footer>
        `;
    }
}

customElements.define("my-footer", Myfooter);
