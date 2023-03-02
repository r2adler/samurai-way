import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { FC } from 'react'
import { dialogsType, messagesType } from '../../redux/state'


interface DialogsProps {
  messages: messagesType[]
  dialogs: dialogsType[]
}
const Dialogs: FC<DialogsProps> = ({ messages, dialogs }) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          dialogs.map(obj => <DialogItem name={obj.name} id={obj.id} key={obj.id} />)
        }
      </div>
      <div className={s.messages}>
        {
          messages.map(obj => <Message message={obj.message} key={obj.id} />)
        }
      </div>
    </div>
  )
}

export default Dialogs