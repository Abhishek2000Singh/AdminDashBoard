import "./featuredinfo.css"
import {ArrowDownward,ArrowUpward} from '@mui/icons-material';

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,415</span>
                    <span className="featuredMoneyRate">-11.5% <ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">-1.5% <ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,215</span>
                    <span className="featuredMoneyRate">+2.5% <ArrowUpward className="featuredIcon positive"/> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
