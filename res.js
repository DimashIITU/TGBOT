import axios from 'axios';

var text = 'Напишите настоящее имя';

const TOKEN = '5489958251:AAHpliv8rhFSFfS9axsrqDAkwfR0LAaYzb4';
const CHAT_ID = '630610636';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

await axios.post(URI_API, {
  chat_id: CHAT_ID,
  text: text,
});
