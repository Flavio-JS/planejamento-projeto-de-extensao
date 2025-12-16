export function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min); // Arredonda 'min' para cima.
  const maxFloored = Math.floor(max); // Arredonda 'max' para baixo.
  // Gera um número aleatório no intervalo e o retorna.
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

type GetRandomProps = {
  min: number;
  max: number;
  banana: string;
};

export const getRandomInt2 = ({ min, max }: GetRandomProps) => {
  const minCeiled = Math.ceil(min); // Arredonda 'min' para cima.
  const maxFloored = Math.floor(max); // Arredonda 'max' para baixo.
  // Gera um número aleatório no intervalo e o retorna.
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
};
