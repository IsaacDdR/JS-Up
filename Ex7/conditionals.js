var shoppingDone = false;
if(shoppingDone === true){
  var childsAllowance = 10;
}else {
  var childsAllowance = 5;
}

var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather(){
  var choice = select.value;

  if (choice === 'sunny'){
    para.textContent = "Va a esar soleado carnal";
  } else if (choice === 'snowing'){
    para.textContent = 'Va a estar nevando carnal';
  }else if (choice === "rainy"){
    para.textContent = 'Va a estar lloviendo carnal';
  }else if (choice === "overcast"){
    para.textContent = "Va a esar nublado carnal";
  }else{
    para.textContent = " ";
  }

  if (choice === "sunny"){
    if (temperature < 86){
      para.textContent = "It is at" + temperature + 'Really smooth climate';
    }else if (temperature > 86){
      para.textContent = "It's at" + temperature + "Really fkn hot af";
    }
  }

  if (choice ===  'sunny' &&  temperature < 86){
    para.textContent = "It is " + temperature + "It is sunny but you can make it";
  }else if (chice === 'sunny' && temperature >= 86){
    para.texContent = "It is" + temperature + "It is HOT as HELL!";
  }

}

var cheese = "Cheddar";

if (cheese){
  console.log('Tremendo quezardo!');
}else {
  console.log('No hay nada por aqui');
}

var shoppingDone = false;

if (shoppingDone){
  var childsAllowance = 10;
}else{
  var childsAllowance = 5;
}
