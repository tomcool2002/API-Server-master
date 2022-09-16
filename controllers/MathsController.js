const path = require("path");
const fs = require("fs");

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return m * factorial(n - 1);
}
function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}
function findPrime(n) {
  let primeNumber = 0;
  for (let i = 0; i < n; i++) {
    primeNumber++;
    while (!isPrime(primeNumber)) {
      primeNumber++;
    }
  }
  return primeNumber;
}

module.exports = class MathsController extends require("./Controller") {
  constructor(HttpContext) {
    super(HttpContext);
  }

  get() {
    if (this.HttpContext.path.queryString == "?") {
      //send helppage
      let helpPagePath = path.join(
        process.cwd(),
        "wwwroot/helpPages/mathsServiceHelp.html"
      );
      let content = fs.readFileSync(helpPagePath);
      this.HttpContext.response.content("text/html", content);
    } else {
      if (this.HttpContext.path.params.op) {
        let x = Number(this.HttpContext.path.params.x);
        let y = Number(this.HttpContext.path.params.y);
        let n = Number(this.HttpContext.path.params.n);
        let paramsCount = Object.keys(this.HttpContext.path.params).length;
          if(this.HttpContext.path.params.op == " "){ // addition
            if (isNaN(x)) {
                this.HttpContext.path.params.error =
                  "parameter 'x' is not an number";
              } 
              else if(x ===null){
                this.HttpContext.path.params.error =
                "parameter 'x' is null";
              }
              else if(y ===null){
                this.HttpContext.path.params.error =
                "parameter 'y' is null";
              }
              else if(isNaN(y)) {
                this.HttpContext.path.params.error =
                  "parameter 'y' is not an number";
              }
              else if(paramsCount > 3){
                this.HttpContext.path.params.error =
                "there is too much parameter";
              }
              else{
                this.HttpContext.path.params.value = x + y;                
              }
          }
          else if(this.HttpContext.path.params.op == "-"){ // soustraction
            if (isNaN(x)) {
                this.HttpContext.path.params.error =
                  "parameter 'x' is not an number";
              } 
              else if(x ===null){
                this.HttpContext.path.params.error =
                "parameter 'x' is null";
              }
              else if(y ===null){
                this.HttpContext.path.params.error =
                "parameter 'y' is null";
              }
              else if(isNaN(y)) {
                this.HttpContext.path.params.error =
                  "parameter 'y' is not an number";
              }
              else if(paramsCount > 3){
                this.HttpContext.path.params.error =
                "there is too much parameter";
              }
              else{
                this.HttpContext.path.params.value = x - y;                
              }
          }
          else if(this.HttpContext.path.params.op == "*"){ // multiplication
            if (isNaN(x)) {
                this.HttpContext.path.params.error =
                  "parameter 'x' is not an number";
              } 
              else if(x ===null){
                this.HttpContext.path.params.error =
                "parameter 'x' is null";
              }
              else if(y ===null){
                this.HttpContext.path.params.error =
                "parameter 'y' is null";
              }
              else if(isNaN(y)) {
                this.HttpContext.path.params.error =
                  "parameter 'y' is not an number";
              }
              else if(paramsCount > 3){
                this.HttpContext.path.params.error =
                "there is too much parameter";
              }
              else{
                this.HttpContext.path.params.value = x * y;                
              }
          }
          else if(this.HttpContext.path.params.op == "/"){ // division
            if (isNaN(x)) {
                this.HttpContext.path.params.error =
                  "parameter 'x' is not an number";
              } 
              else if(x ===null){
                this.HttpContext.path.params.error =
                "parameter 'x' is null";
              }
              else if(y ===null){
                this.HttpContext.path.params.error =
                "parameter 'y' is null";
              }
              else if(isNaN(y)) {
                this.HttpContext.path.params.error =
                  "parameter 'y' is not an number";
              }
              else if(paramsCount > 3){
                this.HttpContext.path.params.error =
                "there is too much parameter";
              }
              else{
                this.HttpContext.path.params.value = x / y;                
              }
          }
          else if(this.HttpContext.path.params.op == "%"){ // modulo
            if (isNaN(x)) {
                this.HttpContext.path.params.error =
                  "parameter 'x' is not an number";
              } 
              else if(x ===null){
                this.HttpContext.path.params.error =
                "parameter 'x' is null";
              }
              else if(y ===null){
                this.HttpContext.path.params.error =
                "parameter 'y' is null";
              }
              else if(isNaN(y)) {
                this.HttpContext.path.params.error =
                  "parameter 'y' is not an number";
              }
              else if(paramsCount > 3){
                this.HttpContext.path.params.error =
                "there is too much parameter";
              }
              else{
                this.HttpContext.path.params.value = x % y;                
              }
          }
          else if(this.HttpContext.path.params.op == "!"){ // factoriel
            if (!isInt(n)) {
                this.HttpContext.path.params.error =
                  "parameter 'n' is not an integer";
              } 
              else if(n ===null){
                this.HttpContext.path.params.error =
                "parameter 'n' is null";
              }
              else if(paramsCount > 2){
                this.HttpContext.path.params.error =
                "there is too much parameter";
              }
              else {
                this.HttpContext.path.params.value = factorial(n);
              }
          }
          else if(this.HttpContext.path.params.op == "p"){ // is prime
            if (!isInt(n)) {
                this.HttpContext.path.params.error =
                  "parameter 'n' is not an integer";
              } 
              else if(n ===null){
                this.HttpContext.path.params.error =
                "parameter 'n' is null";
              }
              else if(paramsCount > 2){
                this.HttpContext.path.params.error =
                "there is too much parameter";
              }
              else {
                this.HttpContext.path.params.value = isPrime(n);
              }
          }
          else if(this.HttpContext.path.params.op == "np"){ // find prime
            if (!isInt(n)) {
                this.HttpContext.path.params.error =
                  "parameter 'n' is not an integer";
              } 
              else if(n ===null){
                this.HttpContext.path.params.error =
                "parameter 'n' is null";
              }
              else if(paramsCount > 2){
                this.HttpContext.path.params.error =
                "there is too much parameter";
              }
              else {
                this.HttpContext.path.params.value = findPrime(n);
              }
          }
          else{
            this.HttpContext.path.params.error =
            "parameter 'op' is not an operation";
          }

        this.HttpContext.response.JSON(this.HttpContext.path.params);
      } else {
        this.HttpContext.path.params.error = "parameter 'op' is missing";
        this.HttpContext.response.JSON(this.HttpContext.path.params);
      }
    }
  }
};
