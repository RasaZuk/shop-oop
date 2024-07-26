export class Layout {
    constructor() {
        this.render();
    }


    header() {
        const HTML = `
        <header class="container">
            <div class="row">
                <div class="col">
                    <img src="#" alt="Logo">
                    <nav>
                        <a href="./">Home</a>
                        <a href="./services">Services</a>
                        <a href="./team">Team</a>
                        <a href="./contact-us">Contact us</a>
                    </nav> 
                </div>
            </div>    
        </header>`;
        return HTML;
    }

    main() {
        const HTML = `
        <main class="container">
            <section class="row">
            <h1 class="col-12 main-title">Pirmas posukis</h1>
            </section>
            <section class="row">
                <div class="col-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis asperiores facilis autem necessitatibus cupiditate.</div>
            </section>
            <section class="row">
                <div class="col-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis asperiores facilis autem necessitatibus cupiditate.</div>
                <div class="col-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis asperiores facilis autem necessitatibus cupiditate.</div>
            </section>
            <section class="row">
                <div class="col-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis asperiores facilis autem necessitatibus cupiditate.</div>
                <div class="col-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis asperiores facilis autem necessitatibus cupiditate.</div>
                <div class="col-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis asperiores facilis autem necessitatibus cupiditate.</div>
                <div class="col-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis asperiores facilis autem necessitatibus cupiditate.</div>
            </section>
        </main>`;
        return HTML;
    }

    footer() {
        const HTML = `<footer class="container">&copy; Copyright 2024</footer>`;
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);
    }
}