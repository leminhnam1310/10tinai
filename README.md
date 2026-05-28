
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

"use client";

import { useState } from "react";

export default function MindNest() {
  const [page, setPage] = useState("home");

  // CHAT
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "Chào bạn 👋 Mình luôn ở đây để lắng nghe bạn." },
  ]);
  const [loading, setLoading] = useState(false);

  // ARTICLES
  const [selectedArticle, setSelectedArticle] = useState(null);

  // MOOD
  const [moodResult, setMoodResult] = useState("");

  // ================= ARTICLES =================
  const articles = [
    {
      id: 1,
      title: "Áp lực học tập trong môi trường hiện đại",
      content:
`Áp lực học tập là một trong những vấn đề phổ biến nhất ở học sinh hiện nay. Nó đến từ kỳ vọng gia đình, nhà trường và chính bản thân.

Khi áp lực kéo dài, học sinh có thể gặp stress, mất ngủ và giảm tập trung. Điều quan trọng là biết cân bằng giữa học và nghỉ.

Giải pháp là chia nhỏ mục tiêu, nghỉ ngơi hợp lý và không so sánh bản thân với người khác.`
    },
    {
      id: 2,
      title: "Stress trước kỳ thi",
      content:
`Stress trước kỳ thi xảy ra khi học sinh lo lắng về kết quả.

Biểu hiện: tim đập nhanh, khó ngủ, mất tập trung.

Cách giải quyết: lập kế hoạch học rõ ràng, chia nhỏ thời gian và giữ tinh thần tích cực.`
    },
    {
      id: 3,
      title: "Mất động lực học tập",
      content:
`Mất động lực thường đến từ việc học quá tải hoặc không thấy mục tiêu rõ ràng.

Hãy bắt đầu từ việc nhỏ nhất và tạo thói quen học ngắn nhưng đều đặn.`
    },
    {
      id: 4,
      title: "Tâm lý khi bị điểm kém",
      content:
`Điểm kém không phản ánh giá trị con người bạn.

Quan trọng là học từ lỗi sai và cải thiện phương pháp học.`
    },
    {
      id: 5,
      title: "Áp lực từ gia đình",
      content:
`Gia đình có kỳ vọng cao có thể tạo áp lực vô hình.

Hãy chia sẻ cảm xúc để gia đình hiểu bạn hơn.`
    },
    {
      id: 6,
      title: "Vì sao học sinh dễ stress",
      content:
`Do học tập, mạng xã hội và so sánh bản thân.

Cần cân bằng cuộc sống để giảm căng thẳng.`
    },
    {
      id: 7,
      title: "Giấc ngủ và học tập",
      content:
`Ngủ đủ giúp tăng trí nhớ và giảm stress.

Không nên thức khuya quá nhiều.`
    },
    {
      id: 8,
      title: "Chủ nghĩa hoàn hảo",
      content:
`Cố gắng hoàn hảo khiến bạn dễ kiệt sức.

Hãy tập trung vào tiến bộ thay vì hoàn hảo.`
    },
    {
      id: 9,
      title: "Thi trượt không phải thất bại",
      content:
`Thi trượt là một phần của học tập.

Quan trọng là cách bạn đứng dậy sau đó.`
    },
    {
      id: 10,
      title: "Tự tin hơn trong học tập",
      content:
`Tự tin đến từ việc luyện tập và hoàn thành mục tiêu nhỏ mỗi ngày.`
    },
    {
      id: 11,
      title: "Vai trò của sự lắng nghe",
      content:
`Khi được lắng nghe, học sinh cảm thấy được thấu hiểu và giảm stress rõ rệt.`
    }
  ];

  // ================= CHAT =================
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    await new Promise((r) => setTimeout(r, 500));

    let reply = "Mình đang lắng nghe bạn 👀";

    if (input.includes("buồn")) reply = "Mình ở đây với bạn 🫂";
    else if (input.includes("học")) reply = "Chia nhỏ việc học sẽ dễ hơn ✨";
    else if (input.includes("stress")) reply = "Hít thở sâu và nghỉ một chút nhé 💙";
    else if (input.includes("mệt")) reply = "Bạn nên nghỉ ngơi 🌿";

    setMessages((p) => [...p, { role: "ai", text: reply }]);
    setLoading(false);
  };

  // ================= MOOD =================
  const handleMood = (v) => {
    if (v === "good") setMoodResult("Bạn đang ổn 👍");
    if (v === "normal") setMoodResult("Bình thường cũng ổn 🙂");
    if (v === "bad") setMoodResult("Mình ở đây với bạn 🫂");
  };

  // ================= RELAX =================
  const [breath, setBreath] = useState(false);

  // ================= HOME =================
  if (page === "home") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">

        <div className="flex justify-between p-5 border-b border-white/10">
          <h1 className="font-bold">MindNest ✨</h1>

          <div className="flex gap-2">
            <button onClick={() => setPage("chat")} className="px-3 py-1 bg-violet-500 rounded">
              Chat
            </button>
            <button onClick={() => setPage("articles")} className="px-3 py-1 bg-white/10 rounded">
              Blog
            </button>
            <button onClick={() => setPage("relax")} className="px-3 py-1 bg-white/10 rounded">
              Thư giãn
            </button>
          </div>
        </div>

        <div className="text-center py-24">
          <h1 className="text-5xl font-bold mb-6">
            MindNest — nơi bạn được lắng nghe
          </h1>

          <button
            onClick={() => setPage("chat")}
            className="px-6 py-3 bg-violet-500 rounded-xl"
          >
            Bắt đầu
          </button>
        </div>
      </div>
    );
  }

  // ================= CHAT =================
  if (page === "chat") {
    return (
      <div className="min-h-screen flex flex-col bg-slate-950 text-white">

        <div className="p-4 flex justify-between border-b border-white/10">
          <button onClick={() => setPage("home")}>⬅</button>
          <div>Chat AI</div>
          <button onClick={() => setMessages([])}>Clear</button>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full p-4 space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-[80%] ${
                m.role === "user"
                  ? "ml-auto bg-violet-500"
                  : "bg-white/10"
              }`}
            >
              {m.text}
            </div>
          ))}
          {loading && <div>AI đang trả lời...</div>}
        </div>

        <div className="p-4 flex gap-2 border-t border-white/10">
          <input
            className="flex-1 p-3 bg-black/40 rounded-xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="bg-violet-500 px-4 rounded-xl">
            Gửi
          </button>
        </div>

      </div>
    );
  }

  // ================= ARTICLES =================
  if (page === "articles") {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8">

        <button onClick={() => setPage("home")} className="mb-6">⬅ Home</button>

        <h1 className="text-3xl font-bold mb-6">Bài viết tâm lý</h1>

        <div className="grid md:grid-cols-2 gap-4">
          {articles.map((a) => (
            <div
              key={a.id}
              onClick={() => setSelectedArticle(a)}
              className="p-4 bg-white/5 rounded-xl cursor-pointer"
            >
              {a.title}
            </div>
          ))}
        </div>

        {selectedArticle && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">
            <div className="bg-slate-900 p-6 rounded-xl max-w-xl">
              <h2 className="text-xl font-bold mb-4">
                {selectedArticle.title}
              </h2>
              <p className="text-gray-300 whitespace-pre-line">
                {selectedArticle.content}
              </p>

              <button
                onClick={() => setSelectedArticle(null)}
                className="mt-4 bg-violet-500 px-4 py-2 rounded"
              >
                Đóng
              </button>
            </div>
          </div>
        )}

      </div>
    );
  }

  // ================= RELAX =================
  if (page === "relax") {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">

        <button onClick={() => setPage("home")} className="mb-6">
          ⬅ Home
        </button>

        <h1 className="text-3xl font-bold mb-8">Thư giãn 🌿</h1>

        <div className="grid md:grid-cols-3 gap-6">

          {/* MUSIC */}
          <div className="bg-white/5 p-5 rounded-xl">
            <h2 className="mb-3 font-bold">🎵 Nhạc</h2>

            <audio controls className="w-full">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
            </audio>
          </div>

          {/* BREATHING */}
          <div className="bg-white/5 p-5 rounded-xl text-center">
            <h2 className="mb-3 font-bold">🌬️ Hít thở</h2>

            <div
              className={`w-20 h-20 mx-auto bg-violet-500 rounded-full transition-all duration-1000 ${
                breath ? "scale-150 opacity-60" : ""
              }`}
            />

            <button
              onClick={() => setBreath(!breath)}
              className="mt-4 bg-violet-500 px-4 py-2 rounded"
            >
              Start
            </button>
          </div>

          {/* TEXT */}
          <div className="bg-white/5 p-5 rounded-xl">
            <h2 className="mb-3 font-bold">🧘 Nghỉ ngơi</h2>
            <p className="text-gray-400">
              Bạn không cần phải hoàn hảo. Nghỉ một chút cũng không sao 💙
            </p>
          </div>

        </div>

      </div>
    );
  }

  return null;
}
