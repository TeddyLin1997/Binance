import React from 'react'
import { CardTitle, MoneyTotal, MoneyNum } from './index.style'
import Card from '@/components/card'

const MoneySummary = () => {
  return (
    <Card>
      <CardTitle>資產總值</CardTitle>
      <MoneyTotal>$ 312,411.00 USD</MoneyTotal>

      <CardTitle>明細</CardTitle>
      <MoneyNum>
        <span>餘額</span>
        <span>$ 92513.00</span>
      </MoneyNum>
      <MoneyNum>
        <span>持幣估值</span>
        <span>$ 227188.12</span>
      </MoneyNum>
    </Card>
  )
}

export default MoneySummary