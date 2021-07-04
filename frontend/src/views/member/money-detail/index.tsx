import React, { useState } from 'react'
import { CardHead, CardTitle, MoneyTotal, MoneyNum, Update } from './index.style'
import Card from '@/components/card'
import refresh from 'images/refresh.svg'

interface MoneySummary {
  total: number;
  balance: number;
  wallet: number;
  update: () => void;
}

const MoneySummary = ({ total, balance, wallet, update }: MoneySummary) => {

  const [isLoad, setIsload] = useState(false)

  const handleUpdate = async () => {
    setIsload(true)
    await update()
    setIsload(false)
  }

  return (
    <Card>
      <CardHead>
        <h3>資產總值</h3>
        <Update isLoad={isLoad} src={refresh} onClick={handleUpdate}/>
      </CardHead>

      <MoneyTotal>$ {total.toFixed(2)} USD</MoneyTotal>

      <CardTitle>明細</CardTitle>

      <MoneyNum>
        <span>餘額</span>
        <span>$ {balance.toFixed(2)}</span>
      </MoneyNum>
      <MoneyNum>
        <span>持幣估值</span>
        <span>$ {wallet.toFixed(2)}</span>
      </MoneyNum>
    </Card>
  )
}

export default MoneySummary