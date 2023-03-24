import { Telegraf } from 'telegraf';
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';
import { message } from 'telegraf/filters';

const botToken = '5489958251:AAHpliv8rhFSFfS9axsrqDAkwfR0LAaYzb4';
const chatToken = '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';

const bot = new Telegraf(botToken);

const configuration = new Configuration({
  organization: 'org-rGWXwIvqku1FTxWme8WhjWe3',
  apiKey: chatToken,
});
const openai = new OpenAIApi(configuration);
const instance = axios.create({
  headers: {
    Authorization: 'Bearer ' + chatToken,
    'Content-Type': 'application/json',
  },
});

// console.log(res.data.choices[0].message.content);
bot.start((ctx) =>
    ctx.reply('Welcome to NurbekGPT pro ultimate super mega puper max alpha betta gamma thetta 4.0'),
);
bot.on(message('text'), async (ctx) => {
  const userMessage = ctx.message;
  const res = await instance.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: userMessage.text  }],
    temperature: 0.7,
  });
  console.log(
      'От: ' + userMessage.from.username,
      'Мессаге: ' + userMessage.text + '\n' + 'Респонс: ' + res.data.choices[0].message.content,
      'id: ' + userMessage.chat.id
  );
  ctx.reply(res.data.choices[0].message.content);
});
bot.launch();
