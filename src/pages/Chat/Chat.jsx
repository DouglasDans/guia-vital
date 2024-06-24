import React, { Fragment } from 'react'
import TitlePageChat from '../../components/Chat/TitlePageChat'
import Container from '../../components/Container'
import SendIcon from '@mui/icons-material/Send';
export default function Chat() {
  return (
    <Fragment>
      <TitlePageChat title={'Doutor Preston Burke'}/>
      <Container>
        <div>
          <div style={{position: 'absolute', bottom: '80px', width: '95vw', display: 'flex', justifyContent: 'flex-end'}}>
            <span style={{background: '#F3F3F3', padding: '1rem', borderRadius: '4px'}}>
              Olá Doutor
            </span>
          </div>
          <div style={{position: 'absolute', bottom: '0px', width: '95%', lineHeight: '30px', display: 'flex', justifyContent: 'space-between', padding: '1rem', gap: '1rem'}}>
            <input type="text" placeholder={'Digite sua Mensagem'}
              style={{height: '30px', width: "100%", border: '1px solid #ADADAD'}}
            />
            <button style={{background: '#C7F5FF', fontWeight: '600', height: "40px", textDecoration: 'none', color: 'black', borderRadius: '4px', border: '1px solid #ADADAD'}}>
              <SendIcon/>
            </button>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}
