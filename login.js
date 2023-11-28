const users=[
    {'id':1, "name":"A" , "password" : "123"},
    {'id':2, "name":"B" , "password" : "123"},
    {'id':3, "name":"C" , "password" : "123"},
    {'id':4, "name":"D" , "password" : "123"},
]
const Home={
    Options:{
        status:0
    },
    Set :function (item) {
        this.Options.status=item;
        return true;
    },
    status:function () {
        return this.Options.status;
    },
    Run:function () {
        
    }
}
Home.Run();

function change(e) {
    Home.Set(e.target.value);
    console.log(Home);
}

function Login(event) {
    event.preventDefault();
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var result=users.filter(function(element) {
        return element.name==username && element.password==password;
    });
    if(result.length !=0) {
        document.getElementById('result').innerHTML= (`<div class="alert alert-success"> 
The data has been verified        </div> `);
        
    }
    else{
        document.getElementById('result').innerHTML= (`<div class="alert alert-danger">
The data is incorrect    </div>`);
    }
    console.log(username, password, result);
}
