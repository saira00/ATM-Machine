import inquirer from "inquirer" ;

let myBlance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
             name: "q1",
             message: "enter your pin",
             type : "number"
        }
    ]
);

if (pinAnswer.q1 === myPin) {
    console.log("correct pin code!!!");  

    let oprationAns = await inquirer.prompt(
        [
            {
                name:"opration",
                message:"please select option",
                type:"list",
                choices:["withdraw","check blance"]
            }
        ]
    );
    console.log(oprationAns);

    if (oprationAns.opration === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    massage: "enter your amount",
                    type: "number"
                }
            ]
        );
        myBlance -= amountAns.amount;

        console.log("your remaining blance is: " + myBlance)

    } else if (oprationAns.opration === "check blance"){
            console.log("your blance is:" + myBlance)
    }

} 
  
else {
    console.log("incorrect pin number");
}