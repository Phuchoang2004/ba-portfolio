import { useEffect, useRef, useState } from 'react'
import { Progress, Space, Tag } from 'antd'
import { skills, tools } from '../data'
import { SectionHead } from './SectionHead'

export default function SkillsMatrix() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} style={{ padding: '60px 0', borderBottom: '1px solid var(--line)' }}>
      <SectionHead num="4.0" title="Skills matrix" sub="Self-rated, against BA competency areas" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 30 }}>
        {skills.map((s) => (
          <div key={s.name} style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 14, alignItems: 'center' }}>
            <span className="mono" style={{ fontSize: 13 }}>{s.name}</span>
            <Progress
              percent={visible ? s.pct : 0}
              strokeColor="var(--ink)"
              trailColor="var(--paper)"
              showInfo
              size={['default', 10] as any}
            />
          </div>
        ))}
      </div>

      <Space wrap size={8}>
        {tools.map((t) => (
          <Tag key={t} className="mono" style={{ fontSize: 11.5, padding: '6px 13px' }}>
            {t}
          </Tag>
        ))}
      </Space>
    </section>
  )
}