import { ReactElement } from "react"

const getDaysInMonth = ({ month, year }: { month: number; year: number }) =>
  new Date(year, month, 0).getDate()
const getFirstDayInMonth = ({
  month,
  year,
}: {
  month: number
  year: number
}) => {
  const date = new Date(year, month, 1)
  return date.getDay()
}
const getLastDayInMonth = ({
  month,
  year,
}: {
  month: number
  year: number
}) => {
  const date = new Date(year, month, 0)
  return date.getDay()
}
const getCellValue = ({
  month,
  year,
  cellIdx,
}: {
  month: number
  year: number
  cellIdx: number
}) => {
  const current = new Date()
  const days = getDaysInMonth({ month, year }),
    fisrtDay = getFirstDayInMonth({ month, year }),
    lastDay = getLastDayInMonth({ month, year })
  let cell
  if (cellIdx <= fisrtDay) {
    const daysInPrevMonth = getDaysInMonth({ month: month - 1, year })
    console.log(daysInPrevMonth)

    cell = {
      value: {
        day: daysInPrevMonth - fisrtDay + cellIdx,
        month: month - 1 < 0 ? 11 : month - 1,
        year: month - 1 < 0 ? year - 1 : year,
      },
      isToday: false,
      isDiffMonth: true,
    }
  } else if (cellIdx - fisrtDay - days > 0)
    cell = {
      value: {
        day: cellIdx - fisrtDay - days,
        month: month + 1 > 11 ? 0 : month + 1,
        year: month + 1 > 11 ? year + 1 : year,
      },
      isToday: false,
      isDiffMonth: true,
    }
  else
    cell = {
      value: {
        day: cellIdx - fisrtDay,
        month,
        year,
      },
      isToday:
        cellIdx - fisrtDay === current.getDate() &&
        month === current.getMonth() &&
        year === current.getFullYear(),
      isDiffMonth: false,
    }
  return cell
}

interface CellProps {
  data: {
    month: number
    year: number
    cellIdx: number
  }
  render: ({
    value,
    isToday,
    isDiffMonth,
  }: {
    value: {
      day: number
      month: number
      year: number
    }
    isToday: boolean
    isDiffMonth: boolean
  }) => ReactElement
}

export default function Cell({
  data: { month, year, cellIdx },
  render,
}: CellProps) {
  return render(getCellValue({ month, year, cellIdx }))
}
