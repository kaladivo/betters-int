import './index.css'

type OneDayUptime = 'green' | 'yellow' | 'red'
type DaysData = Array<OneDayUptime>

function generateRandomDaysData(): DaysData {
    return Array(90)
        .fill(0)
        .map(() => {
            const random = Math.floor(Math.random() * 20)
            if(random < 15) {
                return 'green'
            } else if (random < 17) {
                return 'yellow'
            } else {
                return 'red'
            }
        })
}

function StatusChart({title, daysData}: {title: string, daysData: DaysData}) {
    return <div className="chart-container">
        <div className="chart-header">
            <div>
                ✅ {' '}
                <span>{title}</span>
            </div>
            <div>100% uptime</div>
        </div>

        <div className="bars-container">
            {daysData.map((status,index) => {
                return <div className={status} key={index} />
            })}
        </div>
    </div>
}

const API_DAYS_DATA = generateRandomDaysData()
const DASHBOARD_DATA = generateRandomDaysData()
const LANDING_PAGE_DATA = generateRandomDaysData()
export default function StatusCharts() {
    return <div  className={"charts"}>
        <div className="charts-header">
            <h2>Current status by service</h2>
        </div>
        <div className="status-section">
            <StatusChart title="API" daysData={API_DAYS_DATA}></StatusChart>
        </div>
        <div className="status-section">
            <StatusChart title="Dashboard" daysData={DASHBOARD_DATA}></StatusChart>
        </div>
        <div className="status-section">
            <StatusChart title="Landing page" daysData={LANDING_PAGE_DATA}></StatusChart>
        </div>
    </div>
}
