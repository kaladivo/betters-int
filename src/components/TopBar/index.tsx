import './index.css'

export default function TopBar() {
    return <div className={'root-container'}>
        <div className="group-container">
            <a>Wallmine</a>
            <div className="divider"></div>
            <a href="/status">status</a>
        </div>

        <button>E-mail helpdesk</button>
    </div>
}
