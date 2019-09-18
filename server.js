
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000, listen);
app.use(express.static('public'));
var io = require('socket.io')(server);
var lista = [];
var mysql = require('mysql');
var bet_open;
var coins_red,coins_green,coins_black;
var totalred,totalgreen,totalblack;
var l1,hash;
var hashwork;
const lista_banow = [];
const mess_list = [];
var users_online = 0;
var refreshbalance;
coins_black = 0;coins_green = 0;coins_red = 0;
totalblack = 0;totalred = 0;totalgreen = 0;

var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ruletka"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("DataBase connected!");
    });
function updatelist() {
    io.emit("updatelist", lista)
}
function element(color,img,width,height){
    this.color = color;
    this.img = img;
    this.width = width;
    this.height = height;
}
function message(nick,mess,clock){
    this.nickmess = nick;
    this.clockmess = clock;
    this.mess = mess;
}
function betlist(){
    io.emit("refresh_bets",totalred,totalgreen,totalblack,coins_red,coins_green,coins_black,"niewylosowano");
  var sql = "SELECT * FROM bety ORDER BY coinsy ASC "
    con.query(sql,function (err,results) {
        io.emit("emptybets")
        if(results.length == 0) {
            io.emit("refresh_bets_list",'','','',results.length)
        }
        else{
            for (var i = results.length - 1; i > -1 ; i--) {
                var nk = results[i].nick;
                var cs = results[i].coinsy;
                var cr = results[i].kolor;
                io.emit("refresh_bets_list", nk, cs, cr,results.length)
            }
        }

    })
}
io.sockets.on('connection',function(socket) {
     var id_profile,nick_profile,zalogowany,upomnienie = 0,ban,blokuj_mess = 0;
        console.log("We have a new client: " + socket.id);
        users_online += 1;
        io.emit("users_online",users_online)
        if(lista.length>0) {
            updatelist()
        }
   betlist();
  if(hashwork == 1){
      socket.emit("hash",MD5(hash));

  }
  for(var i = 0;i<mess_list.length;i++){
      socket.emit("answer_message",mess_list[i].nickmess,mess_list[i].mess,mess_list[i].clockmess)
  }
  socket.on("idcheck",function () {
      socket.emit("idchecker",id_profile,nick_profile)
  })
        socket.on("zaloguj",function(login,pass){
            var sql = "SELECT * FROM uzytkownicy WHERE nick = ? AND password = ?";
            if(login == '' || pass == ''){
                socket.emit("infoprint","Uzupełnij wszystkie pola!","red");
            }
            else {
                con.query(sql, [login, pass], function (err, results) {
                    if (results.length <= 0) {
                        socket.emit("infoprint", "Błędne dane,sprawdź login lub hasło", "red");
                    } else {
                        console.log("ktos się zalogował na konto o nicku " + results[0].id);
                        nick_profile = results[0].nick;
                        var coins_profile = results[0].coins;
                        id_profile = results[0].id;
                        socket.emit("zalogowano", nick_profile, coins_profile, login, pass);
                        zalogowany = true;
                        socket.emit("infoprint", "Zalogowałeś się. Witamy "+ nick_profile+" ponownie!", "green");
                    }

                })
            }

        });

            socket.on("balance", function (mg) {
                if(zalogowany == true) {
                    var profile = "SELECT * FROM uzytkownicy WHERE id=?"
                    con.query(profile, [id_profile], function (err, results) {
                        var coinss = results[0].coins;
                        socket.emit("balance_text", coinss);

                    })

                }
            });
            socket.on("updatecoins",function () {
                var profile = "SELECT * FROM uzytkownicy WHERE id=?"
                con.query(profile, [id_profile], function (err, results) {
                    var coinss = results[0].coins;
                    socket.emit("updatecoins", coinss);
                })
            })
        socket.on("obstaw",function(cs,cr,x){
            if(zalogowany == true) {
                if(bet_open == true) {
                    var csp = parseInt(cs);
                    var profile = "SELECT * FROM uzytkownicy WHERE id=?";
                    con.query(profile,[id_profile],function (err,results) {
                            var coins_profile = results[0].coins;

                        if (csp > 10 && (csp % 1) == 0 && csp <= coins_profile && csp < 100000000) {
                            var bet = parseInt(coins_profile)- parseInt(cs);
                            var sql = "UPDATE uzytkownicy SET coins = ? WHERE id = ?";
                            con.query(sql, [bet, id_profile]);
                            socket.emit("updatecoins", bet);

                            var selectbetsql = "SELECT * FROM bety WHERE userid=? AND kolor = ?";
                            con.query(selectbetsql,[id_profile,cr],function (err,results) {
                                if(results.length == 0){
                                    var sqlbet = "INSERT INTO bety VALUES(?,?,?,?)";
                                    con.query(sqlbet,[id_profile,cr,cs,nick_profile]);
                                    if(cr == "red") {
                                        coins_red += parseInt(cs);
                                        totalred += 1
                                    }
                                    if(cr == "green") {
                                        coins_green += parseInt(cs);
                                        totalgreen += 1
                                    }
                                    if(cr == "black") {
                                        coins_black += parseInt(cs);
                                        totalblack += 1
                                    }
                                    socket.emit("infoprint","obstawiłeś "+cs+" coinsów na kolor "+cr,"green");
                                }
                                else{
                                    var sqlbetcoins = parseInt(results[0].coinsy) + parseInt(cs);
                                    var sqlbetupdate = "UPDATE bety SET coinsy = ? WHERE userid = ? AND kolor = ?";
                                    con.query(sqlbetupdate,[sqlbetcoins,id_profile,cr]);
                                    if(cr == "red") {
                                        coins_red += parseInt(cs);

                                    }
                                    if(cr == "green") {
                                        coins_green += parseInt(cs);

                                    }
                                    if(cr == "black") {
                                        coins_black += parseInt(cs);

                                    }
                                    socket.emit("infoprint","obstawiłeś "+cs+" coinsów na kolor "+cr,"green");
                                }
                                betlist();
                            })


                        }
                        else{
                            socket.emit("infoprint","Obstawienie nie powiodło się minimalny bet to 10coinsów","red");//zla liczba coinsow
                        }
                    });

                }
                else{
                    socket.emit("infoprint","Losowanie rozpoczęte poczekaj do następnego losowania","red"); //bety zamkniete
                }
            }
            else{
                socket.emit("infoprint","aby grać należy się zalogować","red");//musisz sie zalogowac
            }
        });
        socket.on("message",(mess)=>{
            if(zalogowany == true) {
               for(var i = 0;i<lista_banow.length;i++){
                   if(lista_banow[i]==id_profile) {
                       ban = 1;
                   }
                }
               if(ban == 1){
                    socket.emit("infoprint", "Posiadasz Bana na czat! Nie możesz już wysyłać wiadomości", "red")
                }
               else {
                   if(blokuj_mess == 0) {
                       if (mess.length >= 5 && mess.length <= 100) {
                           let date = new Date();
                           if (date.getMinutes() < 10) {
                               var clock = date.getHours() + ":0" + date.getMinutes();
                           } else {
                               var clock = date.getHours() + ":" + date.getMinutes();
                           }

                           io.emit("answer_message", nick_profile, mess, clock);
                           var newmess = new message(nick_profile, mess, clock)
                           mess_list.push(newmess)
                           for (var i = 0; i < wulgaryzm.length; i++) {
                               var sprawdzmess = mess.search(wulgaryzm[i])



                           }
                           if (sprawdzmess != -1) {
                               socket.emit("infoprint", "Przeklinanie na czacie grozi nie odwracalnym banem na czat!!!", "red")
                               upomnienie += 1;
                               if (upomnienie >= 4) {
                                   lista_banow.push(id_profile)
                               }
                           }
                           blokuj_mess = 10;
                           var blokuj = setInterval(function () {
                               if(blokuj_mess > 0) {
                                   blokuj_mess -= 1
                               }
                               else{
                                   clearInterval(blokuj)
                               }
                           },1000)
                       } else {
                           socket.emit("infoprint", "Wiadomość nie została wysłana,minimum 5 znaków i maksimum 100", "red")
                       }
                   }
                   else{
                       socket.emit("infoprint", "Odczekaj jeszcze "+blokuj_mess+"s aby wysłać wiadomość", "red")
                   }
                }
            }
            else{
                socket.emit("infoprint","aby wysłać wiadomość musisz się zalogować","red");
            }
        })
        socket.on('disconnect', function() {
            console.log("Client has disconnected");
            users_online -= 1;
            io.emit("users_online",users_online)
        });
    });
var rollsound= "/audio/roll.wav";
var wylosowanosound = "/audio/dzwiek_wylosowano.wav";
activeroulette()
function activeroulette() {

    rouletteon();
    function rouletteon() {
        bet_open = true;
        console.log("Wlączono Timer ruletki");
        var timer = false;
        if (timer == false) {
            var time = 14;
            var timerinterval = setInterval(function () {

                if (time > 0) {
                    io.emit("losowanie", 'Losowanie za ' + parseFloat(time).toFixed(2));
                    time -= 0.01
                }

            }, 10)
            var intervalrefresh = setInterval(function () {
                io.emit("refresh_bets",totalred,totalgreen,totalblack,coins_red,coins_green,coins_black,"niewylosowano")
            },100)
            setTimeout(function () {
                bet_open = false;
                Start(0, 14)
                clearInterval(timerinterval)
                clearInterval(intervalrefresh)

                function Start(mn, mx) {
                    Random(mn, mx);

                }

            }, 14000)



            timer = true
        }
    }


    function Random(min, max) {
        io.emit("losowanie", 'Losowanie...');
        console.log('Losowanie...');
        var rd = Math.floor(Math.random() * (max - min + 1)) + min;
        var num = rd;
        PickDist(num)
    }

    function PickDist(nm) {
        var distance = ['-6900', '-6930', ' -6578', ' -6608', '-6668', '-6700', '-6765', '-6790', '-6855', '-6883', '-7000', ' -7020', '-7089', '-7113', '-7180', '-7205', '-7224', '-7250', '-7135', '-7160', '-7040', '-7070', '-6950', '-6975', '-6810', ' -6835', '-6715', '-6745', '-6625', '-6651']
        for (var i = -1; i < distance.length; i++)
            if (nm == i) {
                var di = i * 2;
                var di2 = (i * 2) + 1;
                RandDist(parseInt(distance[di2]), parseInt(distance[di]))
            }

        function RandDist(minDist, maxDist) {
            var dist = Math.floor(Math.random() * (maxDist - minDist + 1)) + minDist;


            Roll(dist,nm);

        }


    }

    function Roll(n,nm) {
        var pos = 0;
        io.emit("dzwiek",rollsound);
        var intervalrl = setInterval(function(){
            if(pos <= n){

                io.emit("dzwiek",wylosowanosound);
                wylosowano(nm);
                setTimeout(function(){
                    restartroulette()
                },4000)
                clearInterval(intervalrl)
                var ustawninterval = setInterval(function(){
                    io.emit('ruletka',n);
                },100);
                setTimeout(function(){
                    clearInterval(ustawninterval)
                },17900)
            }
            else{
                io.emit("losowanie", 'Losowanie...');
                pos-=2
                var pospx = parseInt(pos) + "px";
                io.emit("ruletka", parseInt(pospx))
                }
        },1)

    }
  function restartroulette()
    {
        activeroulette()
    }
function wylosowano(nm) {
    var wylosowano = ''
    if (nm == 0) {
        wylosowano = 'green'
        img = '/css/img/zac-head.png'

    }
    if (nm <= 7 && nm > 0) {
        wylosowano = 'red';
        img = '/css/img/ornn-head.png'


    }
    if (nm > 7) {
        wylosowano = 'black'
        img = '/css/img/aatrox-head.png'
    }
    hashwork = 1;
    l1 = Math.floor((Math.random() * 9999) + 1);
    hash = "roll"+ l1 + nm;
    io.emit("hash",MD5(hash));

    console.log("Stworzono element "+wylosowano+" "+img+" 35px "+" 35px");
    var kolor = new element(wylosowano,img,"35px", "35px");
    lista.push(kolor);
    console.log(lista[lista.length - 1].color)
    var wylosowanointerval = setInterval(function(){
        io.emit('losowanie', 'Wylosowano kolor ' + wylosowano);
    },1)
    setTimeout(function(){
        clearInterval(wylosowanointerval)
        betlist()
    },4000)
    setTimeout(function(){
            updatelist()

    },2000)
    console.log(nm);
    io.emit("refresh_bets",totalred,totalgreen,totalblack,coins_red,coins_green,coins_black,"wylosowano",wylosowano);
    coins_black = 0;coins_green = 0;coins_red = 0;
    totalblack = 0;totalred = 0;totalgreen = 0;
    var betysql = "SELECT * FROM bety WHERE kolor=?";
    con.query(betysql,[wylosowano],function (err,results) {
if(results.length > 0) {
    for (var i = results.length - 1;i > -1; i--) {
        var idbet = results[i].userid;
        var coins = results[i].coinsy;
        if (wylosowano == "red" || wylosowano == "black") {
            var profit = coins * 2
        } else {
            var profit = coins * 14
        }
        var betsql = "UPDATE uzytkownicy SET coins = coins + ? WHERE id=?";
        con.query(betsql, [profit, idbet]);
        var deletetb = "DELETE FROM bety WHERE userid = ?";
        con.query(deletetb,[idbet]);
        if(i == 0){
            io.emit("refreshcoins");
            var tbdel = "DELETE FROM bety";
            con.query(tbdel);
        }
    }
}
else{
    io.emit("updater");
    var tbdel = "DELETE FROM bety";
    con.query(tbdel);
}

    })
}

}

function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://' + host + ':' + port);
}

var wulgaryzm = ['chuj','chuja', 'chujek', 'chuju', 'chujem', 'chujnia',
    'chujowy', 'chujowa', 'chujowe', 'cipa', 'cipę', 'cipe', 'cipą',
    'cipie', 'dojebać','dojebac', 'dojebie', 'dojebał', 'dojebal',
    'dojebała', 'dojebala', 'dojebałem', 'dojebalem', 'dojebałam',
    'dojebalam', 'dojebię', 'dojebie', 'dopieprzać', 'dopieprzac',
    'dopierdalać', 'dopierdalac', 'dopierdala', 'dopierdalał',
    'dopierdalal', 'dopierdalała', 'dopierdalala', 'dopierdoli',
    'dopierdolił', 'dopierdolil', 'dopierdolę', 'dopierdole', 'dopierdoli',
    'dopierdalający', 'dopierdalajacy', 'dopierdolić', 'dopierdolic',
    'dupa', 'dupie', 'dupą', 'dupcia', 'dupeczka', 'dupy', 'dupe', 'huj',
    'hujek', 'hujnia', 'huja', 'huje', 'hujem', 'huju', 'jebać', 'jebac',
    'jebał', 'jebal', 'jebie', 'jebią', 'jebia', 'jebak', 'jebaka', 'jebal',
    'jebał', 'jebany', 'jebane', 'jebanka', 'jebanko', 'jebankiem',
    'jebanymi', 'jebana', 'jebanym', 'jebanej', 'jebaną', 'jebana',
    'jebani', 'jebanych', 'jebanymi', 'jebcie', 'jebiący', 'jebiacy',
    'jebiąca', 'jebiaca', 'jebiącego', 'jebiacego', 'jebiącej', 'jebiacej',
    'jebia', 'jebią', 'jebie', 'jebię', 'jebliwy', 'jebnąć', 'jebnac',
    'jebnąc', 'jebnać', 'jebnął', 'jebnal', 'jebną', 'jebna', 'jebnęła',
    'jebnela', 'jebnie', 'jebnij', 'jebut', 'koorwa', 'kórwa', 'kurestwo',
    'kurew', 'kurewski', 'kurewska', 'kurewskiej', 'kurewską', 'kurewska',
    'kurewsko', 'kurewstwo', 'kurwa', 'kurwaa', 'kurwami', 'kurwą', 'kurwe',
    'kurwę', 'kurwie', 'kurwiska', 'kurwo', 'kurwy', 'kurwach', 'kurwami',
    'kurewski', 'kurwiarz', 'kurwiący', 'kurwica', 'kurwić', 'kurwic',
    'kurwidołek', 'kurwik', 'kurwiki', 'kurwiszcze', 'kurwiszon',
    'kurwiszona', 'kurwiszonem', 'kurwiszony', 'kutas', 'kutasa', 'kutasie',
    'kutasem', 'kutasy', 'kutasów', 'kutasow', 'kutasach', 'kutasami',
    'matkojebca', 'matkojebcy', 'matkojebcą', 'matkojebca', 'matkojebcami',
    'matkojebcach', 'nabarłożyć', 'najebać', 'najebac', 'najebał',
    'najebal', 'najebała', 'najebala', 'najebane', 'najebany', 'najebaną',
    'najebana', 'najebie', 'najebią', 'najebia', 'naopierdalać',
    'naopierdalac', 'naopierdalał', 'naopierdalal', 'naopierdalała',
    'naopierdalala', 'naopierdalała', 'napierdalać', 'napierdalac',
    'napierdalający', 'napierdalajacy', 'napierdolić', 'napierdolic',
    'nawpierdalać', 'nawpierdalac', 'nawpierdalał', 'nawpierdalal',
    'nawpierdalała', 'nawpierdalala', 'obsrywać', 'obsrywac', 'obsrywający',
    'obsrywajacy', 'odpieprzać', 'odpieprzac', 'odpieprzy', 'odpieprzył',
    'odpieprzyl', 'odpieprzyła', 'odpieprzyla', 'odpierdalać',
    'odpierdalac', 'odpierdol', 'odpierdolił', 'odpierdolil',
    'odpierdoliła', 'odpierdolila', 'odpierdoli', 'odpierdalający',
    'odpierdalajacy', 'odpierdalająca', 'odpierdalajaca', 'odpierdolić',
    'odpierdolic', 'odpierdoli', 'odpierdolił', 'opieprzający',
    'opierdalać', 'opierdalac', 'opierdala', 'opierdalający',
    'opierdalajacy', 'opierdol', 'opierdolić', 'opierdolic', 'opierdoli',
    'opierdolą', 'opierdola', 'piczka', 'pieprznięty', 'pieprzniety',
    'pieprzony', 'pierdel', 'pierdlu', 'pierdolą', 'pierdola', 'pierdolący',
    'pierdolacy', 'pierdoląca', 'pierdolaca', 'pierdol', 'pierdole',
    'pierdolenie', 'pierdoleniem', 'pierdoleniu', 'pierdolę', 'pierdolec',
    'pierdola', 'pierdolą', 'pierdolić', 'pierdolicie', 'pierdolic',
    'pierdolił', 'pierdolil', 'pierdoliła', 'pierdolila', 'pierdoli',
    'pierdolnięty', 'pierdolniety', 'pierdolisz', 'pierdolnąć',
    'pierdolnac', 'pierdolnął', 'pierdolnal', 'pierdolnęła', 'pierdolnela',
    'pierdolnie', 'pierdolnięty', 'pierdolnij', 'pierdolnik', 'pierdolona',
    'pierdolone', 'pierdolony', 'pierdołki', 'pierdzący', 'pierdzieć',
    'pierdziec', 'pizda', 'pizdą', 'pizde', 'pizdę', 'piździe', 'pizdzie',
    'pizdnąć', 'pizdnac', 'pizdu', 'podpierdalać', 'podpierdalac',
    'podpierdala', 'podpierdalający', 'podpierdalajacy', 'podpierdolić',
    'podpierdolic', 'podpierdoli', 'pojeb', 'pojeba', 'pojebami',
    'pojebani', 'pojebanego', 'pojebanemu', 'pojebani', 'pojebany',
    'pojebanych', 'pojebanym', 'pojebanymi', 'pojebem', 'pojebać',
    'pojebac', 'pojebalo', 'popierdala', 'popierdalac', 'popierdalać',
    'popierdolić', 'popierdolic', 'popierdoli', 'popierdolonego',
    'popierdolonemu', 'popierdolonym', 'popierdolone', 'popierdoleni',
    'popierdolony', 'porozpierdalać', 'porozpierdala', 'porozpierdalac',
    'poruchac', 'poruchać', 'przejebać', 'przejebane', 'przejebac',
    'przyjebali', 'przepierdalać', 'przepierdalac', 'przepierdala',
    'przepierdalający', 'przepierdalajacy', 'przepierdalająca',
    'przepierdalajaca', 'przepierdolić', 'przepierdolic', 'przyjebać',
    'przyjebac', 'przyjebie', 'przyjebała', 'przyjebala', 'przyjebał',
    'przyjebal', 'przypieprzać', 'przypieprzac', 'przypieprzający',
    'przypieprzajacy', 'przypieprzająca', 'przypieprzajaca',
    'przypierdalać', 'przypierdalac', 'przypierdala', 'przypierdoli',
    'przypierdalający', 'przypierdalajacy', 'przypierdolić',
    'przypierdolic', 'qrwa', 'rozjebać', 'rozjebac', 'rozjebie',
    'rozjebała', 'rozjebią', 'rozpierdalać', 'rozpierdalac', 'rozpierdala',
    'rozpierdolić', 'rozpierdolic', 'rozpierdole', 'rozpierdoli',
    'rozpierducha', 'skurwić', 'skurwiel', 'skurwiela', 'skurwielem',
    'skurwielu', 'skurwysyn', 'skurwysynów', 'skurwysynow', 'skurwysyna',
    'skurwysynem', 'skurwysynu', 'skurwysyny', 'skurwysyński',
    'skurwysynski', 'skurwysyństwo', 'skurwysynstwo', 'spieprzać',
    'spieprzac', 'spieprza', 'spieprzaj', 'spieprzajcie', 'spieprzają',
    'spieprzaja', 'spieprzający', 'spieprzajacy', 'spieprzająca',
    'spieprzajaca', 'spierdalać', 'spierdalac', 'spierdala', 'spierdalał',
    'spierdalała', 'spierdalal', 'spierdalalcie', 'spierdalala',
    'spierdalający', 'spierdalajacy', 'spierdolić', 'spierdolic',
    'spierdoli', 'spierdoliła', 'spierdoliło', 'spierdolą', 'spierdola',
    'srać', 'srac', 'srający', 'srajacy', 'srając', 'srajac', 'sraj',
    'sukinsyn', 'sukinsyny', 'sukinsynom', 'sukinsynowi', 'sukinsynów',
    'sukinsynow', 'śmierdziel', 'udupić', 'ujebać', 'ujebac', 'ujebał',
    'ujebal', 'ujebana', 'ujebany', 'ujebie', 'ujebała', 'ujebala',
    'upierdalać', 'upierdalac', 'upierdala', 'upierdoli', 'upierdolić',
    'upierdolic', 'upierdoli', 'upierdolą', 'upierdola', 'upierdoleni',
    'wjebać', 'wjebac', 'wjebie', 'wjebią', 'wjebia', 'wjebiemy',
    'wjebiecie', 'wkurwiać', 'wkurwiac', 'wkurwi', 'wkurwia', 'wkurwiał',
    'wkurwial', 'wkurwiający', 'wkurwiajacy', 'wkurwiająca', 'wkurwiajaca',
    'wkurwić', 'wkurwic', 'wkurwi', 'wkurwiacie', 'wkurwiają', 'wkurwiali',
    'wkurwią', 'wkurwia', 'wkurwimy', 'wkurwicie', 'wkurwiacie', 'wkurwić',
    'wkurwic', 'wkurwia', 'wpierdalać', 'wpierdalac', 'wpierdalający',
    'wpierdalajacy', 'wpierdol', 'wpierdolić', 'wpierdolic', 'wpizdu',
    'wyjebać', 'wyjebac', 'wyjebali', 'wyjebał', 'wyjebac', 'wyjebała',
    'wyjebały', 'wyjebie', 'wyjebią', 'wyjebia', 'wyjebiesz', 'wyjebie',
    'wyjebiecie', 'wyjebiemy', 'wypieprzać', 'wypieprzac', 'wypieprza',
    'wypieprzał', 'wypieprzal', 'wypieprzała', 'wypieprzala', 'wypieprzy',
    'wypieprzyła', 'wypieprzyla', 'wypieprzył', 'wypieprzyl', 'wypierdal',
    'wypierdalać', 'wypierdalac', 'wypierdala', 'wypierdalaj',
    'wypierdalał', 'wypierdalal', 'wypierdalała', 'wypierdalala',
    'wypierdalać', 'wypierdolić', 'wypierdolic', 'wypierdoli',
    'wypierdolimy', 'wypierdolicie', 'wypierdolą', 'wypierdola',
    'wypierdolili', 'wypierdolił', 'wypierdolil', 'wypierdoliła',
    'wypierdolila', 'zajebać', 'zajebac', 'zajebie', 'zajebią', 'zajebia',
    'zajebiał', 'zajebial', 'zajebała', 'zajebiala', 'zajebali', 'zajebana',
    'zajebani', 'zajebane', 'zajebany', 'zajebanych', 'zajebanym',
    'zajebanymi', 'zajebiste', 'zajebisty', 'zajebistych', 'zajebista',
    'zajebistym', 'zajebistymi', 'zajebiście', 'zajebiscie', 'zapieprzyć',
    'zapieprzyc', 'zapieprzy', 'zapieprzył', 'zapieprzyl', 'zapieprzyła',
    'zapieprzyla', 'zapieprzą', 'zapieprza', 'zapieprzy', 'zapieprzymy',
    'zapieprzycie', 'zapieprzysz', 'zapierdala', 'zapierdalać',
    'zapierdalac', 'zapierdalaja', 'zapierdalał', 'zapierdalaj',
    'zapierdalajcie', 'zapierdalała', 'zapierdalala', 'zapierdalali',
    'zapierdalający', 'zapierdalajacy', 'zapierdolić', 'zapierdolic',
    'zapierdoli', 'zapierdolił', 'zapierdolil', 'zapierdoliła',
    'zapierdolila', 'zapierdolą', 'zapierdola', 'zapierniczać',
    'zapierniczający', 'zasrać', 'zasranym', 'zasrywać', 'zasrywający',
    'zesrywać', 'zesrywający', 'zjebać', 'zjebac', 'zjebał', 'zjebal',
    'zjebała', 'zjebala', 'zjebana', 'zjebią', 'zjebali', 'zjeby','pizdy','cwel','cwele'];