///nested loop
for (let i =2; i<=2; i ++){
    for (let j =1; j<=3; j ++){
        console.log(i,j);
    }

}

///square pattern
for (let i = 1; i <=4; i ++){
    let row = "";
    for (let j = 1; j <=4; j ++){
        row += "* ";
    }
    console.log(row);
}

///number pattern
for (let i = 1; i <=5; i ++){
    let row = "";
    for (let j = 1; j <=i; j ++){
        row += j + " ";
    }   
    console.log(row);
}

/// Increasing Triangle 
for (let i = 1; i <=5; i ++){
    let row = "";   
    for (let j = 1; j <=i; j ++){
        row += "* ";
    }           
    console.log(row);
}

/// Decreasing Triangle
for (let i = 5; i >=1; i --){
    let row = "";       
    for (let j = 1; j <=i; j ++){
        row += "* ";
    }   
    console.log(row);
}

///Multiplication Table 
for (let i = 1; i <=10; i ++){
    let row = "";
    for (let j = 1; j <=10; j ++){
        row += (i * j) + " ";
    }   
    console.log(row);
}
    
