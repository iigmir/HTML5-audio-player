# HTML5-audio-player
Play music in browser with playlist.
Handle audio files copyright by yourself.

# How to add song
song_list in player.js likes playlist in player software.
To use it, you need to know site of audio file, and name of audio file.
Create an array, put site of audio file at first element of array.
Name of audio file should in second element of array.
Example: ["https://www.example.com/foobar.mp3" , "Foobar music"]

## I want to play song by myself, not by my browser
Delete "play_song_js.play();" in player.js.
