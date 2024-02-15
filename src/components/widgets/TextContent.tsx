import React from "react";
import {WidgetPropType} from "./widget";
import {WidgetContainer} from "../atoms";
import {RTE, RTEPropsType} from "../molecules";

export const TextContent: React.FC<WidgetPropType<RTEPropsType[]>> = ({styles, data}) => {
    return <WidgetContainer styles={styles}>
        <RTE data={data}/>
    </WidgetContainer>
}
