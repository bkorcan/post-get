import Get from "./get"
import { useStore } from '../components/state'


export default function GetHome() {

  const callGet = useStore(state => state.callGet)
  const nameGet = useStore(state => state.nameGet)

  return (
    <>
      {
        callGet
         ?
          <Get />
          :
          <></>
      }
    </>

  )
}