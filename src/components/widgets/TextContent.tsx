import React from 'react'
import type {WidgetPropType} from './widget'
import {WidgetContainer} from '../atoms'
import type {RTEPropsType} from '../molecules'
import {RTE} from '../molecules'

export const TextContent: React.FC<WidgetPropType<RTEPropsType[]>> = ({styles, data}) => {
  return (
    <WidgetContainer styles={styles}>
      <RTE data={data} />
    </WidgetContainer>
  )
}
