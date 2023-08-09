var mysong = document.getElementById("mysong");
 var icon = document.getElementById("icon");
   
        icon.onclick = function(){
            if(mysong.paused){
                mysong.play();
                icon.src="/Music/pause.png";
            }
            else
            {
                mysong.pause();
                icon.src="/Music/play-button.png";
            }
            
        }
       