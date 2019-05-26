#!/usr/bin/env node

const lolcatjs = require('lolcatjs');

lolcatjs.options.seed = ~~(Math.random() * 1024);
// lolcatjs.options.seed = 36;
lolcatjs.options.spread = 8;
lolcatjs.options.freq = 0.1;

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

lolcatjs.fromString(theWelcome);
