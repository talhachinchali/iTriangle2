import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset } from "@/components/ui/sidebar";
import data from "../data.json"
import { useState } from "react";
const Dashboard=()=>{
  const [openSheet,setOpenSheet]=useState(false);
  console.log(openSheet)
    return(
        <SidebarInset>
        <SiteHeader heading={"Dashboard"}/>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} add={"add data"} setOpenSheet={setOpenSheet} tab1={"Outline"} tab2={"Past performence"} tab3={"Key Personnel"} tab4={"Focus Documents"}/>
            </div>
          </div>
        </div>
      </SidebarInset>
    )
}
export default Dashboard;