import type { ThemeConfig } from 'antd'

// Design tokens — "spec document" palette, shared with index.css custom properties.
export const tokens = {
  ink: '#161F33',
  inkSoft: '#3D4A66',
  paper: '#EFF1EC',
  paperRaised: '#FBFBF8',
  line: '#D2D6CC',
  lineStrong: '#A6AE9E',
  redline: '#A63A2C',
  redlineSoft: '#C97462',
  stamp: '#2C6B4E',
  stampSoft: '#DEEAE1',
  slate: '#616B76',
}

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: tokens.ink,
    colorLink: tokens.ink,
    colorLinkHover: tokens.redline,
    colorText: tokens.ink,
    colorTextSecondary: tokens.inkSoft,
    colorBorder: tokens.line,
    colorBgBase: tokens.paper,
    colorBgContainer: tokens.paperRaised,
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontFamilyCode: "'IBM Plex Mono', monospace",
    borderRadius: 2,
    wireframe: false,
  },
  components: {
    Progress: {
      defaultColor: tokens.ink,
      remainingColor: tokens.paper,
    },
    Tag: {
      defaultBg: tokens.paper,
      defaultColor: tokens.inkSoft,
    },
    Anchor: {
      colorPrimary: tokens.redline,
    },
    Timeline: {
      dotBg: tokens.paperRaised,
      tailColor: tokens.ink,
    },
    Table: {
      headerBg: tokens.stampSoft,
      headerColor: tokens.ink,
      borderColor: tokens.line,
    },
    Card: {
      colorBorderSecondary: tokens.ink,
    },
  },
}
