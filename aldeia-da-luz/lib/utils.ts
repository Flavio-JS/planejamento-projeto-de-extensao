/**
 * Formata uma data ISO para o formato brasileiro (DD de Mês, YYYY)
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month}, ${year}`;
}

/**
 * Combina classes CSS condicionalmente (substituto simples do clsx)
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formata número de telefone brasileiro para link tel:
 */
export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

/**
 * Formata número de WhatsApp para link wa.me
 */
export function formatWhatsAppLink(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
