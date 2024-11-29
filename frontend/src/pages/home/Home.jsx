import { Chart, FeaturedInfo, WidgetLg, WidgetSm } from "../../components/indexComp"
import "./home.css"
import {userData} from "../../dummyData";


export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
