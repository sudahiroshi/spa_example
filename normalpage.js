class Normal {
    constructor( page_name ) {
        console.log( page_name );
        this.page_name = page_name;
    }

    display( name ) {
        if( this.page_name == name ) {
            let a = document.querySelector( '#' + this.page_name );
            console.log(a);
            a.style.display = "block";
        } else {
            console.log( this.page_name );
            let b = document.querySelector( '#' + this.page_name );
            console.log(b);
            b.style.display = "none";
        }
    }

    gui_setup() {}
}