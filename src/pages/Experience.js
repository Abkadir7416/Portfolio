import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GiGraduateCap} from 'react-icons/gi';
import {BsBagFill} from 'react-icons/bs';
function Experience () {
    return(
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">

                <VerticalTimelineElement
                className="verticle-timeline-element--education"
                date="2010 - 2014"
                iconStyle={{background:"#3e497a",color: "#fff"}}
                icon={<GiGraduateCap/>}
                >
                    <h3 className="verticle-timeline-element-title">My Random High School , Random Place, Random State</h3>
                    <p>High School Diploma</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="verticle-timeline-element--education"
                date="2010 - 2014"
                iconStyle={{background:"#3e497a",color: "#fff"}}
                icon={<GiGraduateCap/>}
                >
                    <h3 className="verticle-timeline-element-title">My Random High School , Random Place, Random State</h3>
                    <p>High School Diploma</p>
                </VerticalTimelineElement>
                

                <VerticalTimelineElement
                className="verticle-timeline-element--education"
                date="2010 - 2014"
                iconStyle={{background:"#e9d35b",color: "#fff"}}
                icon={<BsBagFill/>}
                >
                    <h3 className="verticle-timeline-element-title">My Random High School , Random Place, Random State</h3>
                    <p>High School Diploma</p>
                </VerticalTimelineElement>
                

                <VerticalTimelineElement
                className="verticle-timeline-element--education"
                date="2010 - 2014"
                iconStyle={{background:"#e9d35b",color: "#fff"}}
                icon={<BsBagFill/>}
                >
                    <h3 className="verticle-timeline-element-title">My Random High School , Random Place, Random State</h3>
                    <p>High School Diploma</p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    )
}

export default Experience;