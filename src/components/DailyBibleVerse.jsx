
import { useEffect, useState } from "react";
import "./DailyBibleVerse.css";

const verses = [
  {
    text: "The LORD is my shepherd; I shall not want.",
    reference: "Psalm 23:1",
  },
  {
    text: "I can do all things through Christ which strengtheneth me.",
    reference: "Philippians 4:13",
  },
  {
    text: "Be still, and know that I am God.",
    reference: "Psalm 46:10",
  },
  {
    text: "Trust in the LORD with all thine heart.",
    reference: "Proverbs 3:5",
  },
  {
    text: "The LORD is my light and my salvation; whom shall I fear?",
    reference: "Psalm 27:1",
  },
  {
    text: "With God all things are possible.",
    reference: "Matthew 19:26",
  },
  {
    text: "Let all that you do be done in love.",
    reference: "1 Corinthians 16:14",
  },
  {
    text: "The joy of the LORD is your strength.",
    reference: "Nehemiah 8:10",
  },
  {
    text: "Pray without ceasing.",
    reference: "1 Thessalonians 5:17",
  },
  {
    text: "Give thanks unto the LORD; for he is good.",
    reference: "Psalm 107:1",
  },
  {
    text: "For we walk by faith, not by sight.",
    reference: "2 Corinthians 5:7",
  },
  {
    text: "The LORD bless thee, and keep thee.",
    reference: "Numbers 6:24",
  },
  {
    text: "Jesus Christ the same yesterday, and to day, and for ever.",
    reference: "Hebrews 13:8",
  },
  {
    text: "Love one another, as I have loved you.",
    reference: "John 15:12",
  },
];

function getDailyVerse() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const dayNumber = Math.floor(
    (today - startOfYear) / (1000 * 60 * 60 * 24)
  );

  return verses[(dayNumber - 1) % verses.length];
}

function DailyBibleVerse() {
  const [verse, setVerse] = useState(getDailyVerse);

  useEffect(() => {
    const updateVerse = () => {
      setVerse(getDailyVerse());
    };

    const timer = setInterval(updateVerse, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="daily-verse-section">
      <div className="daily-verse-card">
        <p className="daily-verse-label">VERSE OF THE DAY</p>

        <div className="daily-verse-cross">✝</div>

        <blockquote className="daily-verse-text">
          “{verse.text}”
        </blockquote>

        <p className="daily-verse-reference">
          — {verse.reference}
        </p>

        <p className="daily-verse-footer">
          Let God's Word guide your heart and strengthen your faith.
        </p>
      </div>
    </section>
  );
}

export default DailyBibleVerse;
