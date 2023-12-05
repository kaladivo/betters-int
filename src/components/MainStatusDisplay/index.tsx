import './index.css'
import operationalSvg from './assets/operational.svg'

export default function MainStatusText() {
    return <div className="main-status-root">
        <img src={operationalSvg} alt={"ok"}/>
        <h1 className="h1">All services are online</h1>
        {/*TODO time from date object*/}
        <div className="subtitle">As of June 1st, 1:46 PM ET</div>
    </div>
}
