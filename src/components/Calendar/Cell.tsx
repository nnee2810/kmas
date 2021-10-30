import IDate from "defines/IDate"
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
const getCellValue = ({
  month,
  year,
  cellIdx,
}: {
  month: number
  year: number
  cellIdx: number
}) => {
  const now = new Date()
  const days = getDaysInMonth({ month: month + 1, year }),
    firstDay = getFirstDayInMonth({ month, year })

  let cell
  if (cellIdx < firstDay) {
    const daysInPrevMonth = getDaysInMonth({ month, year })
    cell = {
      value: {
        date: daysInPrevMonth - firstDay + cellIdx + 1,
        month: month - 1 < 0 ? 11 : month - 1,
        year: month - 1 < 0 ? year - 1 : year,
      },
      isToday: false,
      isDiffMonth: true,
    }
  } else if (cellIdx - firstDay >= days) {
    cell = {
      value: {
        date: cellIdx - firstDay - days + 1,
        month: month + 1 > 11 ? 0 : month + 1,
        year: month + 1 > 11 ? year + 1 : year,
      },
      isToday: false,
      isDiffMonth: true,
    }
  } else
    cell = {
      value: {
        date: cellIdx - firstDay + 1,
        month,
        year,
      },
      isToday:
        cellIdx - firstDay + 1 === now.getDate() &&
        month === now.getMonth() &&
        year === now.getFullYear(),
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
    value: IDate
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
