function momentum(startHour: string, frequency: number): string[] {
  // validações simples
  if (!/^\d{1,2}:\d{2}$/.test(startHour)) throw new Error("startHour inválido");
  if (frequency <= 0) return [];

  const [h, m] = startHour.split(":").map(Number);
  if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59) {
    throw new Error("startHour inválido");
  }

  const firstMinute = h * 60 + m;
  const frequencyMinute = Math.round(frequency * 60); // aceita frequência decimal

  const moments: string[] = [];
  let current = firstMinute;

  // mesmo critério da tua função: enquanto estiver dentro do dia (0..1439)
  while (current < 1440) {
    const hours = Math.floor(current / 60);
    const minutes = current % 60;

    const hh = hours.toString().padStart(2, "0");
    const mm = minutes.toString().padStart(2, "0");

    moments.push(`${hh}:${mm}`);

    current += frequencyMinute;
  }

  return moments;
}

function getMomentumsForDate(
  startDateTime: string, // "2025-03-01T06:30:00"
  frequencyHours: number, // ex.: 3
  targetDate: string // "2025-03-10"
) {
  const freqMs = frequencyHours * 60 * 60 * 1000;

  const start = new Date(startDateTime);
  const targetStart = new Date(`${targetDate}T00:00:00`);
  const targetEnd = new Date(`${targetDate}T23:59:59`);

  const result: string[] = [];

  // Descobre o primeiro horário do ciclo que pode cair no dia clicado
  let current = new Date(start);

  // Avança até estar próximo do targetStart
  while (current.getTime() < targetStart.getTime()) {
    current = new Date(current.getTime() + freqMs);
  }

  // Agora captura todos os horários dentro do dia clicado
  while (current.getTime() <= targetEnd.getTime()) {
    const hh = current.getHours().toString().padStart(2, "0");
    const mm = current.getMinutes().toString().padStart(2, "0");

    result.push(`${hh}:${mm}`);

    current = new Date(current.getTime() + freqMs);
  }

  return result;
}
