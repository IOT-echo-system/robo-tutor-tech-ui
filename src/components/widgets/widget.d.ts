type WidgetType = 'TextContent' | 'HeroBanner'

export type WidgetStyles = {width: 'Boxed' | 'FullWidth' | 'Center'}
export type WidgetPropType<T = unknown> = {styles?: WidgetStyles; data: T}
export type Content = {widget: WidgetType} & WidgetPropType<typeof Content.widget>
