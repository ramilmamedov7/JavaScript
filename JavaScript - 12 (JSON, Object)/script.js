var pr_currentYear = new Date().getFullYear();
var Person = function (pr_name, pr_surname, pr_birthday, pr_qrup, pr_currentYear) {
    this.name = "pr_name";
    this.surname = "pr_surname";
    this.qrup = pr_qrup;
    this.birthday = pr_birthday;
    this.currentYear = pr_currentYear;
    this.getYash = function () {
        return this.currentYear - this.birthday;
    }
}

var ramil = new Person("Ramil", "Mamedov", "1997", "P301", pr_currentYear);
var cavidan = new Person("Cavidan", "Talibov", "1998", "P301", pr_currentYear);
var nermin = new Person("Nermin", "Memmedova", "1995", "P303", pr_currentYear);

console.log(ramil);
console.log(pr_currentYear);
console.log(ramil.getYash());