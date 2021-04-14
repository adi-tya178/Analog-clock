setInterval(time, 1)

    function time() {
        var date = new Date()
        var m_sec_n = document.querySelector(".ms");
        var m_sec = date.getMilliseconds();
        var new_mill_sec = ((m_sec / 60) * 360 + 90);
        m_sec_n.style.transform = `rotate(${new_mill_sec}deg)`;
        var sec_n = document.querySelector(".sec");
        var sec = date.getSeconds();
        var new_sec = ((sec / 60) * 360 + 90);
        sec_n.style.transform = `rotate(${new_sec}deg)`;
        var min_n = document.querySelector(".min");
        var min = date.getMinutes();
        var new_min = ((min / 60) * 360 + 90);
        min_n.style.transform = `rotate(${new_min}deg)`;
        var hour_n = document.querySelector(".hour");
        var hour = date.getHours();
        var new_hour = ((hour / 12) * 360 + 90 + (0.5 * min));
        hour_n.style.transform = `rotate(${new_hour}deg)`;
        var clock_date=document.querySelector("li");
        var din=date.toDateString();
        clock_date.innerHTML=`${din} `
    }
