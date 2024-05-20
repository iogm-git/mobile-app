import { TouchableOpacity } from 'react-native'
import React from 'react'

import SaveIcon from '@svg/member/shop/save'
import { root } from '@root/utils/Styles'

const AddWebComp = () => {
    return (
        <TouchableOpacity>
            <SaveIcon width={root.sizeX} height={root.sizeX} fill={root.linkColor} />
        </TouchableOpacity>
    )
}

export default AddWebComp