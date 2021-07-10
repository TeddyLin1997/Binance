import React from 'react'
import { CardTitle, MoneyTotal, MoneyNum } from './index.style'
import Card from '@/components/card'
import { NumberFormat } from '@/helper'

interface MoneySummary {
  total: number;
  balance: number;
  wallet: number;
}

const MoneySummary = ({ total, balance, wallet }: MoneySummary) => (
  <Card>
    <h3>資產總值</h3>

    <MoneyTotal>$ {NumberFormat(total)} USD</MoneyTotal>

    <CardTitle>明細</CardTitle>

    <MoneyNum>
      <span>餘額</span>
      <span>$ {NumberFormat(balance)}</span>
    </MoneyNum>
    <MoneyNum>
      <span>持幣估值</span>
      <span>$ {NumberFormat(wallet)}</span>
    </MoneyNum>
  </Card>
)

export default MoneySummary