/**
 * Created by guoguo on 7/8/15.
 */

function Log(){
   this.timestamp = function () {
        var now = new Date();
        var month = now.getMonth();
        var day = now.getDay();
        var hours = now.getHours();
        var minuts = now.getMinutes();
        var seconds = now.getSeconds();
        var milliseconds = now.getMilliseconds();

        return month+"-"+day+" "+hours+":"+minuts+":"+seconds+"."+milliseconds;
    };

    this.i = function(TAG, msg){
        console.log(this.timestamp()+"I/"+TAG+": "+msg);
    };

    v = function(TAG, msg){
        console.log(this.timestamp()+"V/"+TAG+": "+msg);
    };

    w = function(TAG, msg){
        console.log(this.timestamp()+"W/"+TAG+": "+msg);
    };

    d = function(TAG, msg){
        console.log(this.timestamp()+"D/"+TAG+": "+msg);
    };

    e = function(TAG, msg){
        console.log(this.timestamp()+"E/"+TAG+": "+msg);
    }
};

Log.i = function(TAG, msg){
    console.log(this.timestamp()+"I/"+TAG+": "+msg);
};
Log.timestamp = function () {
    var now = new Date();
    var month = now.getMonth();
    var day = now.getDay();
    var hours = now.getHours();
    var minuts = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();

    return month+"-"+day+" "+hours+":"+minuts+":"+seconds+"."+milliseconds+" ";
};