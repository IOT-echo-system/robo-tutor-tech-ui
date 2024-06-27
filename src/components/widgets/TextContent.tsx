import React from 'react'
import type {WidgetPropType, WidgetStyles} from './widget'
import {WidgetContainer} from '../atoms'
import type {RTEPropsType} from '../molecules'
import {RTE} from '../molecules'

export const TextContent: React.FC<WidgetPropType<RTEPropsType & WidgetStyles>> = ({data}) => {
  return (
    <WidgetContainer styles={{width: data.width}}>
      <RTE rte={data.rte} />
    </WidgetContainer>
  )
}
