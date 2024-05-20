import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layouts from '../../Layouts'
import { borderDefault, buttonDefault, flexCustom, root, textCustom } from '@root/utils/Styles'
import ModalComp from '@root/components/common/alert/ModalComp'
import CardComp from '@root/components/specific/code/member/card/CardComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'

const Transactions = () => {
    const [transactionData, setTransactionData] = useState({ show: false })

    return (
        <Layouts>
            {transactionData.show &&
                <ModalComp title='Transaction Report' onClose={() => setTransactionData({ show: false })}>
                    <CardComp>
                        <ElementComp keyword='order id' value={transactionData.orderId} />
                        <ElementComp keyword='course' value={transactionData.courseTitle} />
                        <ElementComp keyword='amount' value={transactionData.amount} />
                        <ElementComp keyword='created at' value={transactionData.createdAt} />
                        <ElementComp keyword='status' value={transactionData.status} />
                    </CardComp>
                </ModalComp>
            }
            <Text style={textCustom.textBold}>Transactions</Text>
            <View style={{
                rowGap: root.sizeM
            }}>
                <CardComp order={1} additional={
                    <TouchableOpacity onPress={() => setTransactionData(() => ({
                        show: true,
                        orderId: 1,
                        courseTitle: 'PHP',
                        amount: 'Rp. 15.0asdads00',
                        createdAt: '4 may 2024',
                        status: 'settlement'
                    }))} style={[buttonDefault.buttonSmall, { borderColor: root.blueColor }]}>
                        <Text style={[textCustom.textLight, { color: root.blueColor }]}>Check</Text>
                    </TouchableOpacity>
                }>
                    <ElementComp keyword='order id' value={123321} />
                    <ElementComp keyword='course' value='Php' />
                    <ElementComp keyword='amount' value={'Rp.15.000'} />
                    <ElementComp keyword='created at' value={'04 May 2024 at 01:51 AM'} />
                    <ElementComp keyword='status' value={'settlement'} />
                </CardComp>

            </View>
        </Layouts>
    )
}

export default Transactions