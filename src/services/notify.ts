// Função genérica para enviar notificação
function sendNotification(message: string) {
  console.log("NOTIFICAÇÃO:", message);
  // Aqui você substitui por expo-notifications ou react-native-push-notification
}

function notifyIfCloseToMomentum(momentums: string[]) {
  const now = new Date();

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  for (const time of momentums) {
    const [hh, mm] = time.split(":").map(Number);
    const targetMinutes = hh * 60 + mm;

    const diff = targetMinutes - currentMinutes;

    if (diff === 5) {
      sendNotification(`Sua medicação está agendada para ${time}`);
    }
  }
}
