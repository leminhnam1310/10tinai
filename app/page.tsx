"use client";

import { useEffect, useRef, useState } from "react";

export default function TenTIN() {

// =========================
// STATES
// =========================

const [darkMode, setDarkMode] =
useState(true);

const [input, setInput] =
useState("");

const [typing, setTyping] =
useState(false);

const [breath, setBreath] =
useState(false);

const [quote, setQuote] =
useState(0);

const [mood, setMood] =
useState("");

const [currentSection, setCurrentSection] =
useState("home");

const messagesEndRef =
useRef(null);

// =========================
// BACKGROUNDS
// =========================

const backgrounds = {
dark: {
home:
"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",

  relax:
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop",

  music:
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",

  mood:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
},

light: {
  home:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",

  relax:
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2070&auto=format&fit=crop",

  music:
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop",

  mood:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
},

};

const [background, setBackground] =
useState(backgrounds.dark.home);

useEffect(() => {
const mode =
darkMode ? "dark" : "light";

setBackground(
  backgrounds[mode][currentSection]
);

}, [darkMode, currentSection]);

// =========================
// QUOTES
// =========================

const quotes = [
"Bạn không cần hoàn hảo để được yêu thương 🌸",
"Đi chậm cũng là đang tiến về phía trước ✨",
"Nghỉ ngơi không khiến bạn yếu đuối 🌿",
"Mọi cảm xúc đều xứng đáng được lắng nghe 🌙",
"Có những ngày chỉ cần tồn tại thôi cũng là đủ 💙",
"Bạn đã cố gắng rất nhiều rồi đó ☁️",
];

// =========================
// SONGS
// =========================

const songs = [
{
title: "Calm Lofi",
artist: "Pixabay",
url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8e.mp3",
},

{
  title: "Rainy Study",
  artist: "Mixkit",
  url: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
},

{
  title: "Soft Piano",
  artist: "Pixabay",
  url: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_946b.mp3",
},

{
  title: "Night Coffee",
  artist: "Ambient",
  url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808.mp3",
},

{
  title: "Healing Forest",
  artist: "Nature",
  url: "https://cdn.pixabay.com/download/audio/2023/03/14/audio_2f6b.mp3",
},

{
  title: "Dreamy Sleep",
  artist: "Mixkit",
  url: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
},

];

// =========================
// ARTICLES
// =========================

const articles = [
{
title:
"Có những ngày chỉ cần ngủ đủ giấc",

  text:
    "Không phải ngày nào cũng cần năng suất. Có những ngày bình yên chỉ đơn giản là được nghỉ ngơi.",
},

{
  title:
    "Bạn không cần phải mạnh mẽ mãi",

  text:
    "Ai cũng có lúc mệt. Việc bạn yếu lòng không khiến bạn kém giá trị hơn đâu.",
},

{
  title:
    "Đi chậm cũng không sao",

  text:
    "Mỗi người đều có tốc độ riêng. Không cần ép bản thân phải giống ai cả.",
},

{
  title:
    "Đừng quên chăm sóc chính mình",

  text:
    "Ngủ sớm, uống đủ nước và nghỉ ngơi đôi khi cũng là một thành tựu rồi.",
},

];

// =========================
// CHAT
// =========================

const [messages, setMessages] =
useState([
{
role: "ai",
text:
"Chào bạn 👋 Mình là 10TIN nè 💙",
},
]);

const replies = [
"10TIN đang nghe bạn nói đây 👀",
"Bạn đã cố gắng nhiều rồi đó 🌸",
"Nghe hôm nay hơi mệt nhỉ ☁️",
"Nghỉ ngơi một chút nha 🌿",
"Mọi chuyện rồi sẽ ổn thôi ✨",
"10TIN ở đây với bạn nè 💙",
"Đừng ép bản thân quá nha 🌙",
"Bạn không cô đơn đâu ✨",
];

const sendMessage = () => {
if (!input.trim()) return;

const userMessage = {
  role: "user",
  text: input,
};

setMessages((prev) => [
  ...prev,
  userMessage,
]);

setTyping(true);

setTimeout(() => {

  const aiMessage = {
    role: "ai",

    text:
      replies[
        Math.floor(
          Math.random() *
            replies.length
        )
      ],
  };

  setMessages((prev) => [
    ...prev,
    aiMessage,
  ]);

  setTyping(false);

}, 1000 + Math.random() * 1500);

setInput("");

};

// =========================
// AUTO SCROLL
// =========================

useEffect(() => {
messagesEndRef.current?.scrollIntoView({
behavior: "smooth",
});
}, [messages, typing]);

// =========================
// BUTTONS
// =========================

const buttonPrimary = `   relative overflow-hidden
  bg-violet-500
  hover:bg-violet-400
  active:scale-95
  transition-all duration-300
  px-6 py-3
  rounded-2xl
  font-semibold
  shadow-lg shadow-violet-500/30
  hover:shadow-violet-400/50
  hover:scale-105
  `;

const buttonGlass = `  relative overflow-hidden
  backdrop-blur-xl
  border
  transition-all duration-300
  px-6 py-3
  rounded-2xl
  font-semibold
  hover:scale-105
  active:scale-95
  ${
    darkMode
      ?`
bg-white/10
border-white/10
hover:bg-white/20
      :
bg-white/60
border-black/10
hover:bg-white/80
text-slate-900
`   }
  `;

return (
<div
className={`min-h-screen bg-cover bg-center transition-all duration-700 overflow-hidden ${
        darkMode
          ? "text-white"
          : "text-slate-900"
      }`}
style={{
backgroundImage: `         linear-gradient(
          ${
            darkMode
              ? "rgba(0,0,0,0.72), rgba(0,0,0,0.82)"
              : "rgba(255,255,255,0.55), rgba(255,255,255,0.72)"
          }
        ),
        url(${background})
      `,
}}


  {/* FLOATING LIGHTS */}

  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full animate-pulse" />

    <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full animate-pulse" />

    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full animate-pulse" />

    <div className="absolute top-24 right-24 text-5xl animate-bounce opacity-20">
      ✨
    </div>

    <div className="absolute bottom-32 left-16 text-4xl animate-pulse opacity-20">
      🌙
    </div>

  </div>

  <div className="max-w-7xl mx-auto p-5 relative z-10">

    {/* HEADER */}

    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">

      <div>

        <h1 className="text-5xl font-black">
          🤖 10TIN
        </h1>

        <p
          className={`mt-2 ${
            darkMode
              ? "text-gray-300"
              : "text-slate-700"
          }`}
        >
          Góc nhỏ chữa lành và lắng nghe bạn ✨
        </p>

      </div>

      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
        className={buttonGlass}
      >
        {darkMode
          ? "☀️ Light Mode"
          : "🌙 Dark Mode"}
      </button>

    </div>

    {/* HERO */}

    <div className="mb-8 relative overflow-hidden rounded-[40px] border border-white/10">

      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-black/60"
            : "bg-white/50"
        }`}
      />

      <div className="relative z-10 p-10 md:p-16">

        <div className="max-w-2xl">

          <div
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm border ${
              darkMode
                ? "bg-white/10 border-white/10"
                : "bg-white/60 border-black/10"
            }`}
          >
            🌙 Healing Space • 10TIN
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">

            Một góc nhỏ để

            <span className="text-violet-300">
              {" "}thở chậm lại
            </span>

          </h1>

          <p className="mt-6 text-lg leading-8">

            10TIN là nơi để bạn nghỉ ngơi,
            nghe vài bản nhạc chill và
            tâm sự cùng AI 💙

          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <button className={buttonPrimary}>
              💬 Chat với 10TIN
            </button>

            <button className={buttonGlass}>
              🎵 Nghe nhạc chill
            </button>

          </div>

        </div>

      </div>

    </div>

    {/* GRID */}

    <div className="grid lg:grid-cols-3 gap-6">

      {/* LEFT */}

      <div className="lg:col-span-2 space-y-6">

        {/* BREATH */}

        <div
          onMouseEnter={() =>
            setCurrentSection("relax")
          }
          className={`rounded-3xl p-6 backdrop-blur-xl border transition-all duration-500 hover:scale-[1.015] hover:-translate-y-1 hover:shadow-2xl ${
            darkMode
              ? "bg-white/5 border-white/10 hover:bg-white/10"
              : "bg-white/55 border-black/10 hover:bg-white/75"
          }`}
        >

          <h2 className="text-2xl font-bold mb-5">
            🌬️ Hít thở
          </h2>

          <div className="h-40 flex items-center justify-center">

            <div
              className={`w-24 h-24 rounded-full bg-violet-500 transition-all duration-[4000ms] ${
                breath
                  ? "scale-150 opacity-50"
                  : ""
              }`}
            />

          </div>

          <button
            onClick={() =>
              setBreath(!breath)
            }
            className={buttonPrimary}
          >
            {breath
              ? "🌙 Dừng lại"
              : "🌸 Bắt đầu"}
          </button>

        </div>

        {/* QUOTE */}

        <div
          onMouseEnter={() =>
            setCurrentSection("home")
          }
          className={`rounded-3xl p-6 backdrop-blur-xl border transition-all duration-500 hover:scale-[1.015] hover:-translate-y-1 hover:shadow-2xl ${
            darkMode
              ? "bg-white/5 border-white/10 hover:bg-white/10"
              : "bg-white/55 border-black/10 hover:bg-white/75"
          }`}
        >

          <h2 className="text-2xl font-bold mb-5">
            ✨ Quote hôm nay
          </h2>

          <div className="text-xl text-center leading-10 py-10">
            “{quotes[quote]}”
          </div>

          <button
            onClick={() =>
              setQuote(
                Math.floor(
                  Math.random() *
                    quotes.length
                )
              )
            }
            className={buttonGlass}
          >
            🌸 Quote mới
          </button>

        </div>

        {/* MUSIC */}

        <div
          onMouseEnter={() =>
            setCurrentSection("music")
          }
          className={`rounded-3xl p-6 backdrop-blur-xl border transition-all duration-500 hover:scale-[1.01] ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white/55 border-black/10"
          }`}
        >

          <h2 className="text-2xl font-bold mb-5">
            🎵 Góc nhạc chill
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {songs.map((song, index) => (

              <div
                key={index}
                className={`rounded-3xl p-5 transition-all hover:scale-[1.03] ${
                  darkMode
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-white/70 hover:bg-white"
                }`}
              >

                <p className="font-bold text-lg">
                  🎧 {song.title}
                </p>

                <p className="text-sm opacity-70 mt-1">
                  {song.artist}
                </p>

                <audio
                  controls
                  className="w-full mt-4"
                >
                  <source
                    src={song.url}
                    type="audio/mpeg"
                  />
                </audio>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* CHAT */}

      <div
        onMouseEnter={() =>
          setCurrentSection("mood")
        }
        className={`rounded-3xl p-5 backdrop-blur-xl h-fit sticky top-5 border ${
          darkMode
            ? "bg-white/5 border-white/10"
            : "bg-white/60 border-black/10"
        }`}
      >

        <div className="flex items-center gap-3 mb-5">

          <img
            src="https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"
            className="w-14 h-14 rounded-full border-2 border-white/20"
          />

          <div>

            <h2 className="font-bold text-xl">
              Chat với 10TIN
            </h2>

            <p className="text-green-400 text-sm">
              ● Online
            </p>

          </div>

        </div>

        <div className="h-[500px] overflow-y-auto space-y-4 pr-2">

          {messages.map(
            (msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl transition-all ${
                    msg.role === "user"
                      ? "bg-violet-500"
                      : darkMode
                      ? "bg-white/10"
                      : "bg-white/80"
                  }`}
                >
                  {msg.text}
                </div>

              </div>

            )
          )}

          {typing && (

            <div className="bg-white/10 px-4 py-3 rounded-2xl animate-pulse w-fit">
              Đợi mình xíu nha^^...
            </div>

          )}

          <div ref={messagesEndRef} />

        </div>

        <div className="flex gap-3 mt-5">

          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (
                e.key === "Enter"
              ) {
                sendMessage();
              }
            }}
            placeholder="Nhắn gì đó..."
            className={`flex-1 rounded-2xl px-4 py-3 outline-none border transition-all ${
              darkMode
                ? "bg-white/10 border-white/10 focus:bg-white/20"
                : "bg-white/80 border-black/10"
            }`}
          />

          <button
            onClick={sendMessage}
            className="
            bg-violet-500
            hover:bg-violet-400
            transition-all duration-300
            px-5 rounded-2xl
            hover:scale-110
            active:scale-90
            shadow-lg shadow-violet-500/40
            "
          >
            ➤
          </button>

        </div>

      </div>

    </div>

  </div>

</div>

);
}

