import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Layouts from '../../Layouts'

import { color, size, textCustom } from '@root/utils/Styles'

import CardComp from '@root/components/specific/code/member/card/CardComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

import { RootState } from '@root/redux/store'
import { instructorEarningsActions, instructorPayoutActions } from '@root/redux/code/actions/member'

import { _formatCurrency } from '@root/utils/Helper'

const Earnings = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { data: earnings, loading: earningsLoading } = useSelector((state: RootState) => state.code.instructorEarningsResult)
    const { data: member } = useSelector((state: RootState) => state.user.meData)
    const { data: payoutSuccess, error: payoutError, loading: payoutLoading } = useSelector((state: RootState) => state.code.instructorPayoutResult)

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Earnings</Text>

                {member && member.bank ?
                    <>
                        <View>
                            {earningsLoading ? <LoadingComp type='primary' /> :
                                <Text style={textCustom(theme).textMedium}>Balance : {_formatCurrency(earnings.sum)}</Text>}
                            <Text style={textCustom(theme).textLight}>You can withdraw the funds to your bank account, please click the button below</Text>
                        </View>

                        {(payoutSuccess || payoutError) &&
                            <BadgeComp text={payoutSuccess ? payoutSuccess : payoutError} type={payoutSuccess ? 'success' : 'danger'} onClose={() => {
                                dispatch(instructorPayoutActions.failure(null))
                                dispatch(instructorPayoutActions.success(null))
                                if (payoutSuccess) {
                                    dispatch(instructorEarningsActions.init())
                                }
                            }} />}

                        {payoutLoading ? <LoadingComp type='primary' /> :
                            <SubmitComp text='Disburse funds now' type='success' onPress={() => dispatch(instructorPayoutActions.init())} />}

                        <CardComp>
                            <ElementComp keyword='account' value={member.account} />
                            <ElementComp keyword='bank' value={member.bank} />
                            <ElementComp keyword='alias name' value={member.alias_name} />
                        </CardComp>
                    </>
                    :
                    <View>
                        <Text style={[textCustom(theme).textLight, { color: color.red }]}>You cannot withdraw funds, please click the button below to set up your bank account</Text>
                        <NavigateComp text='Setting Account' type='warning' to='User' isNested nested={{ screen: 'Member', params: { screen: 'Instructor' } }} />
                    </View>
                }

                {earningsLoading ? <LoadingComp type='primary' /> : !earnings && !earnings.earnings ? <BadgeComp text="You don't have any income yet" type='warning' /> :
                    <View style={{ rowGap: size.m }}>
                        {earnings.earnings.map((value: any, index: any) => (
                            <CardComp key={index} order={index + 1} additional={
                                <Text style={[textCustom(theme).textLight, {
                                    textTransform: 'capitalize',
                                    color: value.status === 'unpaid' ? color.red : value.status === 'settlement' ? color.green : color.blue
                                }]}>
                                    {value.status}
                                </Text>}>
                                <ElementComp keyword='course' value={value.course.title} />
                                <ElementComp keyword='price' value={_formatCurrency(value.amount)} />
                                <ElementComp keyword='buyer' value={value.student.name} />
                                <ElementComp keyword='created at' value={value.recorded_at} />
                            </CardComp>
                        ))}
                    </View>
                }

            </View>
        </Layouts>
    )
}

export default Earnings