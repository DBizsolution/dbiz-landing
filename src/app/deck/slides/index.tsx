import type { ComponentType } from 'react'
import type { SlideMeta } from '../slide-shell'
import { Slide01Title } from './slide-01-title'
import { Slide02ChatQ1 } from './slide-02-chat-q1'
import { Slide03ChatQ2 } from './slide-03-chat-q2'
import { Slide04TalkMap } from './slide-04-talk-map'
import { Slide05Act1Title } from './slide-05-act-1-title'
import { Slide06Setup } from './slide-06-setup'
import { Slide07Hallucination } from './slide-07-hallucination'
import { Slide08Drift } from './slide-08-drift'
import { Slide09RevisionRot } from './slide-09-revision-rot'
import { Slide09bPivot } from './slide-09b-pivot'
import { Slide10Act2Title } from './slide-10-act-2-title'
import { Slide11Pipeline } from './slide-11-pipeline'
import { Slide12Mess } from './slide-12-mess'
import { Slide13Canvas } from './slide-13-canvas'
import { Slide14TwoUses } from './slide-14-two-uses'
import { Slide15Part1Collab } from './slide-15-part-1-collab'
import { Slide16OpenQuestionsDay1 } from './slide-16-open-questions-day-1'
import { Slide17OpenQuestionsWeekLater } from './slide-17-open-questions-week-later'
import { Slide19Part2Artifacts } from './slide-19-part-2-artifacts'
import { Slide20SwimLane } from './slide-20-swim-lane'
import { Slide21Act3Title } from './slide-21-act-3-title'
import { Slide22WorkingRepo } from './slide-22-working-repo'
import { Slide23Stages } from './slide-23-stages'
import { Slide24DataDictionary } from './slide-24-data-dictionary'
import { Slide25RouteMap } from './slide-25-route-map'
import { Slide26DesignSystem } from './slide-26-design-system'
import { Slide27FlowsIndex } from './slide-27-flows-index'
import { Slide28Coverage } from './slide-28-coverage'
import { Slide29BuildHonestly } from './slide-29-build-honestly'
import { Slide30FeedbackTracker } from './slide-30-feedback-tracker'
import { Slide31LiveScreen } from './slide-31-live-screen'
import { Slide32Close } from './slide-32-close'
import { Slide33QA } from './slide-33-qa'

export type SlideEntry = {
  marker: string
  act: string
  title: string
  time?: string
  Component: ComponentType<{ meta: SlideMeta }>
}

export const slides: SlideEntry[] = [
  { marker: 'S·01', act: 'Opening', title: 'Title', time: '10s', Component: Slide01Title },
  { marker: 'S·02', act: 'Opening', title: 'Chat prompt 01', time: '45s', Component: Slide02ChatQ1 },
  { marker: 'S·03', act: 'Opening', title: 'Chat prompt 02', time: '45s', Component: Slide03ChatQ2 },
  { marker: 'S·04', act: 'Opening', title: 'What this talk does', time: '30s', Component: Slide04TalkMap },
  { marker: 'S·05', act: 'Act 1', title: 'Act 1 · title', time: '10s', Component: Slide05Act1Title },
  { marker: 'S·06', act: 'Act 1', title: 'BRD + AI · the setup', time: '45s', Component: Slide06Setup },
  { marker: 'S·07', act: 'Act 1', title: 'Hallucination', time: '1m 15s', Component: Slide07Hallucination },
  { marker: 'S·08', act: 'Act 1', title: 'Drift', time: '1m', Component: Slide08Drift },
  { marker: 'S·09', act: 'Act 1', title: 'Revision rot', time: '1m 45s', Component: Slide09RevisionRot },
  { marker: 'S·09·5', act: 'Act 1', title: 'Pivot · what was missing?', time: '20s', Component: Slide09bPivot },
  { marker: 'S·10', act: 'Act 2', title: 'Act 2 · title', time: '10s', Component: Slide10Act2Title },
  { marker: 'S·11', act: 'Act 2', title: 'Pipeline · the bigger picture', time: '1m', Component: Slide11Pipeline },
  { marker: 'S·12', act: 'Act 2', title: 'What went in · the mess', time: '1m', Component: Slide12Mess },
  { marker: 'S·13', act: 'Act 2', title: 'The canvas in one breath', time: '45s', Component: Slide13Canvas },
  { marker: 'S·14', act: 'Act 2', title: 'Same source, two uses', time: '20s', Component: Slide14TwoUses },
  { marker: 'S·15', act: 'Act 2', title: 'Part 1 · Collaboration', time: '20s', Component: Slide15Part1Collab },
  { marker: 'S·16', act: 'Act 2', title: 'Open questions · day 1', time: '30s', Component: Slide16OpenQuestionsDay1 },
  { marker: 'S·17', act: 'Act 2', title: 'Open questions · a week later', time: '45s', Component: Slide17OpenQuestionsWeekLater },
  { marker: 'S·18', act: 'Act 2', title: 'Part 2 · Artifacts for build', time: '20s', Component: Slide19Part2Artifacts },
  { marker: 'S·19', act: 'Act 2', title: 'Artifacts by swim lane', time: '30s', Component: Slide20SwimLane },
  { marker: 'S·20', act: 'Act 3', title: 'Act 3 · title', time: '10s', Component: Slide21Act3Title },
  { marker: 'S·21', act: 'Act 3', title: 'Phase 0 · Working repository', time: '1m', Component: Slide22WorkingRepo },
  { marker: 'S·22', act: 'Act 3', title: 'Phase 1 · Stages and lifecycle', time: '1m 30s', Component: Slide23Stages },
  { marker: 'S·23', act: 'Act 3', title: 'Phase 2 · Data dictionary', time: '1m 30s', Component: Slide24DataDictionary },
  { marker: 'S·24', act: 'Act 3', title: 'Phase 3 · How the app is laid out', time: '45s', Component: Slide25RouteMap },
  { marker: 'S·25', act: 'Act 3', title: 'Phase 4a · Design system', time: '1m', Component: Slide26DesignSystem },
  { marker: 'S·26', act: 'Act 3', title: 'Phase 4b · Flows index', time: '30s', Component: Slide27FlowsIndex },
  { marker: 'S·27', act: 'Act 3', title: 'Phase 4c · Coverage view', time: '45s', Component: Slide28Coverage },
  { marker: 'S·28', act: 'Act 3', title: 'Phase 5 · The build, honestly', time: '2m 15s', Component: Slide29BuildHonestly },
  { marker: 'S·29', act: 'Act 3', title: 'Phase 6a · Feedback tracker', time: '1m', Component: Slide30FeedbackTracker },
  { marker: 'S·30', act: 'Act 3', title: 'Phase 6b · A live screen', time: '30s', Component: Slide31LiveScreen },
  { marker: 'S·31', act: 'Close', title: 'Close · what shipped', time: '1m', Component: Slide32Close },
  { marker: 'S·32', act: 'Close', title: 'Q&A', time: '5–7m', Component: Slide33QA },
]
