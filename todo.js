let todo=[];
req=prompt("enter your request");
while(1)
{
    if(req=="quit"){
        console.log("you are quiting");
        break;
    }
    if(req=="view")
    {
        for(let i=0;i<todo.length;i++)
        {
            console.log(todo[i]);
        }
    }
    else if(req=="add")
    {
        console.log("enter task you wanna add");
        newReq=prompt("enter your request");
        todo.push(newReq);
        console.log("added");
        
    } 
 
    else if(req=="del")
    {
let index=prompt("enter index to be removed");
todo.splice(index,1);
console.log("Sucess");
    }
    req=prompt("enter request");
}
