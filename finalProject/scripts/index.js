const kanjiQ = document.getElementById("KanjiQ");

let kanji = [["read","外国","がいこく"],["read","川","かわ"],["read","温泉","おんせん"],["read","湖","みずうみ"],["read","山","やま"],["read","神社","じんじゃ"],["read","美術館","びじゅつかん"],["read","社長","しゃちょう"],["read","歌手","かしゅ"],["read","将来","しょうらい"],["read","夢","ゆめ"],["read","お祭り","おまつり"],["read","お正月","おしょうがつ"],["read","お菓子","おかし"],["read","今学期","こんがっき"],["read","来学期","らいがっき"],["read","飼う","かう"],["read","取る","とる"],["read","習う","ならう"],["read","登る","のぼる"],["read","走る","はしる"],["read","疲れる","つかれる"],["read","紹介する","しょうかいする"],["read","遅刻する","ちこくする"],["read","留学する","りゅうがくする"],["read","出身","しゅっしん"],["read","久しぶり","ひさしぶり"],["read","後","あと"],["read","点","てん"],["define","外国","foreign country"],["define","川","river"],["define","温泉","hot spring"],["define","湖","lake"],["define","山","mountain"],["define","神社","shrine"],["define","美術館","art museum"],["define","社長","president of a company"],["define","歌手","singer"],["define","将来","future"],["define","夢","dream"],["define","お祭り","festival"],["define","お正月","New Year's"],["define","お菓子","sweets"],["define","今学期","this semester"],["define","来学期","next semester"],["define","飼う","to own"],["define","取る","to take"],["define","習う","to learn"],["define","登る","to climb"],["define","走る","to run"],["define","疲れる","to get tired"],["define","紹介する","to introduce"],["define","遅刻する","to be late"],["define","留学する","to study abroad"],["define","出身","coming from"],["define","久しぶり","it has been a long time"],["define","後","after"],["define","点","points"]];



submit.addEventListener("click",answer);


let rand = getRandomInt(kanji.length);
let kSent= "How do you ";
kSent+=kanji[rand][0];
kSent+=" ";
kSent+=kanji[rand][1];
kSent+="?";


kanjiQ.innerHTML= kSent;

function nextQ(){
    tries = 3;
    rand = getRandomInt(kanji.length); 
    kSent= "How do you ";
    kSent+=kanji[rand][0];
    kSent+=" ";
    kSent+=kanji[rand][1];
    kSent+="?";
    kanjiQ.innerHTML= kSent;
    document.getElementById("demo").innerHTML="";

}

let tries = 3;

function answer(){
    let x = document.getElementById("kanjiF");
    let text = "";
    let i;
    
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value;
    }   

    if (text === kanji[rand][2]){
        document.getElementById("demo").innerHTML = "Correct!";
    
    }
    if (tries!=0 && text != kanji[rand][2]){
        tries-=1;
        document.getElementById("demo").innerHTML = "Try again!";
    }
    if (tries===0 && text != kanji[rand][2]){
        document.getElementById("demo").innerHTML = kanji[rand][2];
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



