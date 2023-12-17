class BankAccount{
    constructor(){
        this.balance=0;
    }

    deposit(amount){
        if (amount > 0) {
            this.balance += amount
            console.log(`Deposit Successfully.current Balance is ${this.balance}`);
        } else {
            console.log("Invalid amount");
        }
    }

    withdraw(amount){
        if(amount>0){
            if(this.balance >= amount){
                this.balance -= amount;
                console.log(`Widthdraw Successfully and current Balance is ${this.balance}`);
            } else {
                console.log("Insufficient Balance");
            }
        } else {
            console.log("Invalid withdraw amount");
        }
    }
    checkBalance() {
        console.log(`Current balance: ${this.balance}`);
    }
}

const myAccount = new BankAccount('Mithun S',1000);

myAccount.checkBalance();
myAccount.deposit(500);
myAccount.deposit(-50);
myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);
myAccount.checkBalance();