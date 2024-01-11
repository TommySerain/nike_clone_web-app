import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Loading() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    const handleStart = (url: string) => {
        url !== router.asPath && setLoading(true);
    }

    const handleComplete = (url: string) =>  {
        setLoading(false)
    }

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
    }
    
    
    },[])
    if (loading){
        return (
        <div className='fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-sm flex z-50 items-center justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> {/*dark: pour le mode dark*/}
        </div>
    )
    }
    
}

export default Loading
