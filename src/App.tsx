import { AnimatePresence } from 'framer-motion'
import { CoverScene } from './components/scenes/CoverScene'
import { SceneBismillah } from './components/scenes/SceneBismillah'
import { SceneInvitation } from './components/scenes/SceneInvitation'
import { SceneCouple } from './components/scenes/SceneCouple'
import { SceneDate } from './components/scenes/SceneDate'
import { SceneVenue } from './components/scenes/SceneVenue'
import { SceneFinal } from './components/scenes/SceneFinal'
import { Controls } from './components/ui/Controls'
import { useInvitationSequence } from './hooks/useInvitationSequence'
import { useShare } from './hooks/useShare'

function App() {
  const { scene, open, replay } = useInvitationSequence()
  const { share, toast } = useShare()

  return (
    <main className="relative min-h-[100svh] bg-[radial-gradient(ellipse_at_top,#fbf6ea_0%,#efe3cf_58%,#e7dcc4_100%)]">
      <a href="#invitation-stage" className="skip-link">
        Skip to invitation
      </a>

      <div id="invitation-stage" className="hide-scrollbar relative h-[100svh] w-full overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          {scene === 'cover' ? <CoverScene key="cover" onOpen={open} /> : null}
          {scene === 1 ? <SceneBismillah key="scene-1" /> : null}
          {scene === 2 ? <SceneInvitation key="scene-2" /> : null}
          {scene === 3 ? <SceneCouple key="scene-3" /> : null}
          {scene === 4 ? <SceneDate key="scene-4" /> : null}
          {scene === 5 ? <SceneVenue key="scene-5" /> : null}
          {scene === 6 ? <SceneFinal key="scene-6" /> : null}
        </AnimatePresence>
      </div>

      {scene !== 'cover' ? <Controls onReplay={replay} onShare={share} /> : null}

      <AnimatePresence>
        {toast ? (
          <div
            key={toast.id}
            className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full border border-[#b9a077]/70 bg-[#fbf6ea]/95 px-5 py-2 text-xs uppercase tracking-[0.4em] text-ink shadow-[0_30px_70px_-40px_rgba(58,47,35,0.9)]"
          >
            {toast.kind === 'copied' ? 'Link copied' : 'Unable to share'}
          </div>
        ) : null}
      </AnimatePresence>
    </main>
  )
}

export default App
