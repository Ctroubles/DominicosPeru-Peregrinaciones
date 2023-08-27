import facebookIcon from '../../assets/facebok_icon.svg'
import whatsappIcon from '../../assets/whatsap_icon.svg'
import style from './Floating.module.css'
import { useSelector } from 'react-redux'
import { WA_LINK, FB_LINK } from '../../utils.ts'
import { type RootState } from '../../redux/reducer/reducer.js'

const FlotingBubbles: React.FC = () => {
  const { country } = useSelector((state: RootState) => state)

  return (
        <div id={style.bubbles}>
            <div id={style.iconsContainer}>
                <div>
                    <a href={country === 'PE' ? WA_LINK.peru : WA_LINK.ecuador } target="blank">
                        <img src={facebookIcon} alt="" />
                    </a>
                </div>
                <div>
                    <a target="blank" href={country === 'PE' ? FB_LINK.peru : FB_LINK.ecuador}>
                        <img src={whatsappIcon} alt="" />
                    </a>
                </div>
            </div>
        </div>
  )
}

export default FlotingBubbles
