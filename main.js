class Main {
    constructor() {
        this.pages = new Array();
        this.db = new DB();
        this.pages.push( new Q( "page1", this.db ) );
        this.pages.push( new A( "page2", this.db ) );

        for( let page of this.pages ) {
            page.gui_setup();
        }

        let nl = new nylon();
        nl.on( "page", (event,data) => {
            for( let page of this.pages ) {
                page.display( data.page );
            }
        });

        new nylon().emit('page',{"page":"page1"});
    }
}