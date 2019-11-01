const Discord = require("discord.js"); //surtout pas toucher

const fs = require('fs');
const warns = JSON.parse(fs.readFileSync('./warns.json'))
const client = new Discord.Client(); //surtout pas t
const ClientID = "631001858118516736"
var token = (process.env.TOKEN)
const prefix = "%" // Choix de votre préfix entre les ""   
const mp = "631001858118516736" 

client.login (process.env.TOKEN);

client.on('message', function (message) {
	//Commandes d'aides 
	
	            if(message.content === prefix + "help") {
            message.delete() 
        const embed = new Discord.RichEmbed()
        .setColor('#0000CC' )
        .setThumbnail("https://cdn.discordapp.com/attachments/632549635185180685/635103871643025409/xxxnox2.png")
        .setTitle("``Voici mes commandes d'aides ! \n Je me surnome" + (client.user.tag) + "✨ créer par 𝑵𝒆𝑪𝒓𝒐𝒛#9999``")
        .setDescription("__**Commandes générales, utilisables par tous !**__")
        .addField("**help**", "``C'est ce qui se trouve sous tes yeux !👀``")
        .addField("**fun**", "``Cette command vous montrera toutes les commandes fun disponible 🔱``") 
        .addField("**admin**", "``Cette commande vous montrera toutes les commandes d'administration disponible.``")
        .addField("**social**", "``Pour voir tous mes réseaux sociaux !📱``")
        .addField("**ping**", "``Pour connaître la vitesse de votre réseau. 💻``")
        .addField("**invite**", "``pour tous ce qui veulent ajouté un bot sur un serveur personnel avec les même commandes que moi. ⚙️``")
        .setFooter("Bot created bye 𝑵𝒆𝑪𝒓𝒐𝒛#9999 ") 
        message.channel.send(embed);
        console.log("Un utilisateur à éffectué la commande d'aide");
       } 
       


            if(message.content === prefix + "admin") {
            message.delete() 
        var help_embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/632549635185180685/635103871643025409/xxxnox2.png")
        .setColor('#0000CC')
        .setTitle("Voici mes commandes d'aides !")
        .setDescription("Commandes admin, utilisables par tous !")
        .addField("**admin**", "``C'est ce qui se trouve sous tes yeux !👀``")
        .addField("**kick**", "``Faites /kick pour expulsé une personne.``")
        .addField("**ban**", "``Faites /ban pour bannir quelqu'un du serveur. ``")
        .addField("**id**", "``Faites /id et juste à côté le id de la personne et vous trouverai son pseudo discord .``") 
        .addField("**serv**", "``Faites /serv pour avoir plus d'informations sur le serveur !! ``")
        .addField("**warn**", "``Cette command vous permets de warn un utilisateur (l'avertir) ``") 
        .addField("**unwarn**", "``Cette command vous permets d'enlevé un nombre précis de warn``") 
        .addField("**seewarn**", "``Sela vous permets de voir tout les warn de l'utilisateur mentionner ``") 
        .addField("**mpall**", "``Sela vous permets de mp all tout le serveur avec un message personnel ``") 
        .setFooter("Menu d'aide - modération")
        message.channel.send(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide");
    
       } 

            if(message.content === prefix + "fun") {
            message.delete() 
        var help_embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/632549635185180685/635103871643025409/xxxnox2.png")
        .setColor('#0000CC')
        .setTitle("Voici mes commandes d'aides !")
        .setDescription("Commandes fun, utilisables par tous !")
        .addField("**fun**", "``C'est ce qui se trouve sous tes yeux !👀``")
        .addField("**love**", "``Envie de découvrir des choses sur un futur admirateur secret ? ♀️♂️``")
        .addField("**kiss**", "``Faire un bisou à une personne💋``" )
        .addField("**hug**", "``Faire un câlin à une personne💕`` ")
        .addField("**rire**", "``Lâcher un fou rire avec les minions 😂🤣`` ")
        .addField("**8ball**", "``Posez une question juste à côté de la Command et elle sera automatiquement répondu``")
        .addField("**pf**", "``Sa vous tante une partie de Pile ou Face 😏``") 
        .addField("**avatar**", "``Cette commande vous permets de voir de plus près l'avatar de l'utilisateur mentionné 👌``") 
        .addField("**roulette**", "``Pour joué à la roulette Russe :sweat_smile:  :gun: 🎰``")
        .addField("**proba10|proba8|proba6|proba4|proba2**", "``Je pense que vous connaissez les règles du proba. Faites proba(le chiffre paire) direct à côté le proba et les votre chiffre 😜``")
        .setFooter("Menu d'aide - Fun")
        message.channel.send(help_embed);
        console.log("Un utilisateur a effectué la commande Fun");
    
       } 
           
            if(message.content === prefix + "social") {
            message.delete() 
        var help_embed = new Discord.RichEmbed()
        .setColor('#0000CC')
        .setThumbnail("https://i.pinimg.com/originals/9b/9e/40/9b9e40c61133e03d57c6ae6d185ebfe0.gif")
        .setTitle("                                 ")
        .setDescription("Commandes social , utilisables par tous !")
        .addField("**instagram 📸**", "``Cette commande vous affichera le lien qui vous mènera sur la chaîne YouTube officiel de NeCroz!``")
        .addField("**youtube 🎥**", "``Cette commande vous affichera le lien qui vous mènera sur le compte Instagram officiel de NeCroz!``")
        .setFooter("Menu d'aide - social")
        message.channel.send(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide");
    
       } 

           if(message.content === prefix + "invite"){
       	message.delete()
        let embed = new Discord.RichEmbed()
     .setTitle("Cliquez ici pour inviter le bot !")
     .setAuthor("INVITATION")
     .setColor("RANDOM")
     .setImage("https://cdn.discordapp.com/attachments/632549635185180685/635103871643025409/xxxnox2.png")
     .setURL("https://discordapp.com/api/oauth2/authorize?client_id=639189389859225650&permissions=38912&scope=bot")
     .setThumbnail(message.author.avatarURL)
  .setFooter(`Commande invite`, message.author.avatarURL)
 
        message.channel.send(embed)
    }

       //Commandes Fun
       
              if (message.content === prefix + "roulette") {
        message.delete();
        let rouletteruss = [':dizzy_face:    :boom: :gun: :bell: Chloé :arrow_forward: pas de chance, tu est mort :bell:', ':sweat_smile:           :gun:  :bell:𝔖𝔥𝔞𝔯𝔢𝔟𝔬𝔱 :arrow_forward: la chance, en même temps avec une chance sur 5 ...:bell:', ':sweat_smile:           :gun:  :bell:Chloé :arrow_forward: la chance, en même temps avec une chance sur 5...:bell:', ':sweat_smile:           :gun:  :bell:Chloé:arrow_forward: la chance, en même temps avec une chance sur 5...:bell:', ':sweat_smile:           :gun:  :bell:Chloé:arrow_forward: la chance, en même temps avec une chance sur 5...:bell:']
        message.channel.send(rouletteruss[Math.floor(Math.random() * rouletteruss.length)])
    }
    
               if (message.content.startsWith(prefix + "kiss")) {
            var kiss = [
                "https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
                "https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif",
                "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
                "https://media.giphy.com/media/11k3oaUjSlFR4I/giphy.gif"
            ];
            var gif = kiss[Math.floor(Math.random() * kiss.length)];
            var kiss_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle(`Tu viens d'embrasser :`)
                .setImage(gif)
                .setTimestamp()
                .setFooter("NeCroz")
            message.channel.send(kiss_embed);

        }
        
                        if (message.content.startsWith(prefix + "rire")) {
            var rire = "https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif"
            var rire_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle(`Haha c drôle einh ? `)
                .setImage(rire)
                .setTimestamp()
                .setFooter("NeCroz")
            message.channel.send(rire_embed);

       } 
       
       if (message.content.startsWith(prefix + "avatar")) {
            if (message.guild.member(message.mentions.users.first())) {
                var user = message.mentions.users.first()
            } else {
                var user = message.author
            }
            var avatar_embed = new Discord.RichEmbed()
                .setColor("18d67e")
                .setTitle("Voici la photo de profil de " + user.username)
                .setImage(user.avatarURL)
                .setURL(user.avatarURL)
                .setTimestamp()
                .setFooter("JeuxGate")
            message.channel.send(avatar_embed);


            console.log(`utilisation de la commande d'avatar par ${message.guild.members.get(message.author.id).displayName}`, message.guild.id)
        }
       
        
                if (message.content.startsWith(prefix + "hug")) {
            var hug = [
                "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
                "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
                "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
                "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif"
            ];
            var gif = hug[Math.floor(Math.random() * hug.length)];
            var hug_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle(`Tu viens de faire un câlin :`)
                .setImage(gif)
                .setTimestamp()
                .setFooter("NeCroz")
            message.channel.send(hug_embed);

       } 
	
	    if (message.content.startsWith(prefix + "say")) {
      message.delete();
      var args = message.content.split(' ').join(' ').slice(5);
    
      if(!args) return message.channel.send("Tu dois me dire quelque chose !")

      message.channel.send(`${args}`);
    }
	
	                              if (message.content.startsWith(prefix + "8ball")) {
            if (message.content.substr(prefix.length + 5)) {
                var ball = [
                    //oui
                    "Plutôt, oui",
                    "Oui.",
                    "Bien sûr.",
                    "Faites ainsi.",

                    //non
                    "Non",
                    "Mes sources disent non.",
                    "Les signes disent que non.",
                    "Je dirais que non",

                    //autres
                    "Actuellement, je ne peux le prédire ...",
                    "Impossible à prédire ..."
                ];
                var ansball = ball[Math.floor(Math.random() * ball.length)];
                var ball_embed = new Discord.RichEmbed()
                    .setColor('4f0982')
                    .addField(`Voici la réponse à vôtre question :`, ansball)
                    .setTimestamp()
                    .setFooter("NeCroz")
                message.channel.send(ball_embed);
            } else {
                message.channel.send("Si vous voulez que la boule magique vous réponde, vous devez déjà poser la question !")
            }
        }
                      if (message.content.startsWith(prefix + 'ping')) {
            message.channel.send('Pong! ping :`' + `${Date.now() - message.createdTimestamp}` + ' ms`');
       }   
       
                   if (message.content.startsWith(prefix + "pf")) {
            pileface = Math.floor(Math.random() * 2 + 0)
            if (pileface === 0) {
                message.channel.send("Vous venez d'obtenir : **Pile** !")
            } else {
                message.channel.send("Vous venez d'obtenir : **Face** !")
            }
          } 
          
            if (message.content.startsWith(prefix + "proba10")) {
            if (message.content.substr(prefix.length + 5)) {
                var ball = [
                    
                    "1",
                    "2.",
                    "3.",
                    "4",
                    "5",
                    "6.",
                    "7.",
                    "8",
                    "9",
                    "10"
                ];
                var ansball = ball[Math.floor(Math.random() * ball.length)];
                var ball_embed = new Discord.RichEmbed()
                    .setColor('4f0982')
                    .addField(`Proba :`, ansball)
                    .setTimestamp()
                    .setFooter("NeCroz")
                message.channel.send(ball_embed);
            } else {
                message.channel.send("Si vous voulez faire un proba , vous devez déjà mettre le chiffre en 1 et 10!")
            }
        }
      
            if (message.content.startsWith(prefix + "proba8")) {
            if (message.content.substr(prefix.length + 5)) {
                var ball = [
                    
                    "1",
                    "2.",
                    "3.",
                    "4",
                    "5",
                    "6.",
                    "7.",
                    "8"
                ];
                var ansball = ball[Math.floor(Math.random() * ball.length)];
                var ball_embed = new Discord.RichEmbed()
                    .setColor('4f0982')
                    .addField(`Proba :`, ansball)
                    .setTimestamp()
                    .setFooter("NeCroz")
                message.channel.send(ball_embed);
            } else {
                message.channel.send("Si vous voulez faire un proba , vous devez déjà mettre le chiffre en 1 et 10!")
            }
        }
      
            if (message.content.startsWith(prefix + "proba6")) {
            if (message.content.substr(prefix.length + 5)) {
                var ball = [
                    
                    "1",
                    "2.",
                    "3.",
                    "4",
                    "5",
                    "6."
                ];
                var ansball = ball[Math.floor(Math.random() * ball.length)];
                var ball_embed = new Discord.RichEmbed()
                    .setColor('4f0982')
                    .addField(`Proba :`, ansball)
                    .setTimestamp()
                    .setFooter("NeCroz")
                message.channel.send(ball_embed);
            } else {
                message.channel.send("Si vous voulez faire un proba , vous devez déjà mettre le chiffre en 1 et 10!")
            }
        }
        
            if (message.content.startsWith(prefix + "proba4")) {
            if (message.content.substr(prefix.length + 5)) {
                var ball = [
                    
                    "1",
                    "2.",
                    "3.",
                    "4"
                ];
                var ansball = ball[Math.floor(Math.random() * ball.length)];
                var ball_embed = new Discord.RichEmbed()
                    .setColor('4f0982')
                    .addField(`Proba :`, ansball)
                    .setTimestamp()
                    .setFooter("NeCroz")
                message.channel.send(ball_embed);
            } else {
                message.channel.send("Si vous voulez faire un proba , vous devez déjà mettre le chiffre en 1 et 10!")
            }
        }

            if (message.content.startsWith(prefix + "proba2")) {
            if (message.content.substr(prefix.length + 5)) {
                var ball = [
                    
                    "1",
                    "2."
                ];
                var ansball = ball[Math.floor(Math.random() * ball.length)];
                var ball_embed = new Discord.RichEmbed()
                    .setColor('4f0982')
                    .addField(`Proba :`, ansball)
                    .setTimestamp()
                    .setFooter("NeCroz")
                message.channel.send(ball_embed);
            } else {
                message.channel.send("Si vous voulez faire un proba , vous devez déjà mettre le chiffre entre 1 et 10!")
            }
        }
      
      if(message.content.startsWith(prefix + "play")) {
      	message.delete()
            var args = message.content.split(' ').join(' ').slice(6);
    
      if(!args) return message.channel.send("Tu dois me dire quelque chose !")
                  client.user.setGame(`${args}`);
                  message.channel.send("L'activité à été changé en ``" + (`${args}`) + "`` ??🔥🔥") 
                 } 
      
           if(message.content.startsWith(prefix + "love")){
       	message.delete()
    var mentionned = message.mentions.members.first();
        let embed = new Discord.RichEmbed()
        .setDescription(mentionned.displayName + " je croie que quelqu'un vous aime 😉 ")
        message.channel.send(embed)
     } 
            
      //Social
     
           if(message.content.startsWith(prefix + "free")) {
         let embed = new Discord.RichEmbed()
           	message.channel.send("voici le lien qui te permettra de me soutenir gratuitement ❤️ : **https://www.clictune.com/7APD**" ) 
          } 
     
                  if(message.content.startsWith(prefix + "don")) {
             message.delete()
         let embed = new Discord.RichEmbed()
        .setTitle("Voici le lien qui vous permettra de m'aidé financièrement ❤️❤️")
        .addField("**PayPal **", "https://paypal.me/necrozytb67?locale.x=fr_FR")
        .setImage("https://www.paiement-en-ligne.info/wp-content/uploads/2018/06/paypal-avis-e1530005844119.png") 
        .setColor("BLUE")
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
        message.channel.send(embed)
    }
     
             if(message.content === prefix + "youtube"){
             message.delete()
         let embed = new Discord.RichEmbed()
        .setTitle("Youtube🎙️                ")
        .addField("_Allez vous abonnez à ma chaîne 😉_", " la chaine YouTube de NeCroz : https://www.youtube.com/channel/UCeRygRLC3wD7GtO6ZKjxm-w")
        .setColor("RANDOM")
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
        message.channel.send(embed)
    }
   
           if(message.content === prefix + "instagram"){
           message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle("Instagram 📸                   ")
        .addField("_Venez suivre mon compte Instagram 😉_", " le compte Instagram de NeCroz : https://www.instagram.com/necroz6825/?hl=fr")
        .setColor("RANDOM")
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
        message.channel.send(embed)
    }
   

   
        //Modérateurs 
        
            if(message.content.startsWith(prefix + "clear")) {
      message.delete();
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`);
            clear.clear().then(member => {
              var clear_embed = new Discord.RichEmbed()
              .setColor("#40A497")
              .setTitle("Clear :")
              .addField("Messages supprimés:", `${args[0]}`)
              .addField("Dans le salon :", `${message.channel.name}`)
              .addField("Modérateur :", `${message.author.username}`)
              client.guilds.get("481105805161005066").channels.get("488344143047819282").send(clear_embed)
              console.log("Un modo a supprimé des msg !")
          });
        });
    }
    
            if (message.content.startsWith(prefix + "id")) {
            var idserched = message.content.substr(prefix.length + 3)
            if (!idserched || idserched === 0 || idserched === 1) {
                return message.reply("**Hey ...**Tu as oublié de mettre un id !");
            }
            if (client.users.get(idserched)) {
                message.channel.send('Utilisateur avec id `' + idserched + '` trouvé, voici son nom d\'utilisateur : `' + client.users.get(idserched).username + '`')
                message.channel.send("***Pour des raisons de confidentialitées, le discriminant*** `#----` ***n'est pas cité***")
                console.log(`recherche d'id de la part de ${message.guild.members.get(message.author.id).displayName}`, message.guild.id)
            } else {
                message.channel.send('Aucun utilisateur avec id `' + idserched + '` Trouvé !')
            }
        }

                 if(message.content.startsWith(prefix + "serverlist")){

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    
    message.delete()
    let botembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Le bot est dans les serveurs", string)
  .setTimestamp()
  .setFooter("Commande servers ");
    message.channel.send(botembed);
}

module.exports.help = {
    name: "serverlist"
}
} 

               if (message.content.startsWith(prefix + "kick")) { 
               if(message.mentions.users.size === 0) {
     
      return message.channel.send("**Vous n'avez mentionné aucun utilisateur**");
      var member= message.mentions.members.first();  
        member.kick().then((member) => {  
        message.channel.send("👋 " + member.displayName + "s'est fait expulser").catch(() => {  
        message.channel.send("Tu n'as pas les permissions");
    });

  })
 } 
}  

     if(message.content.startsWith("!removeInvites")) {
     message.delete()
     }

      if(message.content === prefix + "serv") {
      var server_embed = new Discord.RichEmbed()
      .setColor("#40A497")
      .setTitle("Informations sur le serveur discord !")
      .setThumbnail("https://cdn.discordapp.com/attachments/481105805161005068/481850027216732160/elpbot-4.png")
      .addField("Nom du serveur :", message.guild.name)
      .addField("Créé le :", message.guild.createdAt)
      .addField("Tu as rejoint le :", message.member.joinedAt)
      .addField("Nombre de membres :", message.guild.memberCount)
      .addField("Nombre de catégories et de salons :", message.guild.channels.size)
      .setFooter("Infos - serveur")
      message.channel.sendMessage(server_embed)
      console.log("Commande infos - serveur!")
  }

          if (message.content.startsWith(prefix + "ban")) { 
          if(message.mentions.users.size === 0) {
     
      return message.channel.send("**Vous n'avez mentionné aucun utilisateur**");
          var member= message.mentions.members.first();  
           member.ban().then((member) => {  
           message.channel.send("👋 " + member.displayName + "s'est fait bannir").catch(() => {
           message.channel.send("Tu n'as pas les permissions");
      })
   });
  }
 } 

    var fs = require('fs');
 
    let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
     
    if (message.content.startsWith(prefix + "warn")){
     
    if (message.channel.type === "dm") return;
     
    var mentionned = message.mentions.users.first();
     
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
     
    if(message.mentions.users.size === 0) {
     
      return message.channel.send("**Vous n'avez mentionné aucun utilisateur**");
     
    }else{
     
        const args = message.content.split(' ').slice(1);
     
        const mentioned = message.mentions.users.first();
     
        if (message.member.hasPermission('MANAGE_GUILD')){
     
          if (message.mentions.users.size != 0) {
     
            if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
     
              if (args.slice(1).length != 0) {
     
                const date = new Date().toUTCString();
     
                if (warns[message.guild.id] === undefined)
     
                  warns[message.guild.id] = {};
     
                if (warns[message.guild.id][mentioned.id] === undefined)
     
                  warns[message.guild.id][mentioned.id] = {};
     
                const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
     
                if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
     
                warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
     
                } else {
     
                  warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
     
                    time: date,
     
                    user: message.author.id};
     
                }
     
                fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
    message.delete();
     
                message.channel.send(':warning:` | '+mentionned.tag+' à été averti`');
     
    message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
     
              } else {
     
                message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
     
              }
     
            } else {
     
              message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
     
            }
     
          } else {
     
            message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
     
          }
     
        } else {
     
          message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
     
        }
     
      }
     
    }



      if (message.content.startsWith(prefix+"seewarn")||message.content===prefix+"seewarn") {
     
    if (message.channel.type === "dm") return;
     
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
     
        const mentioned = message.mentions.users.first();
     
        const args = message.content.split(' ').slice(1);
     
        if (message.member.hasPermission('MANAGE_GUILD')){
     
          if (message.mentions.users.size !== 0) {
     
            if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
     
              try {
     
                if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
     
                  message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
     
                  return;
     
                }
     
              } catch (err) {
     
                message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
     
                return;
     
              }
     
              let arr = [];
     
              arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
     
              for (var warn in warns[message.guild.id][mentioned.id]) {
     
                arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
     
                "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
     
              }
     
              message.channel.send(arr.join('\n'));
     
            } else {
     
              message.channel.send("Erreur mauvais usage: "+prefix+"seewarn <user> <raison>");
     
              console.log(args);
     
            }
     
          } else {
     
            message.channel.send("Erreur mauvais usage: "+prefix+"seewarn <user> <raison>");
     
          }
     
        } else {
     
          message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
     
        }
     
      }
     
           if (message.content.startsWith(prefix+"unwarn")||message.content===prefix+"unwarn") {
     
    if (message.channel.type === "dm") return;
     
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
     
       const mentioned = message.mentions.users.first();
     
        const args = message.content.split(' ').slice(1);
     
        const arg2 = Number(args[1]);
     
        if (message.member.hasPermission('MANAGE_GUILD')){
     
          if (message.mentions.users.size != 0) {
     
            if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
     
              if (!isNaN(arg2)) {
     
                if (warns[message.guild.id][mentioned.id] === undefined) {
     
                  message.channel.send(mentioned.tag+" n'a aucun warn");
     
                  return;
     
                } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
     
                  message.channel.send("**:x: Ce warn n'existe pas**");
     
                  return;
     
                }
     
                delete warns[message.guild.id][mentioned.id][arg2];
     
                var i = 1;
     
                Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
     
                  var val=warns[message.guild.id][mentioned.id][key];
     
                  delete warns[message.guild.id][mentioned.id][key];
     
                  key = i;
     
                  warns[message.guild.id][mentioned.id][key]=val;
     
                  i++;
     
                });
     
                fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
                if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
     
                  delete warns[message.guild.id][mentioned.id];
     
                }
     
                message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
     
                return;
     
              } if (args[1] === "tout") {
     
                delete warns[message.guild.id][mentioned.id];
     
                fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
                message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
     
                return;
     
              } else {
     
                message.channel.send("Erreur mauvais usage: "+prefix+"unwarn <utilisateur> <nombre>");
     
              }
     
            } else {
     
              message.channel.send("Erreur mauvais usage: "+prefix+"unwarn <utilisateur> <nombre>");
     
            }
     
          } else {
     
           message.channel.send("Erreur mauvais usage: "+prefix+"unwarn <utilisateur> <nombre>");
     
          }
     
        } else {
     
          message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
     
        }
      }
      
      if(message.content.startsWith(prefix + "stream" )){
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `ME MODIFIER` dans ce serveur**").catch(console.error);
            var args = message.content.split(' ').join(' ').slice(8);
    
      if(!args) return message.channel.send("Tu dois me dire quelque chose !")

            client.user.setActivity((`${args}`), {
                
                type: "STREAMING",
                url: "https://twitch.tv/META"
            })
            message.channel.send("le message à été changé en ``" + (`${args}`) + "`` 🔥🔥🔥") 
} 

         if(message.content.startsWith(prefix + "mpall")){

    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
        message.delete()
        if (message.channel.type === "dm") return;
              var args = message.content.split(' ').join(' ').slice(7);
    
      if(!args) return message.channel.send("Tu dois me dire quelque chose !")
      message.guild.members.forEach((player) => {
        message.guild.member(player).send(`${args}`);
      console.log("la commande pub mp all à été utilisée avec perfection👌") 
      })
 }  

         if(message.content.startsWith(prefix + "Namek")){
        message.delete()
        if (message.channel.type === "dm") return;
      message.guild.members.forEach((player) => {
        message.guild.member(player).send("**Namek**\n\nBonjour futur guerrier nous t'avons choisit parmis t'en d'autres pour rejoindre notre serveur NAMEK:\n\nTu trouvera:\n\n🏅 Des événements\n💭 Une communauté actif et conviviale\n🌙 Des staff compétents.\nTu pourra aussi :\n👋 Rencontrés des personnes\n👫Trouvera des potes \n❤ Trouvera l'amour\n😎 Te faires plein de nouveaux amis.\n\nTU POURRA AUSSI GAGNER UN NITRO GAME SI TU FAIT 30 INVITATIONS. NO FAKE. ET BIEN SÛR SI TU FAIT 60 UN AUTRE........\n\n📕 Ta place: https://discord.gg/FEZWUnv\n\n🌟Image: https://i.pinimg.com/originals/2f/4a/f4/2f4af45615c828296751d5f67f384462.gif")
      console.log("la commande pub mp all à été utilisée avec perfection👌") 
      })
 }  
    });

       //Divers
     
             client.on('ready', function() {
            console.log("\x1b[40m")
          
            console.log("\x1b[4m")
          
            console.log("\x1b[1m")
          
          console.log("\x1b[2m")
        
            console.log('\x1b[33m%s\x1b[0m', "Le bot est bien allumé !");
            console.log(" ")
            console.log('\x1b[31m%s\x1b[0m', "Connecter en tant que "+(client.user.tag));
            console.log("voici son token  "+ token)
            console.log("voici son prefix : " + prefix )
            console.log('\x1b[31m%s\x1b[0m', "Votre ID "+(ClientID));
            
           client.user.setActivity(`%help | Support ${client.guilds.size} serveur`), {
                
                type: "WATCHING"
            }
});
