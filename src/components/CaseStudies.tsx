import { useState } from 'react'
import { Card, Tag, Space, Typography, Image as AntImage } from 'antd'
import { LinkOutlined, ZoomInOutlined } from '@ant-design/icons'
import { caseStudies, type CaseStudy } from '../data'
import { SectionHead } from './SectionHead'
import { diagramFor, DIAGRAM_LABELS, type DiagramKey } from './Diagrams'

const { Paragraph, Text } = Typography

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--redline)', display: 'block', marginBottom: 4 }}>
      {children}
    </span>
  )
}

function DiagramChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mono"
      style={{
        fontSize: 12,
        padding: '7px 14px',
        borderRadius: 20,
        border: `1px solid ${active ? 'var(--ink)' : 'var(--line-strong)'}`,
        background: active ? 'var(--ink)' : 'var(--paper-raised)',
        color: active ? 'var(--paper-raised)' : 'var(--ink-soft)',
        cursor: 'pointer',
        transition: 'background .15s ease, color .15s ease, border-color .15s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>
  )
}

function CaseCard({ c }: { c: CaseStudy }) {
  const [active, setActive] = useState<DiagramKey>(c.diagrams[0])
  const imageSrc = c.diagramImages?.[active]

  return (
    <Card
      style={{ border: '1px solid var(--ink)', marginBottom: 30, boxShadow: 'var(--shadow-1)', background: 'var(--paper-raised)' }}
      styles={{ body: { padding: 0 } }}
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, padding: '4px 0' }}>
          <div>
            <div className="display" style={{ fontSize: 19.5, letterSpacing: '-0.005em' }}>{c.title}</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.meta}</div>
          </div>
          <Tag
            className="mono"
            style={{ border: '1.5px solid var(--stamp)', color: 'var(--stamp)', background: 'var(--stamp-soft)', fontSize: 11, padding: '4px 10px', whiteSpace: 'normal' }}
          >
            {c.status}
          </Tag>
        </div>
      }
    >
      {/* text block — full width */}
      <div style={{ padding: 22, borderBottom: '1px solid var(--line)' }}>
        <Label>Problem</Label>
        <Paragraph style={{ fontSize: 14.5, maxWidth: 720 }}>{c.problem}</Paragraph>

        {c.role && (
          <>
            <Label>My role</Label>
            <Paragraph style={{ fontSize: 14.5, maxWidth: 720 }}>{c.role}</Paragraph>
          </>
        )}

        <Label>Artifacts produced</Label>
        <Paragraph style={{ fontSize: 14.5, maxWidth: 720 }}>{c.artifacts}</Paragraph>

        <Label>Approach</Label>
        <Paragraph style={{ fontSize: 14.5, maxWidth: 720 }}>{c.approach}</Paragraph>

        {c.outcome && (
          <>
            <span className="mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--stamp)', display: 'block', marginBottom: 4 }}>
              Outcome
            </span>
            <Paragraph style={{ fontSize: 14.5, maxWidth: 720 }}>{c.outcome}</Paragraph>
          </>
        )}

        <Space wrap size={6} style={{ marginTop: 12 }}>
          {c.tags.map((t) => (
            <Tag key={t} className="mono" style={{ borderRadius: 20, fontSize: 10.5 }}>
              {t}
            </Tag>
          ))}
        </Space>

        <div style={{ marginTop: 14 }}>
          <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: 12, borderBottom: '1px solid var(--ink)', paddingBottom: 1 }}>
            <LinkOutlined /> {c.link.label}
          </a>
        </div>
      </div>

      {/* diagram block — full width, stacked below */}
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
          <span className="mono" style={{ fontSize: 10.5, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Diagram library — {c.diagrams.length} artifacts modeled
          </span>
          {imageSrc && (
            <span className="mono" style={{ fontSize: 10.5, color: 'var(--redline)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <ZoomInOutlined /> click to zoom
            </span>
          )}
        </div>

        <Space wrap size={8} style={{ marginBottom: 16 }}>
          {c.diagrams.map((d) => (
            <DiagramChip key={d} label={DIAGRAM_LABELS[d]} active={d === active} onClick={() => setActive(d)} />
          ))}
        </Space>

        <div
          style={{
            border: '1px solid var(--ink)',
            background:
              'linear-gradient(var(--grid) 1px, transparent 1px) 0 0/16px 16px, linear-gradient(90deg, var(--grid) 1px, transparent 1px) 0 0/16px 16px, var(--paper-raised)',
            boxShadow: 'var(--shadow-1)',
            padding: imageSrc ? 14 : '30px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: imageSrc ? undefined : 260,
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {imageSrc ? (
            <AntImage
              src={imageSrc}
              alt={`${c.title} — ${DIAGRAM_LABELS[active]} diagram`}
              style={{ width: '100%', maxHeight: 520, objectFit: 'contain' }}
              // Real UML/DFD exports are dense — let people click through to a full-size, pannable/zoomable view.
              preview={{ maskClassName: 'mono' }}
            />
          ) : (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>{diagramFor(active)}</div>
          )}
        </div>

        <Text className="mono" style={{ fontSize: 10.5, color: 'var(--slate)', display: 'block', textAlign: 'center', marginTop: 10 }}>
          {DIAGRAM_LABELS[active]} {imageSrc ? '' : '— sketch, real export pending'}
        </Text>
      </div>
    </Card>
  )
}

export default function CaseStudies() {
  return (
    <section id="cases" style={{ padding: '60px 0', borderBottom: '1px solid var(--line)' }}>
      <SectionHead num="3.0" title="Case studies" sub="Two projects, modeled end to end" />
      {caseStudies.map((c) => (
        <CaseCard key={c.key} c={c} />
      ))}
    </section>
  )
}