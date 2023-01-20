var button = document.getElementById('button');

button.addEventListener('click', function(e) {
    var name = document.getElementById('name');

    if (textBox.value !== 'TEST') {
        e.preventDefault();
        textBox.setCustomValidity('Powinieneś napisać TEST!');
    } else {
        textBox.setCustomValidity('');
    }
});

function sprawdz()
{
	if(!formularz.elements['imie'].value.match(/^[A-ZĄĘŻŹĆŁÓŚŃ][a-ząężźćłóśń][a-ząężźćłóśń]+$/))
	{
		alert("Pole imię nie może być puste, musi zaczynać się od wielkiej litery,\n musi mieć długość co najmniej 3 i może zawierać tylko litery!");
		return false;
  } 
	else 	if(!formularz.elements['nazwisko'].value.match(/^[A-ZĄĘŻŹĆŁÓŚŃ][a-ząężźćłóśń][a-ząężźćłóśń]+$/))
	{
		alert("Pole nazwisko nie może być puste, musi zaczynać się od wielkiej litery,\n musi mieć długość co najmniej 3 i może zawierać tylko litery!");
		return false;
  }
	else 	if(!formularz.elements['waga'].value.match(/^[0-9.]+$/))
	{
		alert("Pole waga może zawierać tylko cyfry i kropkę!");
		return false;
	}

  return true;
}