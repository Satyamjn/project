// let firstName=prompt("enter your name")
// let age=prompt("enter your age")

// const element=<h1>my name is {firstName} and my age is {age}  </h1>
//<> --> react fragment
// const element=<>
//     <p>hello mitron!!!</p> <p>nice to meet you</p>
//     </>





// const element=(

//     <div>

//         <p>hello word</p>
//         <p>mai kyu aya</p>
//     </div>
// )

// let rootE1 =document.getElementById("root");
// ReactDOM.render(element,rootE1);

// let first_Name=prompt("Enter your Name");
// let age=prompt("Enter your age");
// let rollNum=prompt("enter your rollnum");

// let element1=(
// <>
//     <h1>My name is {first_Name.toUpperCase()}</h1>
//     <h1>My age is {age}</h1>
//     <h1>My rollNum is {rollNum}</h1>
// </>
// )
//=====================
//conditional Rendering
// let isLogeedIn=true;

// const element=(
//     <>
//     <h1>hello {isLogeedIn?"DHONI":"kon hai bai tu"}</h1>
//     </>
// )

//=======================================

// const toggle="light"
// const element=(
//     <>
//     <h1 className={toggle}>hello </h1>
//     </> 
// )


// let name = prompt("Enter your name")

// let isLogeedIn = true
// if (isLogeedIn) {
//     alert("welcom to our company")
// }
// else {
//     console.log("please login first");
// }



// const element = (
//     <div>
//         <h1>hello {isLogeedIn ? name : "user"}</h1>
//         {(isLogeedIn) ? <p>enterd as  {prompt("please enter your designation")}</p> : ""}


//     </div>

// )

// function hendleClick(){
//     alert("button clicked")
// }

// const element=(<div>
//     <button onClick={hendleClick}>click me</button>
// </div>)

// handling list---- 

//hame sabko alg key diya hai array ke adar ke tag dena hai to  hame uniqe ke dena hai
// let list=(
//     <div>

//         {[<p key={1}>item 1</p>,<p key={2}>item 2</p>,<p key={3}>item 3</p>,<p key={4}>item 4</p>]}
//     </div>
// )



// let names=['virat','dhoni','bumrah']
// let list=(
//     <div>
//         {names.map((n)=>{
//             return <li key={n}>{n}</li>
//         })}

//     </div>
// )

//ye react ka component  hai ek function first latter caopital rahega
// 
// function Card() {//ye ek react ka componrent hai

//     let title = "Zomato"
//     let Description = "to order to food online"
//     return (
//         <div>
//             <h1>{title}</h1>
//             <p>{Description}</p>
//             <h1>Title</h1>
//             <p>Description</p>
//         </div>)
// }


// let jsx = (
//     <div>
    
//         <Card />
//         <Card />
//         <Card />
//         <Card />

//     </div>
// )
