import { Button, Space, Typography } from 'antd'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, GithubOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

export default function Hero() {
  return (
    <div style={{ padding: '76px 0 46px', borderBottom: '1px solid var(--line)', position: 'relative' }}>
      <svg className="stamp-graphic" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="56" fill="none" stroke="#2C6B4E" strokeWidth={2} />
        <circle cx="60" cy="60" r="47" fill="none" stroke="#2C6B4E" strokeWidth={1} strokeDasharray="2,3" />
        <path id="stamppath" d="M 60,60 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
        <text fontFamily="IBM Plex Mono" fontSize={8.6} fontWeight={600} fill="#2C6B4E" letterSpacing={1.5}>
          <textPath href="#stamppath" startOffset="2%">
            READY FOR INTERVIEW · BA · 2026 ·
          </textPath>
        </text>
        <text x={60} y={57} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize={11} fontWeight={700} fill="#2C6B4E">
          APPROVED
        </text>
        <text x={60} y={70} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize={7} fill="#2C6B4E">
          v2.0
        </text>
      </svg>

      <p className="mono" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--redline)', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 26, height: 1, background: 'var(--redline)', display: 'inline-block' }} />
        IT Business Analyst — Portfolio Specification
      </p>

      <Title className="display" style={{ fontSize: 'clamp(42px, 8vw, 78px)', lineHeight: 0.95, letterSpacing: '-0.02em', margin: '0 0 14px', color: 'var(--ink)' }}>
        MAI HOÀNG
        <br />
        PHÚC
      </Title>

      <p className="display" style={{ fontSize: 'clamp(16px,2.4vw,21px)', color: 'var(--ink-soft)', margin: '0 0 30px', borderLeft: '3px solid var(--redline)', paddingLeft: 14 }}>
        Translating what the business needs into what the system does.
      </p>

      <Paragraph style={{ maxWidth: 600, fontSize: 16.5, color: 'var(--ink-soft)' }}>
        Recent Computer Science graduate (HCMUT, 2022–2026) with hands-on experience across requirements engineering, UML/DFD/ERD
        modeling, prototyping, and QA — verified through one internship, one capstone, and two independent SRS-driven projects.
      </Paragraph>

      <Space wrap>
        <Button
          type="primary"
          icon={<MailOutlined />}
          href="mailto:mhngphc@gmail.com"
          className="mono"
          style={{ background: 'var(--ink)', borderColor: 'var(--ink)' }}
        >
          mhngphc@gmail.com
        </Button>
        <Button icon={<PhoneOutlined />} href="tel:+84899019968" className="mono">
          +089 901 9968
        </Button>
        <Button icon={<EnvironmentOutlined />} className="mono">
          Tân Sơn Nhì, HCMC
        </Button>
        <Button icon={<GithubOutlined />} href="https://github.com/Phuchoang2004" target="_blank" className="mono">
          github.com/Phuchoang2004
        </Button>
      </Space>
    </div>
  )
}
