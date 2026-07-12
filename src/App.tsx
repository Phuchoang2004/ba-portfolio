import { useEffect, useState } from 'react'
import { Anchor, Typography } from 'antd'
import DocBar from './components/DocBar'
import Hero from './components/Hero'
import ProcessSection from './components/ProcessSection'
import CaseStudies from './components/CaseStudies'
import SkillsMatrix from './components/SkillsMatrix'
import ExperienceEducation from './components/ExperienceEducation'
import { SectionHead } from './components/SectionHead'

const { Paragraph } = Typography

export default function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setProgress(pct)
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <div className="anchor-wrap">
        <Anchor
          affix={false}
          items={[
            { key: 'profile', href: '#profile', title: '1.0 Profile' },
            { key: 'process', href: '#process', title: '2.0 Process' },
            { key: 'cases', href: '#cases', title: '3.0 Case studies' },
            { key: 'skills', href: '#skills', title: '4.0 Skills' },
            { key: 'experience', href: '#experience', title: '5.0 Experience' },
            { key: 'education', href: '#education', title: '6.0 Education' },
          ]}
        />
      </div>

      <div className="doc-shell">
        <DocBar />
        <Hero />

        <section id="profile" style={{ padding: '60px 0', borderBottom: '1px solid var(--line)' }}>
          <SectionHead num="1.0" title="Profile" sub="Purpose & Scope" />
          <Paragraph style={{ maxWidth: 680, fontSize: 15 }}>
            A broad academic foundation across frontend, backend, data, and mobile development, paired with practical
            business analysis and software testing experience. Comfortable moving between stakeholders and engineers —
            gathering requirements on one side, validating that the delivered system actually satisfies them on the
            other. Looking for an entry-level or intern IT Business Analyst role where that translation work is the
            job, not a side task.
          </Paragraph>
        </section>

        <ProcessSection />
        <CaseStudies />
        <SkillsMatrix />
        <ExperienceEducation />

        <footer style={{ padding: '48px 0 24px' }}>
          <p className="mono" style={{ fontSize: 12.5, color: 'var(--slate)' }}>
            Contact: mhngphc@gmail.com · +089 901 9968 · Tân Sơn Nhì, HCMC · github.com/Phuchoang2004
          </p>
        </footer>
      </div>
    </>
  )
}