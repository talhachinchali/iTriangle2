import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function AddSupplierSheet({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[60vw] pb-4 sm:w-[60vw] px-2 overflow-y-auto min-w-[60vw]">
        <SheetHeader>
          <SheetTitle>Add Supplier</SheetTitle>
          <SheetDescription>Fill in the details below to add a new supplier.</SheetDescription>
        </SheetHeader>

        <form className="mt-6 space-y-8 px-6">
          {/* SUPPLIER DETAILS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Supplier Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Supplier Type *</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="distributor">Distributor</SelectItem>
                    <SelectItem value="wholesaler">Wholesaler</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Supplier Name *</Label>
                <Input placeholder="Enter supplier name" />
              </div>
              <div>
                <Label>GST No *</Label>
                <Input placeholder="Enter GST number" />
              </div>
              <div>
                <Label>PAN No *</Label>
                <Input placeholder="Enter PAN number" />
              </div>
              <div>
                <Label>Organisation Type *</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pvt-ltd">Private Ltd</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Currency *</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select currency" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inr">INR</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Shipping Type *</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select shipping type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="air">Air</SelectItem>
                    <SelectItem value="sea">Sea</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Website</Label>
                <Input placeholder="Enter website URL" />
              </div>
              <div>
                <Label>Mobile *</Label>
                <Input placeholder="Enter mobile number" />
              </div>
              <div>
                <Label>Email *</Label>
                <Input placeholder="Enter email" />
              </div>
              <div>
                <Label>Contact Person *</Label>
                <Input placeholder="Enter contact person" />
              </div>
            </div>
          </div>

          {/* BUSINESS ADDRESS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Address Line 1 *</Label>
                <Input placeholder="Enter address" />
              </div>
              <div>
                <Label>Address Line 2</Label>
                <Input placeholder="Enter address" />
              </div>
              <div>
                <Label>Country *</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>State *</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>City *</Label>
                <Input placeholder="Enter city" />
              </div>
              <div>
                <Label>Pincode *</Label>
                <Input placeholder="Enter pincode" />
              </div>
            </div>
          </div>

          {/* SHIPPING ADDRESS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shipping Address</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox id="sameAddress" />
              <Label htmlFor="sameAddress">Same as Billing</Label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Address Line 1 *</Label>
                <Input placeholder="Enter address" />
              </div>
              <div>
                <Label>Address Line 2</Label>
                <Input placeholder="Enter address" />
              </div>
              <div>
                <Label>Country *</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>State *</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>City *</Label>
                <Input placeholder="Enter city" />
              </div>
              <div>
                <Label>Pincode *</Label>
                <Input placeholder="Enter pincode" />
              </div>
            </div>
          </div>

          {/* DOCUMENTS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Documents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Upload GST *</Label>
                <Input type="file" />
              </div>
              <div>
                <Label>Upload PAN *</Label>
                <Input type="file" />
              </div>
              <div>
                <Label>Upload MSME</Label>
                <Input type="file" />
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button>Add Supplier</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
