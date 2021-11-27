const EventEmitter = require("events");
const sendVerificationEmail = require("./send-verification-email");

const sendverificationmail = require("./send-verification-email");
const sendwelcomemail = require("./send-welcome-mail");



const eventEmitter =  new EventEmitter();



const userRegisterd = () =>{
    eventEmitter.on("userRegisterd", sendVerificationEmail)
    eventEmitter.on("userRegisterd", sendwelcomemail)

    eventEmitter.emit("userRegisterd",{ name :"mahesh vaitla"});
}

eventEmitter.on("name called", function (){
    console.log("Listener 1")
});

eventEmitter.on("name called", function (){
    console.log("Listener 2")
});

eventEmitter.emit("name called");
userRegisterd();