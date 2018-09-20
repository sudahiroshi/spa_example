class DB {
    constructor() {
        this.maindb = {};
    }

    get( key ) {
        console.log( "key=>" + key );
        return this.maindb[key];
    }

    getAll() {
        return this.maindb;
    }
    put( key, value ) {
        this.maindb[key] = value;
        console.log( this.maindb );
    }
}