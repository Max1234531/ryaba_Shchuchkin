
function handleButton() {
  $.getJSON(
  	'https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f',
  	function(data){
  		showText(data)
  	}
  )
}

function showText(data) {
	let oldText = `${data.text}`;
	console.log(oldText);
	$("#oldText").text(oldText);
}

function handleData(data) {
	const var1 = $("input[name=var1]").val();
	const var2 = $("input[name=var2]").val();
	const var3 = $("input[name=var3]").val();
	const var4 = $("input[name=var4]").val();
	const var5 = $("input[name=var5]").val();
	const var6 = $("input[name=var6]").val();
	const speach = $("input[name=speach]").val();

  	let text = `Жили-были ${var1} да ${var2}, Была у них ${var3}, Снесла ${var3} ${var4}, 
  	не простое - золотое, ${var1} бил, бил - не разбил, ${var2} била, била - не разбила,
  	${var5} бежала, ${var6} задела, ${var4} упало и разбилось, ${var1} плачет, ${var2} плачет, 
  	а ${var3} кудахчет: "${speach}."`;

	$("#result").text(text);

}

function init() {
	$("#button-oldtext").click(handleButton);
	// $("#button-oldtext").click(showText);
	$("#button-fetch").click(handleData);
}

$(document).ready(init);
