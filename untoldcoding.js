const text =
  "Dear Lovie ko , THIS IS FOR YOU POOOOOO:33333 . HELLO PO MY LOVIE DOVIE LOVE CUTIEPIE PANCIT CANTON HONEY BUNCH SUGAR PLUM PLUM KOOOOOOO HAPPY 8TH MONTHSARY LOVIE KOOOOO, grabe no sobrang dami napo nating pinag daanan im so happy na nasa tabi parin po kita hays grabe love na love talaga kita mahal ko sorry po kung lagi kitang nasasaktan mahal ko im really trying my best po na mag bago sana po may nakikita kang pag babago po sakin wag mo po sanang sukuan ako even if my actions are making you give up:((( i feel like im doing those unconsciously and im so immature po i know na naiintindihan mo po ako mahal ko kahit po ganun sorry parin po kaya love im so thankful na i have you and im so happy na meron akong gf na katulad mo hindi nako hihiling o mag hahanap pa ng iba love love ko youre my everything youre my one and only girl love ko im all yours🥰🥰🥰🥰🥰❤❤❤❤🖤🖤🖤🖤🖤🖤🖤😘😘😘😘😘😘 SOBRANG NA APPRECIATE PO KITA MAHAL KOOOOOOOOOOO ILOVEYOUSOMUCHMOREEEEEEEESSSSTTTTT FOR ETERNITY AND BEYOND TILL DEATH FOREVER AND EVEEEEEEERRR MAWMAWMAWMAWMMAWMAWMWMAMMWMAWMMWAMWMWMAMWWAAAAAAA THANKYOU FOR EVERYTHING BABAWI PO AKOOOOOOO!!!!!!🖤❤🥰😍😘. ...........";

const paragraph = text.split("");
let i = 0;

document.body.style.backgroundColor = "yellow";

function dashOut(arr) {
  if (i < arr.length) {
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  if (!letter) return 0; // Handle undefined case

  if (/[;.,]/.test(letter)) {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
