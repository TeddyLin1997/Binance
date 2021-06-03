import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from 'style/index'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Group = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
`

const animationLine = keyframes`
  30% { transform: scaleY(1) };
  60% { transform: scaleY(0.4) };
`

const Line = styled.div<{ delay: number }>`
  margin: 0 2px;
  width: 8px;
  height: 32px;
  border-radius: 4px;
  background-color: ${ colors.active };
  animation: ${ animationLine } .6s linear infinite;
  animation-delay: ${ props => props.delay + 's' };
`

const Loading = () => {
  const LineList = [0, 1, 2, 3].map((item) => <Line key={ item }  delay={ item / 10 } />)

  return (
    <Wrapper>
      <Group>
        { LineList }
      </Group>
    </Wrapper>
  )
}

export default Loading