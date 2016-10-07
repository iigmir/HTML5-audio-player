window.onload = function()
{
    /* init Part */
    var song_list =
    [
        ["https://upload.wikimedia.org/wikipedia/commons/4/4f/ScottishCeltic.ogg","Traditional Scottish music"],
        ["https://upload.wikimedia.org/wikipedia/commons/6/60/Guqin-Yangguan_Sandie.ogg","陽關三疊"],
        ["https://upload.wikimedia.org/wikipedia/commons/7/7d/Der_Hoelle_Rache.ogg","Der Hölle Rache kocht in meinem Herzen"],
        ["https://upload.wikimedia.org/wikipedia/commons/5/59/The_Stars_and_Stripes_Forever_-_U.S._Navy_Band.ogg","The Stars and Stripes Forever"]
    ];
    var song_pos = 0;
    function make_playlist()
    {   // Create playlist in select tag so that user can select song by click list
        var playlist_js = document.getElementById("playlist");
        
        for (var mpi=0;mpi<song_list.length;mpi++)
        {
            var mp_song = document.createElement("OPTION");
            var t = document.createTextNode( song_list[mpi][1] );
            mp_song.appendChild(t);
            playlist_js.appendChild(mp_song);
        }
    }
    make_playlist();
    
    /* create variables */
    var song_name_js = document.getElementById("song_name");
    var prev_song_js = document.getElementById("prev_song");
    var next_song_js = document.getElementById("next_song");
    var play_song_js = document.getElementById("play_song");
    var rand_song_js = document.getElementById("rand_song");
    var end_song_behavior_js = document.getElementsByName("end_song_behavior");
    
    /* Load first song */
    play_song_js.src       = song_list[0][0];
    play_song_js.title     = song_list[0][1];
    song_name_js.innerHTML = song_list[0][1];
    play_song_js.play();
    
    /* song change action */
    function change_song()
    {   // reset, and play song
        play_song_js.src   = song_list[song_pos][0];
        play_song_js.title = song_list[song_pos][1];
        play_song_js.currentTime = 0;
        play_song_js.play();
        song_name_js.innerHTML = play_song_js.getAttribute("title");
    }
    function shuffle_song()
    {   // generate num whiich not same as playing track, then switch
        var rand_num = Math.round( Math.random() * (song_list.length-1) );
        while( song_pos == rand_num ) { rand_num = Math.round( Math.random() * (song_list.length-1) ); }
        song_pos = rand_num;
        change_song();
    }
    
    /* player control part */
    prev_song_js.onclick = function()
    {   // prev song method
        if ( song_pos==0 ) { song_list.length-1; }
        else { song_pos -= 1; }
        change_song();
    }
    next_song_js.onclick = function()
    {   // next song method
        if ( song_pos==song_list.length-1 ) { song_pos = 0; }
        else { song_pos += 1; }
        change_song();
    }
    rand_song_js.onclick = function() { shuffle_song(); }
    play_song_js.onended = function()
    {   // do what radio checked
        if( end_song_behavior_js[1].checked == true )
        {   // repeat
            play_song_js.currentTime = 0;
            play_song_js.play();
        }
        else if( end_song_behavior_js[2].checked == true )
        {   // shuffle
            shuffle_song();
        }
        else
        {   // next, defaulr
            if ( song_pos==song_list.length-1 ) { song_pos = 0; }
            else { song_pos += 1; }
            change_song();
        }
    }
    playlist.onchange = function()
    {   // if click list, play selected song
        song_pos = playlist.selectedIndex;
        change_song();
    }
}

