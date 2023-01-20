const genElement = (array) =>
    <
    div class = "Wiersz" > '

<
p > $ { array[0] } < /p>'  <
    p > $ { array[1] } < /p>'

<
/div>;

const wiersz = ['Bóg mnie opu­ścił - nie wiem cze­mu...',
    'Źle Mu w nie­bio­sach! Wiem, że źle Mu...',
    'Oj­ciec mój tak swą śmierć prze­oczył, ',
    'Że idąc do dom - w grób się sto­czył. ',
    'Sio­stra umar­ła z łez i z gło­du, ',
    'A wszy­scy mó­wią: "Bez po­wo­du!" ',
    'A brat mój tak się z bó­lem ście­rał, ',
    'Żem na­słu­chi­wał, gdy umie­rał...',
    'Ko­chan­ka moja te­raz gi­nie, ',
    'Żem ją po­ko­chał w złej go­dzi­nie. ',
    'A ja - nim mia­sto w mro­ku za­śnie -',
    'Idę uli­cą, idę wła­śnie...'
];

const print =
    () => document
    .getElementById('wiersz')
    .innerHTML = genElement(wiersz);