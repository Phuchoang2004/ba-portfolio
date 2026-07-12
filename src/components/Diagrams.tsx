export type DiagramKey = 'architecture' | 'erd' | 'usecase' | 'sequence' | 'class' | 'dfd' | 'activity'

const INK = '#161F33'
const RED = '#A63A2C'
const SLATE = '#616B76'
const MONO = 'IBM Plex Mono'

export function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 220 150" width="220" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="60" height="26" fill="none" stroke={INK} strokeWidth={1.5} />
      <text x="36" y="27" fontFamily={MONO} fontSize={8} textAnchor="middle" fill={INK}>Buyer</text>
      <rect x="6" y="112" width="60" height="26" fill="none" stroke={INK} strokeWidth={1.5} />
      <text x="36" y="129" fontFamily={MONO} fontSize={8} textAnchor="middle" fill={INK}>Seller</text>
      <rect x="80" y="60" width="60" height="26" fill="none" stroke={RED} strokeWidth={1.5} />
      <text x="110" y="77" fontFamily={MONO} fontSize={8} textAnchor="middle" fill={RED}>Queue</text>
      <rect x="154" y="10" width="60" height="26" fill="none" stroke={INK} strokeWidth={1.5} />
      <text x="184" y="27" fontFamily={MONO} fontSize={7.5} textAnchor="middle" fill={INK}>Order Svc</text>
      <rect x="154" y="112" width="60" height="26" fill="none" stroke={INK} strokeWidth={1.5} />
      <text x="184" y="129" fontFamily={MONO} fontSize={7.5} textAnchor="middle" fill={INK}>DLQ</text>
      <line x1="66" y1="23" x2="80" y2="65" stroke={SLATE} />
      <line x1="110" y1="60" x2="154" y2="27" stroke={SLATE} />
      <line x1="140" y1="80" x2="154" y2="120" stroke={SLATE} strokeDasharray="3,2" />
      <line x1="66" y1="125" x2="80" y2="86" stroke={SLATE} />
    </svg>
  )
}

export function ERDDiagram() {
  return (
    <svg viewBox="0 0 220 130" width="220" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="90" height="24" fill="none" stroke={INK} strokeWidth={1.5} />
      <text x="55" y="31" fontFamily={MONO} fontSize={8} textAnchor="middle" fill={INK}>Customer</text>
      <rect x="120" y="15" width="90" height="24" fill="none" stroke={INK} strokeWidth={1.5} />
      <text x="165" y="31" fontFamily={MONO} fontSize={8} textAnchor="middle" fill={INK}>Order</text>
      <rect x="65" y="85" width="90" height="24" fill="none" stroke={RED} strokeWidth={1.5} />
      <text x="110" y="101" fontFamily={MONO} fontSize={8} textAnchor="middle" fill={RED}>Product</text>
      <line x1="80" y1="39" x2="100" y2="85" stroke={SLATE} />
      <line x1="150" y1="39" x2="130" y2="85" stroke={SLATE} />
      <line x1="100" y1="27" x2="120" y2="27" stroke={SLATE} />
    </svg>
  )
}

export function UseCaseDiagram() {
  return (
    <svg viewBox="0 0 200 150" width="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="30" r="12" fill="none" stroke={INK} strokeWidth={1.5} />
      <line x1="35" y1="42" x2="35" y2="70" stroke={INK} strokeWidth={1.5} />
      <line x1="20" y1="52" x2="50" y2="52" stroke={INK} strokeWidth={1.5} />
      <line x1="35" y1="70" x2="20" y2="95" stroke={INK} strokeWidth={1.5} />
      <line x1="35" y1="70" x2="50" y2="95" stroke={INK} strokeWidth={1.5} />
      <text x="35" y="112" fontFamily={MONO} fontSize={7.5} textAnchor="middle" fill={INK}>User</text>
      <ellipse cx="140" cy="35" rx="45" ry="16" fill="none" stroke={RED} strokeWidth={1.5} />
      <text x="140" y="39" fontFamily={MONO} fontSize={7.5} textAnchor="middle" fill={RED}>Place order</text>
      <ellipse cx="140" cy="90" rx="45" ry="16" fill="none" stroke={RED} strokeWidth={1.5} />
      <text x="140" y="94" fontFamily={MONO} fontSize={7.5} textAnchor="middle" fill={RED}>Track order</text>
      <line x1="55" y1="45" x2="97" y2="35" stroke={SLATE} />
      <line x1="55" y1="75" x2="97" y2="88" stroke={SLATE} />
    </svg>
  )
}

export function SequenceDiagram() {
  return (
    <svg viewBox="0 0 220 150" width="220" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="60" height="20" fill="none" stroke={INK} strokeWidth={1.5} />
      <text x="40" y="22" fontFamily={MONO} fontSize={7.5} textAnchor="middle" fill={INK}>Buyer</text>
      <line x1="40" y1="28" x2="40" y2="140" stroke={SLATE} strokeDasharray="2,3" />
      <rect x="150" y="8" width="60" height="20" fill="none" stroke={RED} strokeWidth={1.5} />
      <text x="180" y="22" fontFamily={MONO} fontSize={7.5} textAnchor="middle" fill={RED}>Order Svc</text>
      <line x1="180" y1="28" x2="180" y2="140" stroke={SLATE} strokeDasharray="2,3" />
      <rect x="36" y="45" width="8" height="55" fill="#FBFBF8" stroke={INK} strokeWidth={1} />
      <rect x="176" y="60" width="8" height="30" fill="#FBFBF8" stroke={RED} strokeWidth={1} />
      <line x1="44" y1="55" x2="176" y2="55" stroke={INK} strokeWidth={1} markerEnd="url(#arrow1)" />
      <text x="110" y="50" fontFamily={MONO} fontSize={7} textAnchor="middle" fill={INK}>place order</text>
      <line x1="176" y1="90" x2="44" y2="90" stroke={RED} strokeWidth={1} strokeDasharray="3,2" markerEnd="url(#arrow2)" />
      <text x="110" y="85" fontFamily={MONO} fontSize={7} textAnchor="middle" fill={RED}>confirm</text>
      <defs>
        <marker id="arrow1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={INK} />
        </marker>
        <marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={RED} />
        </marker>
      </defs>
    </svg>
  )
}

export function ClassDiagram() {
  return (
    <svg viewBox="0 0 220 150" width="220" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="15" width="90" height="60" fill="none" stroke={INK} strokeWidth={1.5} />
      <line x1="8" y1="32" x2="98" y2="32" stroke={INK} strokeWidth={1} />
      <line x1="8" y1="56" x2="98" y2="56" stroke={INK} strokeWidth={1} />
      <text x="53" y="27" fontFamily={MONO} fontSize={8} textAnchor="middle" fill={INK}>Order</text>
      <text x="13" y="45" fontFamily={MONO} fontSize={6.5} fill={INK}>+ id: string</text>
      <text x="13" y="68" fontFamily={MONO} fontSize={6.5} fill={INK}>+ submit()</text>
      <rect x="128" y="65" width="88" height="60" fill="none" stroke={RED} strokeWidth={1.5} />
      <line x1="128" y1="82" x2="216" y2="82" stroke={RED} strokeWidth={1} />
      <line x1="128" y1="106" x2="216" y2="106" stroke={RED} strokeWidth={1} />
      <text x="172" y="77" fontFamily={MONO} fontSize={8} textAnchor="middle" fill={RED}>Product</text>
      <text x="133" y="95" fontFamily={MONO} fontSize={6.5} fill={RED}>+ sku: string</text>
      <text x="133" y="118" fontFamily={MONO} fontSize={6.5} fill={RED}>+ price: number</text>
      <line x1="98" y1="60" x2="128" y2="85" stroke={SLATE} />
      <text x="103" y="70" fontFamily={MONO} fontSize={7} fill={SLATE}>1..*</text>
    </svg>
  )
}

export function DFDDiagram() {
  return (
    <svg viewBox="0 0 220 150" width="220" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="55" width="52" height="34" fill="none" stroke={INK} strokeWidth={1.5} />
      <text x="34" y="76" fontFamily={MONO} fontSize={7.5} textAnchor="middle" fill={INK}>Customer</text>
      <circle cx="120" cy="45" r="30" fill="none" stroke={RED} strokeWidth={1.5} />
      <text x="120" y="42" fontFamily={MONO} fontSize={7} textAnchor="middle" fill={RED}>1.0 Process</text>
      <text x="120" y="52" fontFamily={MONO} fontSize={6.5} textAnchor="middle" fill={RED}>Order</text>
      <path d="M75,120 h80 M75,120 v-1 M75,127 h80" stroke={INK} strokeWidth={1.3} fill="none" />
      <text x="115" y="118" fontFamily={MONO} fontSize={7} textAnchor="middle" fill={INK}>D1 · Orders store</text>
      <line x1="60" y1="70" x2="92" y2="55" stroke={SLATE} markerEnd="url(#dfdarrow)" />
      <line x1="120" y1="75" x2="115" y2="112" stroke={SLATE} markerEnd="url(#dfdarrow)" />
      <defs>
        <marker id="dfdarrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={SLATE} />
        </marker>
      </defs>
    </svg>
  )
}

export function ActivityDiagram() {
  return (
    <svg viewBox="0 0 220 150" width="220" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="20" r="7" fill={INK} />
      <line x1="30" y1="27" x2="30" y2="45" stroke={SLATE} markerEnd="url(#actarrow)" />
      <rect x="4" y="45" width="52" height="24" fill="none" stroke={INK} strokeWidth={1.5} rx="10" />
      <text x="30" y="60" fontFamily={MONO} fontSize={7} textAnchor="middle" fill={INK}>Submit form</text>
      <line x1="30" y1="69" x2="30" y2="85" stroke={SLATE} markerEnd="url(#actarrow)" />
      <polygon points="30,85 55,105 30,125 5,105" fill="none" stroke={RED} strokeWidth={1.5} />
      <text x="30" y="108" fontFamily={MONO} fontSize={6.5} textAnchor="middle" fill={RED}>Valid?</text>
      <line x1="55" y1="105" x2="130" y2="57" stroke={SLATE} markerEnd="url(#actarrow)" />
      <text x="90" y="72" fontFamily={MONO} fontSize={6.5} fill={SLATE}>yes</text>
      <rect x="130" y="45" width="60" height="24" fill="none" stroke={INK} strokeWidth={1.5} rx="10" />
      <text x="160" y="60" fontFamily={MONO} fontSize={7} textAnchor="middle" fill={INK}>Process</text>
      <line x1="30" y1="125" x2="30" y2="138" stroke={SLATE} markerEnd="url(#actarrow)" />
      <text x="40" y="135" fontFamily={MONO} fontSize={6.5} fill={SLATE}>no</text>
      <circle cx="30" cy="145" r="7" fill="none" stroke={INK} strokeWidth={1.5} />
      <circle cx="30" cy="145" r="3.5" fill={INK} />
      <defs>
        <marker id="actarrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={SLATE} />
        </marker>
      </defs>
    </svg>
  )
}

export const DIAGRAM_LABELS: Record<DiagramKey, string> = {
  architecture: 'System architecture',
  erd: 'ERD',
  usecase: 'Use case',
  sequence: 'Sequence',
  class: 'Class',
  dfd: 'DFD',
  activity: 'Activity',
}

export function diagramFor(kind: DiagramKey) {
  switch (kind) {
    case 'architecture': return <ArchitectureDiagram />
    case 'erd': return <ERDDiagram />
    case 'usecase': return <UseCaseDiagram />
    case 'sequence': return <SequenceDiagram />
    case 'class': return <ClassDiagram />
    case 'dfd': return <DFDDiagram />
    case 'activity': return <ActivityDiagram />
  }
}