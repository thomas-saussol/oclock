$(document).ready(function () {

    horloge();
    var horlogeWidth = $('#horloge').innerWidth();
    $(".hms").css("width", horlogeWidth);

    $("#ccountdown").hide();

    $("#navhorloge").click(function() {
        $("#imghorloge").attr("src", "img/horloge.png");
        $("#phorloge").css("color", "#ea225a");
        $("#imgreveil").attr("src", "img/reveil0.png");
        $("#preveil").css("color", "#454545");
        $("#imgcountdown").attr("src", "img/countdown0.png");
        $("#pcountdown").css("color", "#454545");
        $("#imgchrono").attr("src", "img/chrono0.png");
        $("#pchrono").css("color", "#454545");
        $("#chorloge").show();
        $("#ccountdown").hide();
    })

    $("#navcountdown").click(function() {
        $("#imghorloge").attr("src", "img/horloge0.png");
        $("#phorloge").css("color", "#454545");
        $("#imgreveil").attr("src", "img/reveil0.png");
        $("#preveil").css("color", "#454545");
        $("#imgcountdown").attr("src", "img/countdown.png");
        $("#pcountdown").css("color", "#ea225a");
        $("#imgchrono").attr("src", "img/chrono0.png");
        $("#pchrono").css("color", "#454545");
        $("#chorloge").hide();
        $("#ccountdown").show();
    })
    
    $("#navreveil").click(function() {
        $("#imghorloge").attr("src", "img/horloge0.png");
        $("#phorloge").css("color", "#454545");
        $("#imgreveil").attr("src", "img/reveil.png");
        $("#preveil").css("color", "#ea225a");
        $("#imgcountdown").attr("src", "img/countdown0.png");
        $("#pcountdown").css("color", "#454545");
        $("#imgchrono").attr("src", "img/chrono0.png");
        $("#pchrono").css("color", "#454545");
        $("#chorloge").hide();
        $("#ccountdown").hide();
    })

    $("#navchrono").click(function() {
        $("#imghorloge").attr("src", "img/horloge0.png");
        $("#phorloge").css("color", "#454545");
        $("#imgreveil").attr("src", "img/reveil0.png");
        $("#preveil").css("color", "#454545");
        $("#imgcountdown").attr("src", "img/countdown0.png");
        $("#pcountdown").css("color", "#454545");
        $("#imgchrono").attr("src", "img/chrono.png");
        $("#pchrono").css("color", "#ea225a");
        $("#chorloge").hide();
        $("#ccountdown").hide();
    })

    function horloge() {

        var d = new Date();
    
        if ( d.getHours() < 10 ) {
            var heures = "0"+d.getHours();
        }
        else {
            var heures = d.getHours();
        }

        if ( d.getMinutes() < 10 ) {
            var minutes = "0"+d.getMinutes();
        }
        else {
            var minutes = d.getMinutes();
        }
        
        if ( d.getSeconds() < 10 ) {
            var secondes = "0"+d.getSeconds();
        }
        else {
            var secondes = d.getSeconds();
        }

        var affichage = heures+" : "+minutes+" : "+secondes;
        $("#horloge").html(affichage);

        setInterval(function() {

            var d = new Date();
    
            if ( d.getHours() < 10 ) {
                var heures = "0"+d.getHours();
            }
            else {
                var heures = d.getHours();
            }
    
            if ( d.getMinutes() < 10 ) {
                var minutes = "0"+d.getMinutes();
            }
            else {
                var minutes = d.getMinutes();
            }
            
            if ( d.getSeconds() < 10 ) {
                var secondes = "0"+d.getSeconds();
            }
            else {
                var secondes = d.getSeconds();
            }

            var affichage = heures+" : "+minutes+" : "+secondes;
            $("#horloge").html(affichage);

        }, 1000);
    }

    function countdown() {

        $("#navreveil").click(function() {

        })

    }

    $("#ups").click(function() {
        var num = +$("#cdsecondes").val() + 1;
        $("#cdsecondes").val(num);
    })

    $("#upm").click(function() {
        var num = +$("#cdminutes").val() + 1;
        $("#cdminutes").val(num);
    })

    $("#uph").click(function() {
        var num = +$("#cdheures").val() + 1;
        $("#cdheures").val(num);
    })


    $("#downs").click(function() {
        if ( $("#cdsecondes").val() != "0" ) {
            var num = +$("#cdsecondes").val() - 1;
            $("#cdsecondes").val(num);
        }
    })
    
    $("#downm").click(function() {
    if ( $("#cdminutes").val() != "0" ) {
        var num = +$("#cdminutes").val() - 1;
        $("#cdminutes").val(num);
    }
    })
    
    $("#downh").click(function() {
        if ( $("#cdheures").val() != "0" ) {
        var num = +$("#cdheures").val() - 1;
        $("#cdheures").val(num);
        }
    })

    // ALARM CLOCK

    var alarmSound = new Audio();
    alarmSound.src = "reveil.mp3";
    alarmSound.currentTime = 48;
    alarmSound.volume = 0.2;

    function setAlarm(j) {
        var alarmValue = document.getElementById("datepicker").valueAsNumber;
        console.log(alarmValue);
        if ( isNaN(alarmValue) ) {
            alert("Merci de rentrer une date valide.");
            return;
        }

        var alarm = new Date(alarmValue);
        var alarmTime =  new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
        var diff = alarmTime.getTime() - (new Date()).getTime();

        if ( diff < 0 ) {
            alert("La date choisi est déjà passée.");
            return;
        }

        const k = i;

        setTimeout(function() {
            initAlarm(k, j);
        }, diff);

        if ( alarm.getUTCHours() < 10 ) {
            var alarmHoursText = "0" + alarm.getUTCHours();
        }
        else {
            var alarmHoursText = alarm.getUTCHours();
        }

        if ( alarm.getUTCMinutes() < 10 ) {
            var alarmMinutesText = "0" + alarm.getUTCMinutes();
        }
        else {
            var alarmMinutesText = alarm.getUTCMinutes();
        }

        var now=new Date();
        var result=alarmTime.getTime()-now.getTime();
    
        var jours=parseInt(result/86400000);
        var hours=parseInt((result%86400000)/3600000);
        var minutes=parseInt((result%3600000)/60000);
        var secondes=parseInt((result%60000)/1000);

        $("#noAlarm").remove();
        $("#alarmList").append("<article class='alarmRecap'><p class='alarmTitle alarmTitle"+k+"'>"+$("#alarmTitle").val()+"</p><p class='alarmTimeDay'>"+alarm.getUTCDate()+"/"+(alarm.getUTCMonth()+1)+"/"+alarm.getUTCFullYear()+"</p><p class='alarmTime'>"+alarmHoursText+":"+alarmMinutesText+"</p><p class='alarmTimeDay alarmTimeDay"+i+"'>Sonne dans "+jours+"j, "+hours+"h et "+minutes+"min et "+secondes+"s</p>"+"</article>");
    }


    function initAlarm(i, j) {
        alarmSound.play();
        console.log(i, j);
        $(".calarmPop").remove();

        $("main").append('<section class="calarmPop calarmPop'+i+'"><section class="alarmPop"><article class="alarmPopContent"><h1 class="title1">'+j+'</h1><section class="cBtnPopup"><button class="snooze">Snooze(10min)</button><button class="stopit">Stop</button></section></article></section></section>');
        $(".alarmTimeDay"+i).html("Passée");
    }

    function stopAlarm() {
        $(".calarmPop").remove();
        alarmSound.pause();
        alarmSound.currentTime = 48;
    }

    function snoozeAlarm() {
        $(".calarmPop").remove();
        alarmSound.pause();
        alarmSound.currentTime = 48;

        setTimeout(function() {
            alarmSound.play();
            $("main").append('<section class="calarmPop"><section class="alarmPop"><article class="alarmPopContent"><h1 class="title1">Repeat</h1><section class="cBtnPopup"><button class="snooze">Snooze(10min)</button><button class="stopit">Stop</button></section></article></section></section>');
        }, 3000);
    }

    $(document).on('click', '.snooze', function(){ 
        snoozeAlarm();
    });

    $(document).on('click', '.stopit', function(){ 
        stopAlarm();
    });

    var i = 0;

    $("#alarmbtn").click(function() {
        if ( $("#alarmTitle").val() != "" ) {
            setAlarm($("#alarmTitle").val());
            i++;
        }
        else {
            alert("Merci de remplir tous les champs.");
        }
    })
        
})