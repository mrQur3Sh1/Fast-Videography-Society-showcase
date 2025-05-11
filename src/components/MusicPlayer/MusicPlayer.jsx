import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);  // Initially muted to bypass autoplay policy
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = async () => {
      try {
        if (isPlaying) {
          await audio.play();
        } else {
          audio.pause();
        }
      } catch (error) {
        console.log("Audio playback prevented: ", error);
        setIsPlaying(false);
      }
    };

    playAudio();

    // Update mute state
    audio.muted = isMuted;

    return () => {
      audio.pause();
    };
  }, [isPlaying, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        loop
        src="/assets/desolate.mp3"  // Assuming the file is in the 'public/assets' folder
      />

      <motion.div
        className="player-toggle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleVisibility}
      >
        <Music size={20} />
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="player-controls glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p>Background Music</p>
            <div className="control-buttons">
              <motion.button
                className="play-toggle"
                onClick={togglePlay}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </motion.button>
              <motion.button
                className="mute-toggle"
                onClick={toggleMute}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;
