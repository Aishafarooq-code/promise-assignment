let balance = 10000;
let withdrawal = 7000;

let promise1 = new Promise(function(resolve, reject) {

    if (withdrawal <= balance) {
        resolve("Sufficient Balance. Withdrawal Successful");
    }
    else {
        reject("Insufficient Balance");
    }

});

promise1
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log("error");
});


let marks = 75;

let promise2 = new Promise(function(resolve, reject) {

    if (marks < 0 || marks > 100) {
        reject("Invalid Marks");
    }
    else if (marks >= 50) {
        resolve("Pass");
    }
    else {
        reject("Fail");
    }

});

promise2
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});

let promise3 = new Promise(function(resolve, reject) {

    let delivery = true;

    setTimeout(function() {

        if (delivery == true) {
            resolve("Product Delivered Successfully");
        }
        else {
            reject("Delivery Failed");
        }

    }, 3000);

});

promise3
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});

let promise4 = new Promise(function(resolve, reject) {
   resolve(10);
});

promise4
.then(function(num) {
    return num + 20;
})
.then(function(num) {
    return num * 2;
})
.then(function(num) {
    return num - 5;
})
.then(function(result) {
    console.log("Final Result:", result);
});