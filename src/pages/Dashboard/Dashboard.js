import Title from "components/Title/Title"
import { Allocation } from "./charts/Allocation/Allocation"
import { AssetValue } from "./charts/AssetValue/AssetValue"

import styles from "./Dashboard.module.scss"

export const Dashboard = () => {

    return (
        <div className={styles.dashboardWrapper}>
           <Title size="s">My portfolio</Title>
           <div className={styles.graphs}>
            <div className={styles.one}>
                <AssetValue/>
            </div>
            <div  className={styles.two}>
                <Allocation/>
            </div>
            <div  className={styles.five}>3</div>
            <div  className={styles.five}>4</div>
            <div  className={styles.five}>5</div>
           
           
           </div>
        </div>
    )
}