import React, {useState} from "react";
import * as S from './styles';
import Qr from 'qrcode.react';

//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//ROUTE
import {Redirect} from "react-router-dom";


function QrCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function SaveMac() {
        await localStorage.setItem('@todo/macaddress', mac);
        setRedirect(true);
        window.location.reload();
    }

    return (
        <S.Container>
            {redirect && <Redirect to="/"/>}
            <Header/>
            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Suas atividades serão sincronizadas com a do seu celular.</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={350}/>
                </S.QrCodeArea>
                <S.ValidationCode>
                    <span>Digite a numeração que apareceu no celular</span>
                    <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                    <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>
            </S.Content>
            <Footer/>
        </S.Container>
    )
}

export default QrCode;