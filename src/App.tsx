import React, { useMemo, useState } from 'react'
import {
  BarChart3,
  Download,
  ImagePlus,
  Layers3,
  Play,
  RefreshCcw,
  Settings2,
  Sparkles,
  TimerReset,
  UploadCloud,
  Wand2,
  Zap,
} from 'lucide-react'

type StatCard = {
  label: string
  value: string
  icon: typeof Layers3
}

const statCards: StatCard[] = [
  { label: 'TOTAL PROMPTS', value: '100', icon: Layers3 },
  { label: 'TOTAL GENERATED IMAGES', value: '140', icon: Sparkles },
  { label: 'SUCCESSFUL DOWNLOADS', value: '132', icon: Download },
  { label: 'FAILED TASKS', value: '4', icon: TimerReset },
  { label: 'PENDING TASKS', value: '18', icon: Zap },
  { label: 'TOTAL COMPLETED BATCHES', value: '21', icon: BarChart3 },
]

const recentTasks = [
  '16:30 – Prompt 001 – Completed',
  '16:31 – Prompt 002 – Completed',
  '16:32 – Prompt 003 – Processing',
  '16:35 – Prompt 004 – Waiting',
  '16:36 – Prompt 005 – Queued',
]

const ratioOptions = ['16:9', '4:3', '1:1', '3:4', '9:16']
const imageCounts = [1, 2, 3, 4]

function App() {
  const [selectedRatio, setSelectedRatio] = useState('1:1')
  const [selectedCount, setSelectedCount] = useState(2)
  const [promptText, setPromptText] = useState(
    'PROMPT 001: Một chú mèo ngồi uống cà phê trong quán phong cách Nhật Bản.\nPROMPT 002: Một thành phố tương lai dưới ánh hoàng hôn.\nPROMPT 003: Một chiến binh đứng trên đỉnh núi phủ tuyết.',
  )

  const promptLines = useMemo(() => {
    return promptText.split(/\n/).filter((line) => line.trim().length > 0)
  }, [promptText])

  return (
    <div className="min-h-screen bg-[#040b14] text-slate-100">
      <div className="mx-auto max-w-[1600px] px-4 py-6 md:px-8 xl:px-10">
        <header className="mb-6 rounded-[24px] border border-white/10 bg-slate-900/80 px-6 py-5 shadow-glow backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300/80">AI IMAGE AUTOMATION STUDIO</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">
                HOA LỘC IMAGE AUTO
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                SYSTEM READY
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition hover:bg-violet-500/20">
                <Settings2 size={16} />
                Settings
              </button>
            </div>
          </div>
        </header>

        <main className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {statCards.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-white/10 bg-slate-900/75 p-4 shadow-[0_0_20px_rgba(15,23,42,0.35)]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{label}</span>
                    <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 p-2 text-amber-300">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white">{value}</div>
                </div>
              ))}
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-300">AUTOMATION PROGRESS</h2>
                <span className="text-sm font-medium text-violet-300">Batch processing</span>
              </div>

              <div className="mb-3 flex items-center justify-between text-sm text-slate-400">
                <span>35%</span>
                <span>Completed 35/100</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-amber-300" />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:scale-[1.02]">
                  <Play size={16} />
                  BẮT ĐẦU TỰ ĐỘNG
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-500/20">
                  <RefreshCcw size={16} />
                  TẠM DỪNG
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/20">
                  <Zap size={16} />
                  TIẾP TỤC
                </button>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-300">REFERENCE IMAGE MANAGER</h2>
                <button className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-100 hover:bg-violet-500/20">
                  <ImagePlus size={16} />
                  THÊM HÌNH ẢNH THAM CHIẾU
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {['Character A', 'Product', 'Background'].map((group) => (
                  <div key={group} className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-3">
                    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                      <span>{group}</span>
                      <span>03</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          className="flex aspect-square items-center justify-center rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-xs text-slate-500"
                        >
                          IMG {idx}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-300">BULK PROMPT INPUT</h2>
                <span className="text-sm text-slate-400">Total prompts: {promptLines.length}</span>
              </div>

              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                className="h-[220px] w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-violet-500/70"
                placeholder={'PROMPT 001: Một chú mèo ngồi uống cà phê trong quán phong cách Nhật Bản.\nPROMPT 002: Một thành phố tương lai dưới ánh hoàng hôn.\nPROMPT 003: Một chiến binh đứng trên đỉnh núi phủ tuyết.'}
              />
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
              <h2 className="mb-4 text-lg font-semibold uppercase tracking-[0.2em] text-slate-300">IMAGE RATIO</h2>
              <div className="grid grid-cols-2 gap-3">
                {ratioOptions.map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setSelectedRatio(ratio)}
                    className={`rounded-2xl border p-3 text-center transition ${
                      selectedRatio === ratio
                        ? 'border-violet-400 bg-violet-500/10 text-violet-100'
                        : 'border-slate-700 bg-slate-950/60 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <div className="mx-auto mb-2 h-12 w-full max-w-[70px] rounded-md border border-slate-600 bg-slate-800" />
                    {ratio}
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
              <h2 className="mb-4 text-lg font-semibold uppercase tracking-[0.2em] text-slate-300">IMAGES PER PROMPT</h2>
              <div className="grid grid-cols-2 gap-3">
                {imageCounts.map((count) => (
                  <button
                    key={count}
                    onClick={() => setSelectedCount(count)}
                    className={`rounded-2xl border px-3 py-3 text-sm font-medium transition ${
                      selectedCount === count
                        ? 'border-amber-400 bg-amber-500/10 text-amber-200'
                        : 'border-slate-700 bg-slate-950/60 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {count} ảnh
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-300">AUTO DOWNLOAD MANAGER</h2>
                <UploadCloud className="text-violet-300" size={18} />
              </div>

              <button className="w-full rounded-2xl border border-dashed border-violet-500/40 bg-violet-500/10 px-4 py-4 text-sm font-medium text-violet-100 hover:bg-violet-500/20">
                CHỌN THƯ MỤC LƯU ẢNH
              </button>

              <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-300">
                Chưa chọn thư mục
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-300">AI OPERATIONS</h2>
                <Wand2 className="text-amber-300" size={18} />
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-300">
                  Provider: <span className="text-violet-200">OpenAI / Replicate</span>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-300">
                  Batch size: <span className="text-amber-200">5 prompts</span>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-300">
                  Resume mode: <span className="text-emerald-200">Enabled</span>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
              <h2 className="mb-4 text-lg font-semibold uppercase tracking-[0.2em] text-slate-300">RECENT ACTIVITY</h2>
              <div className="space-y-3">
                {recentTasks.map((task) => (
                  <div key={task} className="rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
                    {task}
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </main>
      </div>
    </div>
  )
}

export default App
