import React, { useEffect, useState } from 'react'
import "./style.css"
import Topbar from 'src/component/topbar'
import MypageCatalogButton from 'src/component/mypageguest/mypagecatalogbutton';
import Information from 'src/component/mypageguest/mypagemain/information';
import { useCookies } from 'react-cookie';
import { MAIN_PATH } from 'src/constants';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Booking from 'src/component/mypageguest/mypagemain/booking';
import BookMark from 'src/component/mypageguest/mypagemain/bookmark';
import { SignInHost } from 'src/stores';
import { hostname } from 'os';
import MyInfoManagement from 'src/component/mypagehost/myinfo';
import ReservationStatus from 'src/component/mypagehost/ReservationStatus';
import { MyAccommodationManagement } from 'src/component/mypagehost/MyAccommodationManagement';



export default function HostMypage() {

    const { signInHost } = SignInHost();

    const [hostName, setHostName] = useState<string>('');
    const [hostId, setHostId] = useState<string>('');

    // 게스트 이름 불러오기
    useEffect(() => {
        if (!signInHost) return;
        setHostName(signInHost.hostName)
        setHostId(signInHost.hostId)
    }, [signInHost])

    const datail1 = "내정보관리"
    const datail2 = "예약현황"
    const datail3 = "내 숙소관리"

    const [click, setClick] = useState<string>(datail1)
    const [cookies, setCookie] = useCookies();

    const navigator = useNavigate();

    // event handler: 분류 버튼 클릭 이벤트 핸들러 //
    const onClickButtonHandler = (distimction: string) => {
        setClick(distimction);
    }

    const testValue = true;

    // useEffect(() => {
    //     if (!cookies['hostAccessToken']) navigator(MAIN_PATH);
    // }, [Topbar]);

    const ConSortArea = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
  `;


    return (
        <>
            <Topbar />
            <div id='mypage-wrapper'>
                <div id='mypage-container'>
                    <div className='hostMypage-side-bar'>
                        <MypageCatalogButton text={datail1} activite={click === datail1 || click === ''} onClick={onClickButtonHandler} />
                        <MypageCatalogButton text={datail2} activite={click === datail2 || click === ''} onClick={onClickButtonHandler} />
                        <MypageCatalogButton text={datail3} activite={click === datail3 || click === ''} onClick={onClickButtonHandler} />
                    </div>
                    <div className='hostMypage-main'>
                        <MyInfoManagement activite={click === datail1 || click === ''} titletext={datail1} username={hostName} />
                        <ReservationStatus activite={click === datail2 || click === ''} titletext={datail2} username={hostName} />
                        <ReservationStatus activite={click === datail2 || click === ''} titletext={datail2} username={hostName} />
                        {/* <AccommodationManagePage /> */}
                    </div>
                </div>
            </div>
        </>
    )

}
