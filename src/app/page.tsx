import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/table"
import { CheckIcon, EditIcon, TrashIcon } from "lucide-react"
import { Button } from "../components/ui/button"
import { ButtonAddTask } from "./dashboard/_components/button-add-task"

export default function Page() {
  const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]
  return (
    <div className="cotainer w-full mx-0">
      <div className="flex justify-between">
        <h1>Criar item</h1>
        <ButtonAddTask/>
      </div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ITEM</TableHead>
          <TableHead className="text-right">AÇÕES</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <Button variant = "outline" size= "icon"><CheckIcon/></Button>
            <Button variant = "destructive" size= "icon"><TrashIcon/></Button>
            <Button variant = "destructive" size= "icon"><EditIcon/></Button>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}
