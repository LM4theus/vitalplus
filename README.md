# Vital Plus

Seu medicamento 💊 na hora certa todos os dias.

## 🧭 Visão Geral:

Uma aplicativo que auxilia usuários a manterem a adesão ao tratamento medicamentoso, permitindo registrar medicamentos prescritos, acompanhar horários e constância do tratamento. Tudo feito com um design simples e intuitivo, para que a maioria das pessoas consigam utilizá-lo com extrema facilidade.

**Observação importante:**
Nosso aplicativo auxilia no tratamento medicamentoso prescrito pelo médico conforme a receita passada por ele.
O aplicativo não incentiva de forma alguma recomendação de medicamentos sem prescrição médica. Ou seja o aplicativo _NÃO_ incentiva automedicação sem a consulta de um médico especialista.

## 🎯 Objetivo:

Facilitar o acompanhamento e a adesão ao tratamento medicamentosos, auxiliando idosos, pessoas com Alzheimer, familiares, acompanhantes e profissionais de saúde no controle dos horários e o uso correto dos medicamentos prescitos.

## 👥 Público Alvo:

**👵 Idosos Independentes**
Pessoas com idade avançada ou perto disto, que tem dificuldade com tecnologia. Que querem manter o controle para fazer um tratamento acompanhado pelo médico.

**👴 Idosos Dependentes**
Pessoas com a miníma condição de fazerem as coisas sozinha e necessitam de um acompanhante para auxilia-las. O aplicativo ajuda os acompanhantes a manterem sob controle a medicação do paciente e ainda manter os familiares do paciente informados do tratamento.

**🧑‍⚕️ Profissionais de Saúde**
Profissionais de saúde podem acessar o histórico de medicamentos do paciente, ajudando o médico a entender melhor o tratamento e fazer escolhas mais seguras sobre quais serão os próximos passos.

## 📝 Requisitos:

Todas as funcionalidades do Sistema, ou seja o que o Aplicativo faz.

### Requisitos Funcionais:

Ações que o sistema deve tomar com base em dados do dispositivo e do usuário.

| Código | Requisito                                                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| RF001  | O aplicativo deve ter acesso a recursos nativos com Data, Hora, Alarmes, Armazenamento local e Notificações.                           |
| RF002  | O aplicativos deve permitir o cadastro de medicamentos com descrição, dosagem, horário da primeira dose, períodos, dias de tratamento. |
| RF003  | O aplicativo deve enviar notificações para lembrar o usuário de tomar os medicamentos nos horários definidos.                          |
| RF004  | O aplicativo notificar o usuário quando uma medicação estiver próxima do horário definido                                              |
| RF005  | O aplicativo deve sobrepor outros aplicativos quando for a hora de medicação "Alarme"                                                  |
| RF006  | O aplicativo deve registrar quando o usuário toma ou adia uma medicação.                                                               |
| RF007  | Se o usuário adiar uma medicação, o aplicativo deve recalcular os horários com base no novo horário estabeledico                       |
| RF008  | O aplicativo deve funcionar de modo offline, permitindo o uso sem conexão com a internet.                                              |
| RF009  | O aplicativo deve estar sempre em funcionamento em segundo plano, sincronizado com o relógio do dispositivo.                           |
| RF010  | O aplicativo deve gerar uma base de dados local no dispositivo.                                                                        |
| RF011  | O aplicativo deve retornar feebacks visuais como dashboars e relatórios simplificados de seus tratamentos.                             |
| RF012  | O aplicativo deve permitir ao usuário editar e excluir medicamentos já existentes.                                                     |
| RF013  | O aplicativo deve mostrar ao usuário por feedback visual, quando um tratamento chega ao fim                                            |
| RF014  | O aplicativo deve mostrar ao usuário por feedback visual, quando um medicamento está em atraso                                         |

### Requisitos Não Funcionais:

Tudo aquilo que não é ação do sistema "o detalhe".

| Código | Descrição                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| RNF001 | O aplicativo deve possuir uma interface simples, intuitiva e acessível para idosos e pessoas com pouca familiaridade com tecnologia. |
| RNF002 | O aplicativo deve ser leve, bem otimizado ao ponto de consumir pouca memória afetando pouco o dispositivo mesmo em segundo plano.    |
| RNF003 | O aplicativo deve utilizar o banco de dados SQLite para armazenamento local                                                          |
| RNF004 | O aplicativos deve manipular o tipo de arquivo mais leve que existe: Json ou Texto.                                                  |
| RNF005 | O aplicativo deve ter um sistema CRUD bem versátil ao ponto de consultar, registrar, editar e deletar facilmente novos dados.        |
| RNF006 | O sistema deve ser desenvolvido utilizando a linguagem Typescript                                                                    |
| RNF007 | O sistema deve utilizar os frameworks: React Native, Expo CLI (Testes emulados) e Expo Go (Testes Nativos).                          |
| RNF008 | O sistema deve utilizar Node e NPM como base de tudo                                                                                 |

### Features futuras (opcionais):

Aqui estão algumas ideias sobre novas funcionalidades caso o projeto seja passado adiante.

**Backup em Nuvem**
Caso o usuário queira enviar sua base de dados das medicações para outro dispositivo.

**Acesso remoto para familiares**
Um website onde o familiar insere o código de acesso ao histórico de medicação do paciente. Ou seja caso ele queira acompanhar todo o tratamento.

**Noticias do mundo farmacêutico**
Informa ao usuário sobre determinada medicação

## ⚙️ Ferramentas:

Softwares que utilizamos para desenvolver o aplicativo.

| Categoria                   | Ferramenta                    | Versão | Descrição                               |
| --------------------------- | ----------------------------- | ------ | --------------------------------------- |
| Editor de Texto             | Obsidian                      | atual  | Escrita da Documentação                 |
| Design                      | Figma                         | atual  | Design e Prototipagem                   |
| Editor de Código            | VScode                        | atual  | Escrita do Código fonte                 |
| Rede Social                 | Discord                       | atual  | Comunicação entre a equipe              |
| Rede Social                 | Whatsapp                      | atual  | Comunicação entre a equipe              |
| Produtividade e Organização | Trello                        | atual  | Definição de demandas a serem entregues |
| Linguagem                   | JavaScript/Typescript         | -      | Código fonte                            |
| Framework                   | React-Native                  | -      | Desenvolvimento Hibrido                 |
| Gerenciador de pacotes      | npm/yarn                      | -      | Dependências                            |
| Banco de Dados              | SQLite / Realm / AsyncStorage | -      | Operação offline                        |
| Bibliotecas Nativas         | -                             | -      | Recursos do dispositivo                 |

**Versões Node/React/Expo:**
Todas versões utilizadas no projeto

```json
{
  "name": "maissaude",
  "version": "1.0.0",
  "main": "index.ts",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~54.0.20",
    "expo-status-bar": "~3.0.8",
    "react": "19.1.0",
    "react-native": "0.81.5"
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "typescript": "~5.9.2"
  },
  "private": true
}
```

## 🚀 Instalação e Execução

Disponibilizamos o arquivo .apk para o aplicativo roda no seu dispositivo nativamente, mas caso queira testar o projeto na sua máquina em ambiente de desenvolvimento siga as etapas:
**Pré-requisitos:**

- Node.js + npm/yarn
- Android Studio ou Xcode
- Emulador ou dispositivo físico

**Passos:**

1. Clone o repositório
2. Instale dependências
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Execute no Android
   ```bash
   npx react-native run-android
   ```
   ou no iOS
   ```bash
   npx react-native run-ios
   ```

## 💻 Frontend

Toda parte visual do aplicativo desde do design até a experiência do usuário.

### 🎨 Design:

#### UI:

**Paleta de cores**:
Observação para utilizar a cor acrescente # junto do código hexadecimal.

| Cor                                                                                                         | Descrição          | Hexadecimal |
| ----------------------------------------------------------------------------------------------------------- | ------------------ | ----------- |
| <span style="display:inline-block;width:20px;height:20px;background-color:#0775AF;margin-left:5px;"></span> | Honolo Blue        | 0775AF      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#008DD6;margin-left:5px;"></span> | Blue Cola          | 008DD6      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#53C4F9;margin-left:5px;"></span> | Blue Jeans         | 53C4F9      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#C4C4C4;margin-left:5px;"></span> | Silver Sand        | C4C4C4      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#7F7C7C;margin-left:5px;"></span> | Gray               | 7F7C7C      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#000000;margin-left:5px;"></span> | Black              | 000000      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#FFFFFF;margin-left:5px;"></span> | White              | FFFFFF      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#FF0042;margin-left:5px;"></span> | Eletric Crimson    | FF0042      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#51B300;margin-left:5px;"></span> | Kelly Green        | 51B300      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#FFD50E;margin-left:5px;"></span> | Metallic Yellow    | FFD50E      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#FFA9BF;margin-left:5px;"></span> | Carnation Pink     | FFA9BF      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#FF7B00;margin-left:5px;"></span> | Heat Wave          | FF7B00      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#F8D29C;margin-left:5px;"></span> | Caramel            | F8D29C      |
| <span style="display:inline-block;width:20px;height:20px;background-color:#AED093;margin-left:5px;"></span> | Granny Smith Apple | AED093      |

#### UX:

Experiência do usuário como animações, transições e etc.
Link para protótipo completo no Figma: https://www.figma.com/design/KOpsUjF6WzCJhg70HLeoIA/Vital-Plus?t=PLtTnglbizau059o-1
Link para UI Kit completo do Aplicativo: https://www.figma.com/design/y6q4JSSWKPG71bjKebOstg/VitalPlus-UI-Kit?t=PLtTnglbizau059o-1

## 🗄️ Backend

### CRUD

### Banco de Dados

### Recursos Nativos
