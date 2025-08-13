import { DataTable } from "@/components/data-table"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset } from "@/components/ui/sidebar"
import data from "../data.json"
import { AddSupplierSheet } from "@/components/addSupplierSheet"
import { useState } from "react"
const Suppliers=()=>{
  const [openSheet,setOpenSheet]=useState(false);
    return(
        <SidebarInset>
        <SiteHeader heading={"Suppliers"}/>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* <SectionCards /> */}
              <div className="px-4 lg:px-6">
                {/* <ChartAreaInteractive /> */}
              </div>
              <DataTable data={data} add={"Add Supplier"} setOpenSheet={setOpenSheet} />
            </div>
          </div>
        </div>
         <AddSupplierSheet open={openSheet} onOpenChange={setOpenSheet} />
      </SidebarInset>
    )
}
export default Suppliers