// --- Quiz Variáveis ---
function verificarQuizVariaveis() {
  const respostasCorretas = {
    q1: 'b',
    q2: 'b',
    q3: 'b',
    q4: 'c',
    q5: 'c'
  };

  let pontos = 0;
  const total = Object.keys(respostasCorretas).length;

  // Limpa feedback anterior
  const perguntas = document.querySelectorAll('.pergunta');
  perguntas.forEach(pergunta => {
    pergunta.querySelectorAll('label').forEach(label => {
      label.style.color = '';
      label.style.fontWeight = 'normal';
    });
  });

  for (const q in respostasCorretas) {
    const resposta = document.querySelector(`input[name=${q}]:checked`);
    const labels = document.querySelectorAll(`input[name=${q}]`);

    labels.forEach(input => {
      const label = input.parentElement;
      if (input.value === respostasCorretas[q]) {
        label.style.color = 'green';
        label.style.fontWeight = 'bold';
      }
      if (resposta && input === resposta && input.value !== respostasCorretas[q]) {
        label.style.color = 'red';
        label.style.fontWeight = 'bold';
      }
    });

    if (resposta && resposta.value === respostasCorretas[q]) {
      pontos++;
    }
  }

  const resultado = document.getElementById('resultado');
  resultado.textContent = `Você acertou ${pontos} de ${total} perguntas.`;
  resultado.style.color = pontos === total ? 'green' : 'darkred';
}


// --- Quiz Condicionais ---
function verificarQuizCondicionais() {
  const respostasCorretas = {
    q1: 'c',
    q2: 'b',
    q3: 'a',
    q4: 'b',
    q5: 'b',
    q6_1: 'if',
    q6_2: 'elif',
    q6_3: 'else',
    q7_1: 'if',
    q7_2: 'else',
    q8_1: 'if',
    q8_2: 'if',
    q8_3: 'else',

    q9_1: 'if',
    q9_2: 'else',
  };

  let pontos = 0;
  const total = Object.keys(respostasCorretas).length;

  const perguntas = document.querySelectorAll('#quiz-form-condicionais .pergunta');

  perguntas.forEach(pergunta => {
    const inputs = pergunta.querySelectorAll('input');

    inputs.forEach(input => {
      if (input.type === 'radio') {
        const label = input.parentElement;
        label.style.color = '';
        label.style.fontWeight = 'normal';
      } else if (input.type === 'text') {
        input.style.borderColor = '';
      }
    });
  });

  // Verificação
  perguntas.forEach(pergunta => {
    const inputs = pergunta.querySelectorAll('input');

    inputs.forEach(input => {
      const name = input.name;
      const respostaCorreta = respostasCorretas[name];
      if (!respostaCorreta) return;

      if (input.type === 'radio') {
        const label = input.parentElement;

        if (input.checked) {
          if (input.value === respostaCorreta) {
            label.style.color = 'green';
            label.style.fontWeight = 'bold';
            pontos++;
          } else {
            label.style.color = 'red';
            label.style.fontWeight = 'bold';

            // Também mostra a correta em verde
            const radios = document.querySelectorAll(`input[name="${name}"]`);
            radios.forEach(r => {
              if (r.value === respostaCorreta) {
                const correctLabel = r.parentElement;
                correctLabel.style.color = 'green';
                correctLabel.style.fontWeight = 'bold';
              }
            });
          }
        }
      } else if (input.type === 'text') {
        const valor = input.value.trim().toLowerCase();
        if (valor === respostaCorreta) {
          input.style.borderColor = 'green';
          pontos++;
        } else {
          input.style.borderColor = 'red';
        }
      }
    });
  });

  const resultado = document.getElementById('resultado-condicionais');
  resultado.textContent = `Você acertou ${pontos} de ${total} perguntas.`;
  resultado.style.color = (pontos === total) ? 'green' : 'darkred';
}


function verificarPergunta10() {
  const respostaCorreta10 = [
    "if4",
    "print4",
    "elif6",
    "print6",
  ];

  const selects = [
    document.querySelector("select[name='linha1']"),
    document.querySelector("select[name='linha2']"),
    document.querySelector("select[name='linha3']"),
    document.querySelector("select[name='linha4']")
  ];

  let acertos = 0;

  selects.forEach((select, index) => {
    if (select.value === respostaCorreta10[index]) {
      select.style.borderColor = "green";
      acertos++;
    } else {
      select.style.borderColor = "red";
    }
  });

  const resultado = document.getElementById("resultado-pergunta10");
  if (acertos === respostaCorreta10.length) {
    resultado.textContent = "✅ Código montado corretamente!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = `❌ Há ${respostaCorreta10.length - acertos} erro(s) na ordem dos blocos.`;
    resultado.style.color = "darkred";
  }
}

function verificarPergunta9() {
  const respostaCorreta9 = [
    "if",
    "print_par",
    "else",
    "print_impar"
  ];

  const selects = [
    document.querySelector("select[name='linha1']"),
    document.querySelector("select[name='linha2']"),
    document.querySelector("select[name='linha3']"),
    document.querySelector("select[name='linha4']")
  ];

  let acertos = 0;

  selects.forEach((select, index) => {
    if (select.value === respostaCorreta9[index]) {
      select.style.borderColor = "green";
      acertos++;
    } else {
      select.style.borderColor = "red";
    }
  });

  const resultado = document.getElementById("resultado-pergunta9");
  if (acertos === respostaCorreta9.length) {
    resultado.textContent = "✅ Código montado corretamente!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = `❌ Há ${respostaCorreta9.length - acertos} erro(s) na ordem dos blocos.`;
    resultado.style.color = "darkred";
  }
}


function verificarQuizLacos() {
  const respostasCorretas = {
    q1: 'b',
    q2: 'b',
    q3: 'a',
    q4: 'c',
    q5: 'b'
  };

  let pontos = 0;
  const total = Object.keys(respostasCorretas).length;

  const perguntas = document.querySelectorAll('#quiz-form-lacos .pergunta');

  perguntas.forEach(pergunta => {
    const inputs = pergunta.querySelectorAll('input');

    inputs.forEach(input => {
      const name = input.name;
      const respostaCorreta = respostasCorretas[name];
      if (!respostaCorreta) return;

      const label = input.parentElement;
      label.style.color = '';
      label.style.fontWeight = 'normal';

      if (input.checked) {
        if (input.value === respostaCorreta) {
          label.style.color = 'green';
          label.style.fontWeight = 'bold';
          pontos++;
        } else {
          label.style.color = 'red';
          label.style.fontWeight = 'bold';
          // Destaca a correta também
          const radios = document.querySelectorAll(`input[name="${name}"]`);
          radios.forEach(r => {
            if (r.value === respostaCorreta) {
              r.parentElement.style.color = 'green';
              r.parentElement.style.fontWeight = 'bold';
            }
          });
        }
      }
    });
  });

  const resultado = document.getElementById('resultado-lacos');
  resultado.textContent = `Você acertou ${pontos} de ${total} perguntas.`;
  resultado.style.color = (pontos === total) ? 'green' : 'darkred';
}



