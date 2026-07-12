import { Timeline } from 'antd'
import { SectionHead } from './SectionHead'

export default function ExperienceEducation() {
  return (
    <>
      <section id="experience" style={{ padding: '60px 0', borderBottom: '1px solid var(--line)' }}>
        <SectionHead num="5.0" title="Experience" sub="" />
        <Timeline
          items={[
            {
              color: 'var(--redline)' as any,
              children: (
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--redline)', textTransform: 'uppercase' }}>May 2025 — Sep 2025</div>
                  <h3 className="display" style={{ fontSize: 17.5, margin: '7px 0' }}>Web Developer &amp; Tester (Intern) — SECOM Service Company Limited</h3>
                  <ul style={{ margin: '6px 0 0', paddingLeft: 18, fontSize: 13.5, color: 'var(--ink-soft)' }}>
                    <li>Translated business requirements into technical specs for the dev team.</li>
                    <li>Tested Shopify storefronts against expected business rules before release.</li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </section>

      <section id="education" style={{ padding: '60px 0', borderBottom: '1px solid var(--line)' }}>
        <SectionHead num="6.0" title="Education & languages" sub="" />
        <Timeline
          items={[
            {
              color: 'var(--redline)' as any,
              children: (
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--redline)', textTransform: 'uppercase' }}>2022 — June 2026</div>
                  <h3 className="display" style={{ fontSize: 17.5, margin: '7px 0' }}>B.Sc. Computer Science — University of Technology, Ho Chi Minh City</h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)' }}>GPA 7.25/10</p>
                </div>
              ),
            },
            {
              color: 'var(--redline)' as any,
              children: (
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--redline)', textTransform: 'uppercase' }}>Languages</div>
                  <ul style={{ margin: '7px 0 0', paddingLeft: 18, fontSize: 17.5 }} className="display">
                    <li>English — IELTS 7.0 (2021)</li>
                    <li>Vietnamese — Native</li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </section>
    </>
  )
}