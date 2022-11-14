class Message{
    constructor(autName,textMessage){
        this.autName = autName;
        this.textMessage = textMessage;
    }

    gettime(){
        let nowDate = new Date();
        return `${nowDate.getHours()}:${nowDate.getMinutes()}`

    }

    toString(){
        return `${this.gettime()}\n${this.autName}:\n${this.textMessage}`
    }
}

class Messenger{
    list = []

    send(name,message){
        let text = new Message(name,message);
        this.list.push(text)
      
         
    }

    show_history(){
        this.list.forEach(item=>{
            console.log(item.toString());
        }) 
    } 
}


let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj');
messenger.send('Məryəm', 'İkinci mesaj');
messenger.show_history()




