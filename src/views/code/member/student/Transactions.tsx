import WebView from 'react-native-webview'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { View, Text, ViewStyle } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef, useState } from 'react'

import Layouts from '../../Layouts'

import { _formatCurrency } from '@root/utils/Helper'
import { flexCustom, size, textCustom } from '@root/utils/Styles'

import CardComp from '@root/components/specific/code/member/card/CardComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import HandleComp from '@root/components/common/button/HandleComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'
import LoadingComp from '@root/components/common/LoadingComp'
import PaginationComp from '@root/components/common/PaginationComp'
import BottomSheetModalComp from '@root/components/common/BottomSheetModalComp'

import { RootState } from '@root/redux/store'
import { studentDestroyTransactionActions, studentTransactionsActions } from '@root/redux/code/actions/member'

const Transactions = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const { data: transactions, loading: transactionsLoading } = useSelector((state: RootState) => state.code.studentTransactionsResult)
    const { data: destroyTransactionSuccess, error: destroyTransactionError, loading: destroyTransactionLoading } = useSelector((state: RootState) => state.code.studentDestroyTransactionResult)

    const dispatch = useDispatch()

    const [transactionData, setTransactionData] = useState({
        show: false,
        orderId: '',
        courseTitle: '',
        amount: '',
        createdAt: '',
        status: '',
    })

    useEffect(() => { }, [transactions])

    const modalClose = () => {
        dispatch(studentDestroyTransactionActions.failure(null))
        dispatch(studentDestroyTransactionActions.success(null))
        dispatch(studentTransactionsActions.init())
    }

    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const [url, setUrl] = useState('')

    return (
        <Layouts>
            {transactionData.show &&
                <ModalComp title='Transaction Report' onClose={() => setTransactionData({
                    show: false,
                    orderId: '',
                    courseTitle: '',
                    amount: '',
                    createdAt: '',
                    status: '',

                })}>
                    <CardComp>
                        <ElementComp keyword='order id' value={transactionData.orderId} />
                        <ElementComp keyword='course' value={transactionData.courseTitle} />
                        <ElementComp keyword='amount' value={_formatCurrency(transactionData.amount)} />
                        <ElementComp keyword='created at' value={transactionData.createdAt} />
                        <ElementComp keyword='status' value={transactionData.status} />
                    </CardComp>
                </ModalComp>
            }
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Transactions</Text>


                {transactionsLoading ? <LoadingComp type='primary' /> : !transactions ? <BadgeComp text="You haven't made a transaction yet" type='warning' /> :
                    <>
                        <PaginationComp data={transactions.links} onPageChange={value => dispatch(studentTransactionsActions.init(value))} />
                        <View style={{
                            rowGap: size.m
                        }}>
                            {transactions.data.map((value: any, index: number) => (
                                <CardComp key={index} order={index + 1} additional={
                                    <View style={flexCustom.flexRowStart as ViewStyle}>
                                        <HandleComp text='Show' type='primary' small onPress={() => setTransactionData(() => ({
                                            show: true,
                                            orderId: value.order_id,
                                            courseTitle: value.course.title,
                                            amount: value.amount,
                                            createdAt: value.created_at,
                                            status: value.status
                                        }))} />
                                        {value.status !== 'settlement' &&
                                            <HandleComp text='Paid' type='success' small onPress={() => { bottomSheetRef.current?.present(); setUrl(value.midtrans_data.redirect_url) }} />}
                                        <HandleComp text='Delete' type='danger' small onPress={() => dispatch(studentDestroyTransactionActions.init(value.course.id, value.order_id))} />
                                    </View>
                                }>
                                    <ElementComp keyword='order id' value={value.order_id} />
                                    <ElementComp keyword='course' value={value.course.title} />
                                </CardComp>
                            ))}
                        </View>
                        <PaginationComp data={transactions.links} onPageChange={value => dispatch(studentTransactionsActions.init(value))} />
                    </>
                }
            </View>
            {(destroyTransactionSuccess || destroyTransactionError) &&
                <ModalComp title='Transaction' onClose={modalClose}>
                    <View style={{ rowGap: size.s }}>
                        <BadgeComp text={destroyTransactionSuccess ? destroyTransactionSuccess : destroyTransactionError} type={destroyTransactionSuccess ? 'success' : 'danger'} />
                        <HandleComp text='Ok' type='primary' onPress={modalClose} />
                    </View>
                </ModalComp>}
            <BottomSheetModalComp ref={bottomSheetRef}>
                <WebView
                    source={{ uri: url }}
                    javaScriptEnabled={true}
                    javaScriptCanOpenWindowsAutomatically={true}
                    domStorageEnabled={true}
                    cacheEnabled={true}
                    allowFileAccessFromFileURLs={true}
                    allowFileAccess={true}
                    cacheMode="LOAD_NO_CACHE"
                    mixedContentMode="compatibility"
                />
            </BottomSheetModalComp>
        </Layouts>
    )
}

export default Transactions