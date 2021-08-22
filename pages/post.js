import { useEffect } from "react";
import { useStore } from '../components/state'
import Router from 'next/router';

export default function Post() {

  const id = useStore(state => state.id)
  const name = useStore(state => state.name)
  const price = useStore(state => state.price)
  const setShow = useStore(state => state.setShow)
  const setCall = useStore(state => state.setCall)
  const setErrorText = useStore(state => state.setErrorText)
  const setCallGet = useStore(state => state.setCallGet)


  useEffect(
    async () => {
      setCall(false)

      const res = await fetch('/api/post_villa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id, name: name, price: price }),
      });

      if (res.status === 500) {
        setShow('block')
        setErrorText(JSON.stringify(await res.text()))
        Router.push('/');
      }

      if (res.status === 200) {
        setShow('block')
        // Router.push('/');
        console.log('POST status 200')
        setCallGet(true)
      }
    }, []
  )
  return <span></span>
}
