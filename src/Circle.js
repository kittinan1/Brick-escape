//var limitBigCircle = 0;
var Circle = cc.Sprite.extend({
    ctor: function( gameLayer ) {
        this._super();
		
		this.gameLayer = gameLayer;
		this.xAxisMove = Math.random()*5;
		this.yAxisMove = Math.random()*5;
		
		this.randomSize = this.gameLayer.randomNumber(1,7);
		if(this.randomSize == 1||this.randomSize == 2||this.randomSize == 3){
        	this.initWithFile( 'Image/Circle.png' );
			this.radius=35;
		}
		else if(this.randomSize == 4||this.randomSize ==5||this.randomSize == 6 ) {
			this.initWithFile( 'Image/Circle2.png' );
			this.radius=17;
		}
		else if(this.randomSize == 7){
			this.initWithFile( 'Image/Circle3.png' );
			this.radius=105;
		
		}
	
    }, 			
	
	closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		if(this.randomSize == 1||this.randomSize == 2||this.randomSize == 3){
		return ( ( Math.abs( myPos.x - oPos.x ) <= 60 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 60 ) );
		}
			else if(this.randomSize == 4||this.randomSize ==5||this.randomSize == 6 ) {
			return ( ( Math.abs( myPos.x - oPos.x ) <= 40 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 40 ) );
		}
		else if(this.randomSize == 7){
				return ( ( Math.abs( myPos.x - oPos.x ) <= 110 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 110 ) );
		}
			
	
    },
	/*circleHitCircle: function ( obj ){
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		if( myPos != oPos){
			if(this.closTo(this.gameLayer.circle)){
				if(myPos.y > oPos.y){
					this.yAxisMove *=-1;
				}
				if (myPos.y < oPos.y ) {
					this.yAxisMove *=-1 ;
				}
				if ( myPos.x < oPos.x ) {
					this.xAxisMove *=-1 ;
				}
				if ( myPos.x > oPos.x ) {
					this.xAxisMove *=-1 ;
				}
				
			}
		}
		
	},*/
	
    update: function( dt ) {	
		this.movement(dt);
		//this.circleHitCircle(this);
		if ( this.closeTo(this.gameLayer.brick) && this.gameLayer.isOver == false ) {
			this.gameLayer.addChild( this.gameLayer.gameover );
			this.gameLayer.isOver = true;
			this.scheduleUpdate();
	
		}
	},
 
    randomPosition: function() {
		var random = this.gameLayer.randomNumber(1,2);
		if(random == 1){
			this.setPosition( new cc.Point( Math.random()*150+100, Math.random()*300 +200 ) );
		}
		else if(random == 2){
			this.setPosition( new cc.Point( Math.random()*150+500, Math.random()*300 +200 ) );
		}
    },
	movement: function( dt ){
		var pos = this.getPosition();
		
	if(!this.gameLayer.isOver){
			if ( pos.y > screenHeight-this.radius) {
				this.yAxisMove *=-1 ;
			}
			if ( pos.y < this.radius ) {
				this.yAxisMove *=-1 ;
			}
			if ( pos.x < this.radius ) {
				this.xAxisMove *=-1 ;
			}
			if ( pos.x > screenWidth-this.radius ) {
				this.xAxisMove *=-1 ;
			}
		
       	this.setPosition( new cc.Point( pos.x+this.xAxisMove, pos.y + this.yAxisMove ) );
	}
	
		
    }
});	