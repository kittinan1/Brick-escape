var i = 0;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
	
		this.isOver = false;
		this.timeSec = 0;
		this.timeMin = 0;
		this.scores = 0;
		
		
        this.brick = new Brick(this);
        this.brick.setPosition( new cc.Point( 400, 300 ) );
	
		this.wallpaper = new Wallpaper();
		this.wallpaper.setPosition(new cc.Point( 400, 300 ) );
		
		this.gameover = new Gameover();
		this.gameover.setPosition( new cc.Point( 400, 300 ) );
		
		this.circle = new Circle(this);
		this.circle.randomPosition();
	
		this.addChild( this.wallpaper );
		this.addChild( this.brick  );
		this.addChild( this.circle);
		
        this.brick.scheduleUpdate();
		this.circle.scheduleUpdate();
		
        this.setKeyboardEnabled( true );
		
		this.createCircle();
		
		this.schedule(this.createCircle,10,Infinity,10);
		
		this.schedule(this.timeSecCounter,1);
		this.schedule(this.timeMinCounter,60);
		this.schedule(this.scoresCounter,1);
		
		this.time = cc.LabelTTF.create(this.timeMin+" : " + this.timeSec,'Arial',50);
		this.time.setPosition( new cc.Point(100, 550));
		this.time.setFontFillColor(new cc.Color3B(0, 51, 102));
		this.addChild(this.time);
		
		this.scoreLable = cc.LabelTTF.create("Scores : "+ this.scores,'Arial',50);
		this.scoreLable.setPosition( new cc.Point(600,550));
		this.scoreLable.setFontFillColor(new cc.Color3B(0,51,102));
		this.addChild(this.scoreLable);
		
		this.scheduleUpdate();
    },
	
	update: function(dt) {
		this.time.setString(this.timeMin+" : " + this.timeSec);
		this.scoreLable.setString("Scores : "+ this.scores);
		this.scheduleUpdate();
		if(this.isOver ==true){
			this.timeOver = cc.LabelTTF.create("Your scores is "+this.scores,'Arial',50);
			this.timeOver.setPosition( new cc.Point(400, 150));
			this.timeOver.setFontFillColor(new cc.Color3B(0, 0, 0));
			this.addChild(this.timeOver);
			
				this.unscheduleAllCallbacks();
		}
	 },
	
	timeSecCounter: function() {
		if(this.timeSec!=59){
			this.timeSec++;
		}
		else if(this.timeSec==59){
			this.timeSec =0;
		}
	},
	timeMinCounter: function(){
		this.timeMin++;
	},
	scoresCounter: function(){
		this.scores+=50;
	},
	
	createCircle: function() {
		this.circleArr = new Array();
		for(var i =1 ; i>0; i--){
			this.circleArr[i] = new Circle(this);
			this.circleArr[i].randomPosition();
			this.addChild( this.circleArr[i] );
			this.circleArr[i].scheduleUpdate();
			
		}
		
	},
	
       onKeyDown: function( e ) {
		if (e == cc.KEY.up)
			this.brick.switchDirection(1);
		else if (e == cc.KEY.right)
			this.brick.switchDirection(2);
		else if (e == cc.KEY.left)
			this.brick.switchDirection(3);
		else if (e == cc.KEY.down)
			this.brick.switchDirection(4);
		else if (e == 32)
			location.reload();
    },
	
	onKeyUp: function( e ){
		if (e == cc.KEY.up)
			this.brick.switchDirectionRelease(1);
		else if (e == cc.KEY.right)
			this.brick.switchDirectionRelease(2);
		else if (e == cc.KEY.left)
			this.brick.switchDirectionRelease(3);
		else if (e == cc.KEY.down)
			this.brick.switchDirectionRelease(4);
	
	},
	
	randomNumber: function(lo,hi){
		 return parseInt((Math.random()*(hi-lo+1))+lo);
	}
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

