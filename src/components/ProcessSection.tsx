import { Row, Col } from 'antd'
import { processSteps } from '../data'
import { SectionHead } from './SectionHead'

export default function ProcessSection() {
  return (
    <section id="process" style={{ padding: '60px 0', borderBottom: '1px solid var(--line)' }}>
      <SectionHead num="2.0" title="How I work a requirement" sub="Standard operating sequence — applied on every project below" />
      <Row style={{ border: '1px solid var(--line)', background: 'var(--paper-raised)', boxShadow: 'var(--shadow-1)' }}>
        {processSteps.map((s, i) => (
          <Col key={s.n} xs={24} sm={12} md={i === processSteps.length - 1 ? 24 / 5 : 24 / 5}
            style={{ borderRight: '1px solid var(--line)', borderTop: i < 2 ? 'none' : undefined, padding: '22px 18px 26px' }}
          >
            <div className="mono" style={{ fontSize: 11, color: 'var(--redline)' }}>{s.n}</div>
            <h3 className="display" style={{ fontSize: 16.5, margin: '10px 0 9px' }}>{s.title}</h3>
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: 0 }}>{s.desc}</p>
          </Col>
        ))}
      </Row>
    </section>
  )
}
