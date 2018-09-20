class A extends Normal {
    draw() {
        let answer = this.db.get( "answer" );

        let ans1 = answer[0];
        let ans2 = answer[1];

        if( ans1 == 3 ) document.querySelector( '#maru1' ).innerHTML = "○";
        else document.querySelector( '#maru1' ).innerHTML = "☓";

        if( ans1 == 5 ) document.querySelector( '#maru2' ).innerHTML = "○";
        else document.querySelector( '#maru2' ).innerHTML = "☓";
    }
}