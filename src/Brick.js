var Brick = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'Image/Brick.png' );
        this.direction = Brick.DIR.STILL;
		this.isUp = false;
		this.isRight = false;
		this.isLeft = false;
		this.isDown = false;
    },
    update: function( dt ) {	
	var pos = this.getPosition();
	if (this.isUp ){
		if ( pos.y < screenHeight-35  ) {
        	this.setPosition( new cc.Point( pos.x, pos.y + 10 ) );
		} else {
			this.setPosition( new cc.Point( pos.x, pos.y ) );
		}
	}
	if (this.isRight ){
		if ( pos.x < screenWidth-35  ) {
			this.setPosition( new cc.Point( pos.x + 10, pos.y ) );
		} else {
			this.setPosition( new cc.Point( pos.x,pos.y ) );
		}
	}
	if ( this.isDown ){
		if ( pos.y > 35 ) {
        	this.setPosition( new cc.Point( pos.x, pos.y - 10 ) );
		} else {
			this.setPosition( new cc.Point( pos.x, pos.y ) );
		}
	}
	if ( this.isLeft ){
		if ( pos.x > 35 ) {
        	this.setPosition( new cc.Point( pos.x - 10, pos.y ) );
		} else {
			this.setPosition( new cc.Point( pos.x, pos.y ) );
		}
	}	
	},
	
		
    switchDirection: function(direction) {
	if ( direction == 1 ) {
		this.isUp = true;
        this.setRotation( 0 );
	}
	else if( direction == 2 ){
		this.isRight = true;
        this.setRotation( 90 );
	}
	else if( direction == 4 ){
		this.isDown = true;
		this.setRotation( 180 );
    }
	else if( direction == 3 ){
		this.isLeft = true;
		this.setRotation( 270 );
}

	},
	
	switchDirectionRelease: function(direction) {
		if ( direction == 1 )
			this.isUp = false;
		else if ( direction == 2)
			this.isRight = false;
		else if (direction == 4)
			this.isDown = false;
		else if (direction == 3)
			this.isLeft = false;
	}
});

Brick.DIR = {
    UP: 1,
    RIGHT: 2,
	LEFT: 3,
	DOWN: 4
};