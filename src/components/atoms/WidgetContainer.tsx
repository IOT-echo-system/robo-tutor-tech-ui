import {Stack, styled} from "@mui/material";
import {WidgetStyles} from "../widgets/widget";

export const WidgetContainer = styled(Stack)<{ styles: WidgetStyles }>(({theme, styles}) => ({
    margin: '0 auto',
    width: '100%',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.up('lg')]: {
        padding: styles.width === 'Center' ? theme.spacing(0) : theme.spacing(0, 8),
        width: styles.width === 'Center' ? theme.spacing(120) : '100%',
    },
    [theme.breakpoints.up('xl')]: {
        padding: styles.width === 'Center' ? theme.spacing(0) : theme.spacing(0, 16),
    },
}))
