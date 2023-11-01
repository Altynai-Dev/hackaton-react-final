// import React, {useState, useRef, useEffect} from 'react'
// import SongControls from './SongControls';
// import SongDetails from './SongDetails';
// import "./StyleSongPlayer.css"

// function SongPlayer(props) {
//     const audioEl = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     useEffect(() => {
//         if (isPlaying) {
//             audioEl.current.play();
//         } else {
//             audioEl.current.pause();
//         }
//     });

//     const SkipSong = (forwards = true) => {
//         if (forwards) {
//             props.setCurrentSongIndex(() => {
//                 let temp = props.currentSongIndex;
//                 temp++;

//                 if (temp > props.songs.length - 1) {
//                     temp = 0;
//                 }

//                 return temp;
//             });
//         } else {
//             props.setCurrentSongIndex(() => {
//                 let temp = props.currentSongIndex;
//                 temp--;

//                 if (temp < 0) {
//                     temp = props.songs.length - 1;
//                 }

//                 return temp;
//             });
//         }
//     }

//     return (
//         <div className="c-player">
//             <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
//             <h4>Playing now</h4>
//             <SongDetails song={props.songs[props.currentSongIndex]} />
//             <SongControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
//             <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
//         </div>
//     )
// }

// export default SongPlayer;