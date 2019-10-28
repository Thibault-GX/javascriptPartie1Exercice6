let submit = document.getElementById('submit');
submit.onclick = function()
{
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  if (isNaN(firstNumber) || isNaN(secondNumber))
  {
    alert('Nous arnaque pas, coco. Faut rentrer des nombres !');
    return false;
  }
  result = firstNumber / secondNumber;
  alert(`Le résultat de la division de ces deux nombres est ${result}.`);
}
