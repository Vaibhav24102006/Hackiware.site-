import { useEffect, useMemo, useState } from "react";

const fallbackWords = ["Future", "Motion", "Neon"];

const Typewriter = ({ words = fallbackWords, speed = 120, pause = 1600 }) => {
  const normalizedWords =
    Array.isArray(words) && words.length ? words : fallbackWords;
  const dictionaryKey = JSON.stringify(normalizedWords);
  const dictionary = useMemo(
    () => JSON.parse(dictionaryKey),
    [dictionaryKey]
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handle = setTimeout(() => {
      if (!deleting && subIndex === dictionary[index].length) {
        setDeleting(true);
        return;
      }

      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % dictionary.length);
        return;
      }

      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(handle);
  }, [dictionary, deleting, index, speed, subIndex]);

  useEffect(() => {
    if (!deleting && subIndex === dictionary[index].length) {
      const pauseTimer = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(pauseTimer);
    }
    return undefined;
  }, [deleting, dictionary, index, pause, subIndex]);

  return (
    <span className="typewriter border-r border-white/50 pr-1 font-orbitron text-hacki-cyan">
      {dictionary[index].substring(0, subIndex)}
    </span>
  );
};

export default Typewriter;
