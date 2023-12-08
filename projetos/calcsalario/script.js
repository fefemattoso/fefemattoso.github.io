// function inss(salario) {
//     if (salario < 1320.01)
//         return salario * 7.5 / 100;
//     else if (salario < 2571.30)
//         return salario * 9 / 100;
//     else if (salario < 3856.95)
//         return salario * 12 / 100;
//     else if (salario < 7507.49)
//         return salario * 14 / 100;
//     else
//         return 1051.05;
// }

// function irrf(salario) {
//     if (salario < 1903.99)
//         return 0;
//     else if (salario < 2826.66)
//         return salario * 7.5 / 100 - 142.8;
//     else if (salario < 3751.06)
//         return salario * 15 / 100 - 354.8;
//     else if (salario < 4664.69)
//         return salario * 22.5 / 100 - 636.13;
//     else
//         return salario * 27.5 / 100 - 869.36;
// }

// //Testando as funções:
// let salario = 1000;
// let inss = inss(salario);
// let salarioBase = salario - inss;
// let irrf = irrf(salarioBase);
// let salarioLiquido = salarioBase - irrf;

// console.log("Salário: " + salario);
// console.log("INSS: " + inss);
// console.log("Salário Base: " + salarioBase);
// console.log("IRRF: " + irrf);
// console.log("Salário Líquido: " + salarioLiquido);



class Salario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
      this.inss = this.calcINSS();
      this.salarioBase = this.salario - this.inss;
      this.irrf = this.calcIRRF();
      this.salarioLiquido = this.salarioBase - this.irrf;
    }

    calcINSS() {
      if (this.salario < 1320.01)
        return this.salario * 7.5 / 100;
      else if (this.salario < 2571.30)
        return this.salario * 9 / 100;
      else if (this.salario < 3856.95)
        return this.salario * 12 / 100;
      else if (this.salario < 7507.49)
        return this.salario * 14 / 100;
      else
        return 1051.05;
    }

    calcIRRF() {
      if (this.salario < 1903.99)
        return 0;
      else if (this.salario < 2826.66)
        return this.salario * 7.5 / 100 - 142.8;
      else if (this.salario < 3751.06)
        return this.salario * 15 / 100 - 354.8;
      else if (this.salario < 4664.69)
        return this.salario * 22.5 / 100 - 636.13;
      else
        return this.salario * 27.5 / 100 - 869.36;
    }

    showHTML() {
      return `
        <div class="card">
          <h2>${this.nome}</h2>
          <p>Salário: ${this.salario.toFixed(2)}</p>
          <p>INSS: ${this.inss}</p>
          <p>Salário Base: ${this.salarioBase.toFixed(2)}</p>
          <p>IRRF: ${this.irrf.toFixed(2)}</p>
          <p>Salário Líquido: ${this.salarioLiquido.toFixed(2)}</p>
          <button class="delete-button" onclick="deleteCard(this)">X</button>
        </div>
      `;
    }
  }

const obj1 = new Salario('Fefê', 18000);
const obj2 = new Salario('Lulu', 6666);
const obj3 = new Salario('Cast', 10000);

  console.log(obj1);
  console.log(obj1.showHTML());
  console.log(obj2);
  console.log(obj2.showHTML());
  console.log(obj3);
  console.log(obj3.showHTML());

  const main = document.getElementById('card-container');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  div1.innerHTML = obj1.showHTML();
  div2.innerHTML = obj2.showHTML();
  div3.innerHTML = obj3.showHTML();

  main.appendChild(div1);
  main.appendChild(div2);
  main.appendChild(div3);

  function addCard() {
    const nome = prompt("Digite o nome:");
    const salario = parseFloat(prompt("Digite o salário:"));
    if (!isNaN(salario) && nome) {
      const calculator = new Salario(nome, salario);
      const cardHTML = calculator.showHTML();
      const cardContainer = document.getElementById("card-container");
      cardContainer.innerHTML += cardHTML;
    } else {
      alert("Nome e/ou salário inválidos. Tente novamente.");
    }
  }

  function deleteCard(button) {
    const card = button.parentElement;
    card.remove();
  }

  







// class salario{
//     constructor(salario){
//         this.salario = salario;
//     }
//     inss(){
//         if (this.salario < 1320.01)
//         this.salario *= 7.5 / 100;
//     else if (this.salario < 2571.30)
//         this.salario *= 9 / 100;
//     else if (this.salario < 3856.95)
//         this.salario *= 12 / 100;
//     else if (this.salario < 7507.49)
//         this.salario *= 14 / 100;
//     else
//         salario = 1051.05;

//     return salario;
//     }

//     irrf(){
//         if (salario < 1903.99)
//             return 0;
//     else if (salario < 2826.66)
//             return salario * 7.5 / 100 - 142.8;
//     else if (salario < 3751.06)
//             return salario * 15 / 100 - 354.8;
//     else if (salario < 4664.69)
//             return salario * 22.5 / 100 - 636.13;
//         else
//             return salario * 27.5 / 100 - 869.36;
//         }
        
//         salarioBase(){
//             return this.salario - this.inss();
//         }

//         salarioLiquido(){
//             return this.salarioBase() - this.irrf();
//         }

//         showHTML(){
//             let str = `<h1>Nome:</h1><h1>R$${this.nome}</h1>`
//             str = `<h1>Nome:</h1><h1>R$${this.nome}</h1>`
//             str = `<h1>Nome:</h1><h1>R$${this.nome}</h1>`
//             str = `<h1>Nome:</h1><h1>R$${this.nome}</h1>`
//             str = `<h1>Nome:</h1><h1>R$${this.nome}</h1>`
//             str = `<h1>Nome:</h1><h1>R$${this.nome}</h1>`
            
//         }
// }

// class INSSCalculator {
//     constructor(salario) {
//       this.salario = salario;
//     }
  
//     calcularINSS() {
//       if (this.salario < 1320.01)
//         return this.salario * 7.5 / 100;
//       else if (this.salario < 2571.30)
//         return this.salario * 9 / 100;
//       else if (this.salario < 3856.95)
//         return this.salario * 12 / 100;
//       else if (this.salario < 7507.49)
//         return this.salario * 14 / 100;
//       else
//         return 1051.05;
//     }
//   }
  
//   class IRRFCalculator {
//     constructor(salario) {
//       this.salario = salario;
//     }
  
//     calcularIRRF() {
//       if (this.salario < 1903.99)
//         return 0;
//       else if (this.salario < 2826.66)
//         return this.salario * 7.5 / 100 - 142.8;
//       else if (this.salario < 3751.06)
//         return this.salario * 15 / 100 - 354.8;
//       else if (this.salario < 4664.69)
//         return this.salario * 22.5 / 100 - 636.13;
//       else
//         return this.salario * 27.5 / 100 - 869.36;
//     }
//   }
  
//   // Testando as funções:
//   let salario = 1000;
//   const inssCalculator = new INSSCalculator(salario);
//   const inss = inssCalculator.calcularINSS();
//   const salarioBase = salario - inss;
  
//   const irrfCalculator = new IRRFCalculator(salarioBase);
//   const irrf = irrfCalculator.calcularIRRF();
//   const salarioLiquido = salarioBase - irrf;
  
//   console.log("Salário: " + salario);
//   console.log("INSS: " + inss);
//   console.log("Salário Base: " + salarioBase);
//   console.log("IRRF: " + irrf);
//   console.log("Salário Líquido: " + salarioLiquido);

//   class SalaryCalculator {
//     constructor(nome, salario) {
//       this.nome = nome;
//       this.salario = salario;
//       this.inss = this.calcularINSS();
//       this.salarioBase = this.salario - this.inss;
//       this.irrf = this.calcularIRRF();
//       this.salarioLiquido = this.salarioBase - this.irrf;
//     }
  
//     calcularINSS() {
//       // Função de cálculo do INSS
//     }
  
//     calcularIRRF() {
//       // Função de cálculo do IRRF
//     }
  
//     showHTML() {
//       return `
//         <div class="card">
//           <h2>${this.nome}</h2>
//           <p>Salário: ${this.salario}</p>
//           <p>INSS: ${this.inss}</p>
//           <p>Salário Base: ${this.salarioBase}</p>
//           <p>IRRF: ${this.irrf}</p>
//           <p>Salário Líquido: ${this.salarioLiquido}</p>
//         </div>
//       `;
//     }
//   }
  
//   // Testando as funções:
//   const nome = "João";
//   const salario = 1000;
//   const calculator = new SalaryCalculator(nome, salario);
  
//   // Exibindo o card no HTML
//   const cardHTML = calculator.showHTML();
  
//   // Insira o card no documento HTML
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = cardHTML;
  