import { useStore } from '../components/state'
import { useRef } from 'react';
import Post from './post';
import Style from '../styles/post-get.module.css'
import GetHome from './get_home';

export default function Home() {

  const node1 = useRef()
  const node2 = useRef()
  const node3 = useRef()


  const show = useStore(state => state.show)
  const call = useStore(state => state.call)
  const errorText = useStore(state => state.errorText)
  const callGet = useStore(state => state.callGet)
  const nameGet = useStore(state => state.nameGet)


  const setId = useStore(state => state.setId)
  const setName = useStore(state => state.setName)
  const setPrice = useStore(state => state.setPrice)
  const setShow = useStore(state => state.setShow)
  const setCall = useStore(state => state.setCall)
  const setErrorText = useStore(state => state.setErrorText)

  const handleClick = () => {
    setShow('none')
    setErrorText('')

    setId(node1.current.value)
    setName(node2.current.value)
    setPrice(node3.current.value)

    setCall(true)
  }

  function ErrorCall() {
    return <div style={{ color: 'red', marginTop: 20 }}>{errorText}</div>
  }

  return (
    <div className={Style.container} >
      <div className={Style.post} >
        <input ref={node1} size='5' type='number' placeholder="villa id" className={Style.input} />
        <input ref={node2} size='7' type='text' placeholder="villa name" className={Style.input} />
        <input ref={node3} size='5' type='number' placeholder="price" className={Style.input} />
        <button style={{ display: show }} onClick={handleClick} className={Style.submit}> Post </button>
        {call ? <Post /> : <ErrorCall />}
      </div>
      <div className={Style.get} >
        <h3>Villas</h3>
        {
          callGet ?
            <GetHome />
            :
            <ul>
              {
                nameGet.map(e =>
                  <li key={e} >
                    {e}
                  </li>
                )
              }
            </ul>
        }
      </div>
    </div>

  )
}
