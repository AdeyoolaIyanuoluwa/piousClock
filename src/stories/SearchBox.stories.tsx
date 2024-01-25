import React from "react";
import SearchBox from "../components/SearchBox";

export default {
    title: 'Components/SearchBox',
    component: SearchBox
}

const TemplateSearchBox = (args: any) => {
    return (
        <div>
            <SearchBox {...args} />
        </div>
    )
}
export const searchBox = TemplateSearchBox.bind({})