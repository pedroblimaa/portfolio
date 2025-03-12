export enum Position {
  Left = 'left',
  Right = 'right',
}

export interface Bullet {
  title: string
  description: string
}

export interface TimelineItemInfo {
  company: string
  role: string,
  period: string,
  companyImg: string,
  bullets: Bullet[]
}

export interface TimelineCardProps {
  itemInfo: TimelineItemInfo
  position: Position
}
