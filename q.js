class Q extends Normal {
    constructor( page_name ) {
        super( page_name );
        this.button1 = document.querySelector( '#kaitou' );
        console.log( this.button1 );
    }

    gui_setup() {
        this.button1.addEventListener( 'click', () => {
            let answer = new Array();
            answer.push( document.querySelector('#input1').value );
            answer.push( document.querySelector('#input2').value );
            new nylon().emit( "page", { "page": "page2", "value": answer} );
        });
    }
}