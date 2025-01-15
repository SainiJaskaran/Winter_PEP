function account_name(username,initialBalance=0){
    let name = username.split(' ');
    let first_name = name[0];
    let last_name = name[name.length - 1];
    initialbalance=initialBalance;
    console.log(`Name = ${first_name} ${last_name}, Balance = ${initialbalance}`);
}
function deposit(moneyadd){
    initialbalance += moneyadd;  
    return initialbalance;  
}
function withdraw(moneyremove){
    initialbalance -= moneyremove;
    return initialbalance;
}


account_name("Jaskaran saini",500);
console.log(`Deposit = 1000, Current balance = ${deposit(1000)}`);
console.log(`Withdraw = 300, Current balance = ${withdraw(300)}`);