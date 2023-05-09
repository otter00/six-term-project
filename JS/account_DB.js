var Database_Name = 'Guide__Feedback';    
var Version = 1.0;    
var Text_Description = 'Feedback from users of this guide';    
var Database_Size = 2 * 1024 * 1024;    
var dbObj = openDatabase(Database_Name, Version, Text_Description, Database_Size);    
dbObj.transaction(function (tx) {    
    tx.executeSql('CREATE TABLE IF NOT EXISTS Feedback_Table (Phone, Email, Message)');  
});    

const insertButton = document.querySelector('#feedback__send');
insertButton.addEventListener('click', ()=>{
    var phone = document.getElementById("tbPhone").value;    
    var email = document.getElementById("tbEmail").value;    
    var message = document.getElementById("tbMessage").value;    
    dbObj.transaction(function (tx) {    
        tx.executeSql('insert into Feedback_Table(Phone, Email, Message) values(' + phone + ',"' + email + '","' + message + '")');    
    }); 
});  