export type WidgetStyles = { width: 'Boxed' | 'FullWidth' | 'Center' }
export type WidgetPropType<T> = { styles: WidgetStyles, data: T }
export type Content = { widget: 'RTE' } & WidgetPropType<typeof Content.widget>
