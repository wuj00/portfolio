window.onload = function() {

// 1st button
	var btn1 = document.querySelector( '.btn1' );

	var btnFront1 = btn1.querySelector( '.btn-front1' ),
		btnYes1 = btn1.querySelector( '.btn-back1 .yes1' ),
		btnNo1 = btn1.querySelector( '.btn-back1 .no1' );

	btnFront1.addEventListener( 'click', function( event ) {
		console.log("whaaaaa");
		var mx = event.clientX - btn1.offsetLeft,
			my = event.clientY - btn1.offsetTop;

		var w = btn1.offsetWidth,
			h = btn1.offsetHeight;

		var directions = [
			{ id: 'top', x: w/2, y: 0 },
			{ id: 'right', x: w, y: h/2 },
			{ id: 'bottom', x: w/2, y: h },
			{ id: 'left', x: 0, y: h/2 }
		];

		directions.sort( function( a, b ) {
			return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
		} );

		btn1.setAttribute( 'data-direction', directions.shift().id );
		btn1.classList.add( 'is-open' );
	} );

	btnYes1.addEventListener( 'click', function( event ) {
		btn1.classList.remove( 'is-open' );
	} );

	btnNo1.addEventListener( 'click', function( event ) {
		btn1.classList.remove( 'is-open' );
	} );

	function distance( x1, y1, x2, y2 ) {
		var dx = x1-x2;
		var dy = y1-y2;
		return Math.sqrt( dx*dx + dy*dy );
	}


// 2nd button

	var btn2 = document.querySelector( '.btn2' );

	var btnFront2 = btn2.querySelector( '.btn-front2' ),
		btnYes2 = btn2.querySelector( '.btn-back2 .yes2' ),
		btnNo2 = btn2.querySelector( '.btn-back2 .no2' );

	btnFront2.addEventListener( 'click', function( event ) {
		console.log("whyyyyyy");
		var mx = event.clientX - btn2.offsetLeft,
			my = event.clientY - btn2.offsetTop;

		var w = btn2.offsetWidth,
			h = btn2.offsetHeight;

		var directions = [
			{ id: 'top', x: w/2, y: 0 },
			{ id: 'right', x: w, y: h/2 },
			{ id: 'bottom', x: w/2, y: h },
			{ id: 'left', x: 0, y: h/2 }
		];

		directions.sort( function( a, b ) {
			return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
		} );

		btn2.setAttribute( 'data-direction', directions.shift().id );
		btn2.classList.add( 'is-open' );
	} );

	btnYes2.addEventListener( 'click', function( event ) {
		btn2.classList.remove( 'is-open' );
	} );

	btnNo2.addEventListener( 'click', function( event ) {
		btn2.classList.remove( 'is-open' );
	} );

	function distance( x1, y1, x2, y2 ) {
		var dx = x1-x2;
		var dy = y1-y2;
		return Math.sqrt( dx*dx + dy*dy );
	}


// third button

	var btn3 = document.querySelector( '.btn3' );

	var btnFront3 = btn3.querySelector( '.btn-front3' ),
		btnYes3 = btn3.querySelector( '.btn-back3 .yes3' ),
		btnNo3 = btn3.querySelector( '.btn-back3 .no3' );

	btnFront3.addEventListener( 'click', function( event ) {
		console.log("whyyyyyy");
		var mx = event.clientX - btn3.offsetLeft,
			my = event.clientY - btn3.offsetTop;

		var w = btn3.offsetWidth,
			h = btn3.offsetHeight;

		var directions = [
			{ id: 'top', x: w/2, y: 0 },
			{ id: 'right', x: w, y: h/2 },
			{ id: 'bottom', x: w/2, y: h },
			{ id: 'left', x: 0, y: h/2 }
		];

		directions.sort( function( a, b ) {
			return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
		} );

		btn3.setAttribute( 'data-direction', directions.shift().id );
		btn3.classList.add( 'is-open' );
	} );

	btnYes3.addEventListener( 'click', function( event ) {
		btn3.classList.remove( 'is-open' );
	} );

	btnNo3.addEventListener( 'click', function( event ) {
		btn3.classList.remove( 'is-open' );
	} );

	function distance( x1, y1, x2, y2 ) {
		var dx = x1-x2;
		var dy = y1-y2;
		return Math.sqrt( dx*dx + dy*dy );
	}

// fourth button

	var btn4 = document.querySelector( '.btn4' );

	var btnFront4 = btn4.querySelector( '.btn-front4' ),
		btnYes4 = btn4.querySelector( '.btn-back4 .yes4' ),
		btnNo4 = btn4.querySelector( '.btn-back4 .no4' );

	btnFront4.addEventListener( 'click', function( event ) {
		console.log("whyyyyyy");
		var mx = event.clientX - btn4.offsetLeft,
			my = event.clientY - btn4.offsetTop;

		var w = btn4.offsetWidth,
			h = btn4.offsetHeight;

		var directions = [
			{ id: 'top', x: w/2, y: 0 },
			{ id: 'right', x: w, y: h/2 },
			{ id: 'bottom', x: w/2, y: h },
			{ id: 'left', x: 0, y: h/2 }
		];

		directions.sort( function( a, b ) {
			return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
		} );

		btn4.setAttribute( 'data-direction', directions.shift().id );
		btn4.classList.add( 'is-open' );
	} );

	btnYes4.addEventListener( 'click', function( event ) {
		btn4.classList.remove( 'is-open' );
	} );

	btnNo4.addEventListener( 'click', function( event ) {
		btn4.classList.remove( 'is-open' );
	} );

	function distance( x1, y1, x2, y2 ) {
		var dx = x1-x2;
		var dy = y1-y2;
		return Math.sqrt( dx*dx + dy*dy );
	}


};
