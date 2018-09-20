class Normal {
    constructor( page_name, db ) {
        //console.log( page_name );
        this.page_name = page_name;
        this.db = db;
    }

    display( name ) {
        if( this.page_name == name ) {
            document.querySelector( '#' + this.page_name ).style.display = "block";
            this.draw();
        } else {
            document.querySelector( '#' + this.page_name ).style.display = "none";
        }
    }

    gui_setup() {}

    draw() {}
}