function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Xunk9FdlU6":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v14q1attempts:player.GetVar("v14q1attempts"),v14q1answeredcorrect:player.GetVar("v14q1answeredcorrect"),v14q2attempts:player.GetVar("v14q2attempts"),v14q2answeredcorrect:player.GetVar("v14q2answeredcorrect"),v14q3attempts:player.GetVar("v14q3attempts"),v14q3answeredcorrect:player.GetVar("v14q3answeredcorrect")})
	}
	)
}

