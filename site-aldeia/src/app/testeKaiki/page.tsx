"use client";
import { Icon } from "@/componets/Icons";
import { getRandomInt } from "@/lib/utils";
import { Banana, HatGlasses } from "lucide-react";
// Necessário no Next.js para permitir usar useState, eventos, inputs, etc.
// Diz que este componente roda no navegador.
import { useState } from "react";
// Importa o useState, que cria variáveis que mudam e fazem a tela atualizar.

// Define o componente principal da página.
export default function Home() {
  // Cria um "estado" para armazenar o número digitado pelo usuário.
  const [n, setN] = useState<number | undefined>();
  // n → valor que o usuário digita no input.
  // setN → função que muda o valor de n.
  // number | undefined significa que pode ser número ou vazio.

  // Cria um "estado" para armazenar a lista de resultados a serem exibidos na tela.
  // Começa como um array vazio.
  const [resultados, setResultados] = useState<string[]>([]);

  // Função que é executada quando o formulário é enviado (clicando no botão "Confirmar").
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Impede o formulário de recarregar a página automaticamente.

    // Se 'n' não tiver um valor (for undefined, null, ou 0), a função para aqui.
    if (!n) {
      return;
    }
    // Se n estiver vazio ou for 0, a função para.

    // Cria um array temporário para guardar os novos resultados.
    const novosResultados: string[] = [];

    // Função auxiliar para gerar um número inteiro aleatório entre 'min' e 'max'.

    // Loop que executa 'n' vezes (o número que o usuário digitou).
    for (let i = 0; i < n; i++) {
      // Gera um número aleatório 'x' entre -1000 e 1000.
      const x = getRandomInt( -1000, 1000);

      // Verifica se 'x' é par ou ímpar.
      const parOuImpar = x % 2 === 0 ? "EVEN" : "ODD"; // If e Else de outra maneira
      // Verifica se 'x' é negativo, positivo ou nulo.
      const sinal = x < 0 ? "NEGATIVE" : x > 0 ? "POSITIVE" : "NULL";

      // Adiciona as strings de resultado ao array temporário.
      novosResultados.push(`${x} - ${parOuImpar} ${sinal} `);
    }

    // Atualiza o estado 'resultados' com o array de novos resultados.
    // Isso faz o React redesenhar a tela para mostrar os novos itens.
    setResultados(novosResultados);
  };

  // A parte 'return' descreve o que o componente vai mostrar na tela (o HTML).
  return (
    // 'div' principal que organiza o conteúdo em uma coluna.
    <div className="flex items-center bg-white text-black flex-col gap-2 h-screen">
      {/* Formulário para o usuário inserir o número. */}
      <Banana color="#000" size={200} />;
      <HatGlasses color="black" size={100} />;
      <Icon name="bug" size={100} color="blue" />
      <form
        className="flex justify-center items-center h-[300px] gap-1.5"
        onSubmit={handleSubmit}
      >
        <input
          onChange={(event) => setN(Number(event.target.value))}
          type="number"
          className="border border-indigo-950 text-black"
          value={n || 0}
        />
        {/* Botão para enviar o formulário. */}
        <button className="border border-indigo-400 bg-amber-400 text-black">
          Confirmar
        </button>
      </form>
      {/* Seção que exibe os resultados. */}
      {/* O método '.map()' percorre cada item do array 'resultados'. */}
      {resultados.map((value, index) => (
        // Para cada 'value' no array, cria uma 'div'.
        // A 'key' é importante para o React saber qual item é qual, melhorando o desempenho.
        <div key={index} className="flex items-center gap-2">
          {/* Exibe o texto do resultado. */}
          {value}
        </div>
      ))}
    </div>
  );
}
