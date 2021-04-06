import {useRouter} from "next/router";
import {useEffect, useState} from 'react';

const Custom404 = () => {

    const router = useRouter();
    const [sec, setSec] = useState(3);

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    useEffect(() => {
        if(sec !== 1) {
            setTimeout(() => {
                setSec(sec => sec - 1);
            }, 1000)
        }
    }, [sec]);


    return(
        <>
            <h1>Oops. This page doesn't exist.</h1>
            <h2>You will be redirected back to the homepage in {sec} seconds.</h2>
        </>
    )
}

export default Custom404;