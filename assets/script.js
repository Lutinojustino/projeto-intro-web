// semana 1 e 2 projeto intro-web

const nome1 = "Kaid".toUpperCase();
const idade1 = 53;
const bool1 = true;
const array1 = ["Defensor", "Electroclaw", "Âncora"];

const nome2 = "Smoke".toUpperCase();
const idade2 = 36;
const bool2 = true;
const array2 = ["Defensor", "Granada De Gás Remota", "Âncora"];

const nome3 = "Melusi".toUpperCase();
const idade3 = 32;
const bool3 = true;
const array3 = ["Defensor", "Banshe", "Roamers"];

// const mediaIdade = (idade1 + idade2 + idade3) / 3;

// const totalTrue = bool1 && bool2 && bool3;

// console.log(totalTrue);
// console.log(mediaIdade);
// console.log(
//   `${nome1.toUpperCase()}\n${nome2.toUpperCase()}\n${nome3.toUpperCase()}`
// );

// fim da semana 1 e 2

// inicio da 3 e 4
const gameDefesa = [];

const personagem1 = {
  nome: nome1,
  idade: idade1,
  gameDefensor: bool1,
  caracteristica: array1,
  relatorio: "",
};

const personagem2 = {
  nome: nome2,
  idade: idade2,
  gameDefensor: bool2,
  caracteristica: array2,
  relatorio: "",
};

const personagem3 = {
  nome: nome3,
  idade: idade3,
  gameDefensor: bool3,
  caracteristica: array3,
  relatorio: "",
};

if (
  personagem1.gameDefensor &&
  personagem2.gameDefensor &&
  personagem3.gameDefensor === true
) {
  gameDefesa.push(personagem1, personagem2, personagem3);
} else {
  alert("Operador não representa a linha de defesa");
}

console.log(gameDefesa);

for (let i in gameDefesa) {
  gameDefesa[i].caracteristica = gameDefesa[i].caracteristica.toString();
  console.log(gameDefesa[i].caracteristica);
}

for (i in gameDefesa) {
  gameDefesa[
    i
  ].relatorio = `nome:${gameDefesa[i].nome}\nidade:${gameDefesa[i].idade}\ngemaDefensor:${gameDefesa[i].gameDefensor}\ncaracteristica:${gameDefesa[i].caracteristica}`;
  console.log(gameDefesa[i].relatorio);
}

const val = document.getElementById("nameOperador");

const pesquisa = (event) => {
  if (event.key === "Enter") {
    const personagens = (gameDefesa, namePer) => {
      let guardar = [];
      for (let i of gameDefesa) {
        const namePer = val.value.toUpperCase();
        if (i.nome === namePer) {
          guardar.push(i);
          nameOperador.value = "";
          i.nome === "SMOKE"
            ? smoke.setAttribute("class", "ativa")
            : smoke.setAttribute("class", "none");
          i.nome === "KAID"
            ? kaid.setAttribute("class", "ativa")
            : kaid.setAttribute("class", "none");
          i.nome === "MELUSI"
            ? melusi.setAttribute("class", "ativa")
            : melusi.setAttribute("class", "none");
        }
      }

      if (guardar.length === 0) {
        nameOperador.value = "";
        return alert("Esse Operador não foi encontrado");
      } else {
        return guardar;
      }
    };
    console.log(personagens(gameDefesa, "()"));
  }
};

const scan = (event) => {
  const personagens = (gameDefesa, namePer) => {
    let guardar = [];
    for (let i of gameDefesa) {
      const namePer = val.value.toUpperCase();
      if (i.nome === namePer) {
        guardar.push(i);
        nameOperador.value = "";
        i.nome === "SMOKE"
          ? smoke.setAttribute("class", "ativa")
          : smoke.setAttribute("class", "none");
        i.nome === "KAID"
          ? kaid.setAttribute("class", "ativa")
          : kaid.setAttribute("class", "none");
        i.nome === "MELUSI"
          ? melusi.setAttribute("class", "ativa")
          : melusi.setAttribute("class", "none");
      }
    }

    if (guardar.length === 0) {
      nameOperador.value = "";
      return alert("Esse Operador não foi encontrado");
    } else {
      return guardar;
    }
  };
  console.log(personagens(gameDefesa, "()"));
};
