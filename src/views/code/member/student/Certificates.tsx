import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layouts from '../../Layouts'

import { size, textCustom } from '@root/utils/Styles'

import CardComp from '@root/components/specific/code/member/card/CardComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import HandleComp from '@root/components/common/button/HandleComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'
import LoadingComp from '@root/components/common/LoadingComp'

import { RootState } from '@root/redux/store'
import { studentCertificateActions } from '@root/redux/code/actions/member'

const Certificates = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { data: certificates, loading: certificatesLoading } = useSelector((state: RootState) => state.code.studentCertificatesResult)
    const { loading: certificateDownloadLoading } = useSelector((state: RootState) => state.code.studentCertificateResult)

    useEffect(() => {

    }, [certificates])

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>

                <Text style={textCustom(theme).textBold}>Certificates</Text>

                {certificatesLoading ? <LoadingComp type='primary' /> : !certificates ? <BadgeComp text="You must complete the course" type='warning' /> :
                    <View style={{ rowGap: size.m }}>
                        {certificates.map((value: any, index: number) => (
                            <CardComp key={index} order={index + 1} additional={
                                certificateDownloadLoading ? <LoadingComp type='primary' /> :
                                    <HandleComp text='Download' type='success' onPress={() => {
                                        dispatch(studentCertificateActions.init(`${value.course.title} - ${value.student.name}`, value.course_id))
                                    }} />
                            }>
                                <ElementComp keyword='certificate id' value={value.id} />
                                <ElementComp keyword='name' value={value.course.title} />
                                <ElementComp keyword='created at' value={value.created_at} />
                            </CardComp>
                        ))}
                    </View>
                }
            </View>

        </Layouts>
    )
}

export default Certificates