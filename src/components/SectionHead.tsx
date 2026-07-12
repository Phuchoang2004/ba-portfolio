import { Typography } from 'antd'
const { Title } = Typography

export function SectionHead({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span
          className="mono"
          style={{
            fontSize: 13,
            color: 'var(--redline)',
            border: '1px solid var(--redline)',
            padding: '3px 8px',
            borderRadius: 2,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
          }}
        >
          {num}
        </span>
        <Title level={2} className="display" style={{ margin: 0, fontSize: 'clamp(23px,3vw,32px)', letterSpacing: '-0.015em', color: 'var(--ink)' }}>
          {title}
        </Title>
      </div>
      <div className="mono" style={{ fontSize: 11.5, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 30px 46px' }}>
        {sub}
      </div>
    </div>
  )
}