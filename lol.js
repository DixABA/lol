(function () {

    function addLeadZeroes(value) {
        if (value < 10)
            value = "0" + value;
        return value;
    }

    $(".dixaba-statistics").remove();
    var s = document.createElement('div');
    s.className = "dixaba-statistics";
    var win = $(".game-summary-victory").length;
    var lose = $(".game-summary-defeat").length;
    var total = win + lose;
    var winrate = (win / (win + lose) * 100).toPrecision(4);
    var time = "";
    var avgtime = "";
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var allseconds = 0;

    var divstrl = "<div style='z-index: 1000; display: block; font-size: 20px; color: #660000; background-color: #ffffff; margin: 35px; padding: 5px; position: fixed; border: #000000; border-radius: 5px; border-style: solid' onclick='$(\".dixaba\").toggle();'><b>";

    var divclose = "<div style='top: 0px; right: 0px; width: 20px; height: 20px; display: block; background-color: #ff0000; position: absolute; border-radius: 3px; border-style: none' onclick='$(\".dixaba-statistics\").remove();'></div>";

    var divstrr = "</b></div>";

    $.each($(".date-duration-duration").children(".binding"), function (i, elem) {
        var thistime = $(this).text();
        var aa = new String(thistime);
        var vals = aa.split(":");
        if (vals.length === 2) {
            allseconds += vals[0] * 60;
            allseconds += vals[1] - 0;
        } else {
            allseconds += vals[0] * 3600;
            allseconds += vals[1] * 60;
            allseconds += vals[2] - 0;
        }
    });

    minutes = allseconds / 60;
    hours = minutes / 60;

    seconds = parseInt(allseconds % 60);
    minutes = parseInt(minutes % 60);
    hours = parseInt(hours);

    time = hours + ":" + addLeadZeroes(minutes) + ":" + addLeadZeroes(seconds);

    allseconds /= total;
    minutes = allseconds / 60;
    hours = minutes / 60;

    seconds = parseInt(allseconds % 60);
    minutes = parseInt(minutes % 60);
    hours = parseInt(hours);

    avgtime = hours + ":" + addLeadZeroes(minutes) + ":" + addLeadZeroes(seconds);

    var allk = 0;
    var alld = 0;
    var alla = 0;

    $.each($(".kda-plate-kda"), function (i, elem) {
        var thiskda = $(this).text();
        var aa = new String(thiskda);
        var vals = aa.split("/");
        allk += vals[0] - 0;
        alld += vals[1] - 0;
        alla += vals[2] - 0;
    });

    var kda = (allk / total).toPrecision(4) + "/";
    kda += (alld / total).toPrecision(4) + "/";
    kda += (alla / total).toPrecision(4);

    var allminions = 0;

    $.each($(".income-minions"), function (i, elem) {
        var thisminions = $(this).text();
        allminions += thisminions - 0;
    });

    var minions = (allminions / total).toPrecision(5);

    var allgold = 0;

    $.each($(".income-gold"), function (i, elem) {
        var thisgold = parseFloat($(this).text());
        allgold += thisgold;
    });

    var gold = (allgold / total).toPrecision(4) + 'k';

    function addition() {
        return  "<br>Суммарное время игр - " + time + "<br>Среднее время игры - " + avgtime + "<br>Средний KDA - " + kda + "<br>Среднее количество миньонов - " + minions + "<br>Среднее количество золота - " + gold;
    }
    function basic() {
        return "Всего игр - " + total + "<br>Побед - " + win + "<br>Поражений - " + lose + "<br>Винрейт - " + winrate + "%";
    }

    s.innerHTML = "<div class='dixaba'>" + divstrl + divclose + basic() + divstrr + "</div>" + "<div class='dixaba' style='display: none'>" + divstrl + divclose + basic() + addition() + divstrr + "</div>";
    document.body.insertBefore(s, document.body.firstChild);
}).call(this);
