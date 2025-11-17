import React, { useState } from "react";
import { router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import CustomButton from "../components/button";

// Configuração do idioma português
LocaleConfig.locales["pt"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState("");

  const goToHome = () => {
    router.replace("./home");
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <CustomButton
          width={50}
          height={50}
          borderRadius={15}
          onPress={goToHome}
        >
          <Image source={require("../../assets/back-icon.png")} />
        </CustomButton>
        <Text style={styles.headerTime}>10:00h</Text>
      </View>

      <View style={styles.blueLine}></View>

      {/* TÍTULO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Calendário</Text>
        <Text style={styles.sectionSubtitle}>Veja o cronograma completo</Text>
      </View>

      {/* CALENDÁRIO */}
      <View style={styles.cardContainer}>
        <Calendar
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
            alert(`Data selecionada: ${day.dateString}`);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "#53C4F9",
            },
          }}
          theme={{
            backgroundColor: "#F2F2F2",
            calendarBackground: "#F2F2F2",
            selectedDayBackgroundColor: "#53C4F9",
            todayTextColor: "#53C4F9",
            dayTextColor: "#000",
            monthTextColor: "#000",
            arrowColor: "#53C4F9",
            textDayFontSize: 18,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 16,
          }}
        />

        <Text style={styles.infoText}>
          Clique em uma data para mostrar os horários da medicação
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  blueLine: {
    width: "100%",
    height: 5,
    backgroundColor: "#53C4F9",
  },
  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTime: {
    fontSize: 30,
    fontWeight: "500",
    color: "#030303ff",
    marginRight: 20,
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  sectionSubtitle: {
    fontSize: 22,
    textAlign: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
    color: "#333",
  },
});
