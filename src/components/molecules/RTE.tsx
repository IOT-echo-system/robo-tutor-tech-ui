import React from "react";
import {Stack, styled, Typography} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";

const TextContainer = styled(Typography)(({theme}) => ({
    fontSize: theme.spacing(2),
    '&.MuiTypography-h2': {
        fontSize: theme.spacing(4),
        fontWeight: 500
    }
}))

export type RTEPropsType = { type: Variant, text: string }

export const RTE: React.FC<{ data: RTEPropsType[] }> = ({data}) => {
    return <Stack p={2} spacing={2}>
        {data.map((content, index) => {
            return <TextContainer key={`RTE_${index}`} variant={content.type ?? 'body1'}>{content.text}</TextContainer>
        })}
    </Stack>
}
