// @ts-ignore
import QRIcon from './images/qrCode.svg?react'
import './styles/fonts.css'
import './App.css'

function App() {

    return (
        <div className={'border'}>
            <div className={'blocIcon'}>
               <QRIcon />
            </div>

            <div className={'texts'}>
                <div className={'text-preset-1'} style={{ color: 'var(--slate-900)' }}>
                    Welcome to My Digital Portfolio
                </div>

                <div className={'text-preset-2'} style={{ color: 'var(--slate-500)' }}>
                    A collection of websites and projects I've created. Explore my work and discover everything I have to offer.
                </div>
            </div>
        </div>
    )
}

export default App
