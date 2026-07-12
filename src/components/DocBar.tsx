import { Tag } from 'antd'

export default function DocBar() {
  return (
    <div className="docbar mono">
      <span>
        DOC NO. <b>BA-PORTFOLIO-2026-01</b>
      </span>
      <span>
        OWNER <b>Mai Hoàng Phúc</b>
      </span>
      <span>
        VERSION <b>2.0</b>
      </span>
      <Tag
        color="transparent"
        style={{
          color: 'var(--stamp)',
          border: '1.5px solid var(--stamp)',
          background: 'var(--stamp-soft)',
          fontFamily: 'IBM Plex Mono, monospace',
          fontWeight: 600,
        }}
      >
        ACTIVE
      </Tag>
    </div>
  )
}
