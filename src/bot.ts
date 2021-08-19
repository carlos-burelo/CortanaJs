import { Telegraf } from 'telegraf';
import adminModule from './core/commands/admin.module';
import androidModule from './core/commands/android.module';
import banModule from './core/commands/ban.module';
import biosModule from './core/commands/bios.module';
import extrasModule from './core/commands/extras.module';
import filtersModule from './core/commands/filters.module';
import githubModule from './core/commands/github.module';
import helpModule from './core/commands/help.module';
import nodeModule from './core/commands/node.module';
import muteModule from './core/commands/mute.module';
import notesModule from './core/commands/notes.module';
import npmModule from './core/commands/npm.module';
import ownerModule from './core/commands/owner.module';
import startModule from './core/commands/start.module';
import texttospeachModule from './core/commands/texttospeach.module';
import transladorModule from './core/commands/translador.module';
import usersModule from './core/commands/users.module';
import warnModule from './core/commands/warn.module';
import welcomeModule from './core/commands/welcome.module';
import herokuModule from './core/commands/heroku.module';
import mainModule from './core/commands/main.module';

export function modules(bot: Telegraf) {
  androidModule(bot);
  adminModule(bot);
  startModule(bot);
  banModule(bot);
  biosModule(bot);
  extrasModule(bot);
  filtersModule(bot);
  githubModule(bot);
  helpModule(bot);
  herokuModule(bot);
  notesModule(bot);
  nodeModule(bot);
  npmModule(bot);
  mainModule(bot);
  muteModule(bot);
  ownerModule(bot);
  transladorModule(bot);
  warnModule(bot);
  welcomeModule(bot);
  usersModule(bot);
  texttospeachModule(bot);
}
