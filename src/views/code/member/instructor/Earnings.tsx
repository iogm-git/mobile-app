import { View, Text } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { textCustom } from '@root/utils/Styles'
import SubmitComp from '@root/components/common/button/SubmitComp'
import CardComp from '@root/components/specific/code/member/card/CardComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'

const Earnings = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Earnings</Text>
            <View>
                <Text style={textCustom.textMedium}>Balance : Rp.30.000.000</Text>
                <Text style={textCustom.textLight}>You can withdraw the funds to your bank account, please click the button below</Text>
            </View>
            <CardComp>
                <ElementComp keyword='account' value={123421} />
                <ElementComp keyword='bank' value={'PT. BCA'} />
                <ElementComp keyword='alias name' value={'e21wq'} />
            </CardComp>
            <SubmitComp text='Disburse funds now' type='success' handleSubmitOnPress={() => console.log('ads')} />
            <CardComp order={1} additional={<Text style={textCustom.textLight}>Unpaid</Text>}>
                <ElementComp keyword='course' value={'PHP'} />
                <ElementComp keyword='price' value={12332} />
                <ElementComp keyword='buyer' value={'fathia'} />
                <ElementComp keyword='created at' value={'04 May 2024 at 01:51 AM'} />
            </CardComp>
        </Layouts>
    )
}

export default Earnings