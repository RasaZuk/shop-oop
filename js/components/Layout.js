export class Layout {
    constructor() {
        this.render();
    }


    header() {
        const HTML = `
        <header class="container">
            <div class="row">
                <div class="col-12">
                    <img src="#" alt="Logo">
                    <nav style="display:inline-block;" class="hidden visible-sm">
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
                <div class="col-10 col-sm-8">TarpasA</div>
                <div class="col-1 m-1 m-sm-3">TarpasB</div>
            </section>
            <section class="row">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-12">Pirmas posukis</div>
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">Pirmas posukis</div>
                <div class="col-6 col-lg-4 col-xl-3">Antras posukis</div>
                <div class="col-6 col-lg-4 col-xl-3">Antras posukis</div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-1">Trecias posukis</div>
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">Trecias posukis.</div>
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