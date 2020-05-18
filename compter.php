<script language="JavaScript">
    <!--
    var startTime = 0;
    var start = 0;
    var end = 0;
    var diff = 0;
    var timerID = 0;
    var storage = [];

    function chrono()
    {
        end = new Date();
        diff = end - start;
        diff = new Date(diff);
        var msec = diff.getMilliseconds();
        var sec = diff.getSeconds();
        var min = diff.getMinutes();
        var hr = diff.getHours() - 1;
        if (min < 10)
        {
            min = "0" + min;
        }
        if (sec < 10)
        {
            sec = "0" + sec;
        }
        if (msec < 10)
        {
            msec = "00" + msec;
        } else if (msec < 100)
        {
            msec = "0" + msec;
        }
        document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec;
        timerID = setTimeout("chrono()", 10);
    }

    function chronoStart()
    {
        document.chronoForm.startstop.value = "stop!";
        document.chronoForm.startstop.onclick = chronoStop;
        document.chronoForm.reset.onclick = chronoReset;
        start = new Date();
        chrono()
    }

    function chronoContinue()
    {
        document.chronoForm.startstop.value = "stop!";
        document.chronoForm.startstop.onclick = chronoStop;
        document.chronoForm.reset.onclick = chronoReset;
        start = new Date() - diff;
        start = new Date(start);
        chrono();
    }

    function chronoReset()
    {
        document.getElementById("chronotime").innerHTML = "0:00:00:000";
        start = new Date()
    }

    function chronoStopReset()
    {
        document.getElementById("chronotime").innerHTML = "0:00:00:000";
        document.chronoForm.startstop.onclick = chronoStart
    }

    function chronoStop()
    {
        document.chronoForm.startstop.value = "start!";
        document.chronoForm.startstop.onclick = chronoContinue;
        document.chronoForm.reset.onclick = chronoStopReset;
        clearTimeout(timerID)
    }

    function valuestore()
    {
        var chronostore = document.getElementById('chronotime').textContent;

        storage.push(chronostore);
        console.log(storage);

        document.getElementById('affichage').innerHTML = '';

        for (var i = 0; i < storage.length; i++)
        {
            document.getElementById('affichage').innerHTML +=  i+1 +' : '+storage[i]+'<br />';
        }
    }

    //-->
</script>
<!DOCTYPE html>
<html lang="fr" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>

		<span id="chronotime">0:00:00:00</span>
		<form name="chronoForm">
			<input type="button" name="startstop" value="start!" onClick="chronoStart()"/>
			<input type="button" name="reset" value="reset!" onClick="chronoReset()"/>
			<input type="button" name="tours" onClick="valuestore()" value="Tour">
		</form>
		<div id="affichage"></div>
	</body>
</html>
