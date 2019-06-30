#! /usr/bin/env node

const Printer = require('@darkobits/lolcatjs').default;

// Math.sin(freq * i + (N * 2 * Math.PI) / 3) * 127 + 128;

const opts = {
  //   seed: Math.random() * 960 * Math.PI,
  spread: 8,
  freq: 0.1,
};

const theWelcome = String.raw`
   _______   _______   _______   _______   _     _   _______   _
  /  ____ \ /  ____ \ /  ___  \ /  ____ \ | \   | | |__   __| | |
  | |    \/ | |    \/ | |   | | | |    \/ |  \  | |    | |    | |
  | |_____  | |__     | |   | | | |       |   \ | |    | |    | |
  |_____  | |  __|    | |   | | | | ____  | |\ \| |    | |    | |
        | | | |       | |   | | | | \_  | | | \   |    | |    | |
  /\____| | | |____/\ | |___| | | |___| | | |  \  |  __| |__  | |____/\
  \_______/ \_______/ \_______/ \_______/ |_|   \_| |_______| |_______/
`;

console.warn(Printer.fromString(theWelcome, opts));
