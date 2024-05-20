import { TouchableOpacity } from 'react-native'
import React from 'react'

import Delete from '@svg/member/shop/delete'
import { root } from '@root/utils/Styles'

const DeleteWebComp = () => {
    return (
        <TouchableOpacity>
            <Delete width={root.sizeX} height={root.sizeX} fill={root.linkColor} />
        </TouchableOpacity>
    )
}

export default DeleteWebComp