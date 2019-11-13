var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter();
/*  
event.on('enjoy', function(args) { 
    console.log('enjoy 事件触发', args); 
}); 
event.removeListener('enjoy', function() {
    console.log('removeListener')
})
event.once('enjoy', function(args) { 
    console.log('enjoy once 事件触发', args); 
});
setTimeout(function() { 
    event.emit('enjoy', 'args'); 
    event.emit('enjoy', 'args'); 
}, 1000); 
*/

event.on('message', console.log);

setInterval(function(){
    event.emit('message', 'foo bar');
}, 300);

setTimeout(function(){
    event.removeListener('message', console.log);
}, 1000);